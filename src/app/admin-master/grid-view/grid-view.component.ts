import { ApplicationSession } from './../../app.session';
import { HttpHeaders } from '@angular/common/http';
import { AdminService } from './../admin.service';
import { ADMINCONFIG } from './admin.config';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @ViewChild('formModel') formModel: ElementRef;
  @ViewChild('closeDialog') closeDialog: ElementRef;
  @ViewChild('table') table: DatatableComponent;
  @ViewChild('defbox') defbox: any;
  @ViewChild('inputbox') inputbox: any;
  @ViewChild('textarea') textarea: any;
  @ViewChild('select') select: any;
  @ViewChild('mselect') mselect: any;
  @ViewChild('pselect') pselect: any;
  @ViewChild('cselect') cselect: any;
  moduleName;
  config;
  dateTime1;
  editMode: boolean;
  listData: any[];
  columns = [];
  moduleElement = {};
  subscriotion;
  lookupObject;
  childLookupObject;
  showView: boolean;
  constructor(public r: Router, public router: ActivatedRoute, public service: AdminService, public session: ApplicationSession) {
    this.showView = false;
    this.router.params.subscribe(params => {
      this.showView = false;
      console.log(params);
      this.moduleName = params.m;
      this.config = ADMINCONFIG[this.moduleName];
      this.lookupObject = {};
      this.childLookupObject = {};
      if (this.config.preload && this.config.preload.length > 0) {
        this.preloadLookup(this.config.preload);
        console.log(this.lookupObject['department']);
      }
      this.editMode = false;
      this.columns = [];
      console.log(this.config);
      this.loadListData();
      this.config.view.forEach(element => {
        if (element.gridVisibility) {
          this.columns.push(element);
        }
      });

    });
  }

  ngOnInit() {
  }
  edit(event, selectedRow, row) {
    console.log(event, selectedRow, row);
    this.moduleElement = row;
    const multiSelectElements = this.config.view.filter(element => {
      return element.field === 'multiSelect';
    });
    if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
      multiSelectElements.forEach(element => {
        const multiLookup = this.moduleElement[element.columnName];
        let ids = [];
        multiLookup.forEach(lookupObject => {
          ids.push(lookupObject[element.lookupkey]);
        });
        this.moduleElement[element.columnName][element.lookupkey] = ids;
      });
    }
    this.editMode = true;
    this.showView = true;
    this.formModel.nativeElement.click();
  }
  add() {
    this.editMode = false;
    let formObj = '';
    this.config.view.forEach(element => {
      if (element.formVisibility) {
        formObj += formObj === '' ? '' : ',';
        if (element.lookupkey && element.lookupkey != '') {
          formObj += '"' + element.columnName + '":{}';
        } else {
          formObj += '"' + element.columnName + '":""';
        }
      }
    });
    if (formObj !== '') {
      this.moduleElement = JSON.parse('{' + formObj + '}');
    }
    this.showView = true;
    this.formModel.nativeElement.click();
  }
  preloadLookup(preload) {
    preload.forEach(element => {
      this.service.getRequest(ADMINCONFIG[element].getURL).subscribe(
        (data) => {
          this.lookupObject[element] = data;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  addData() {
    console.log(this.moduleElement);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const multiSelectElements = this.config.view.filter(element => {
      return element.field === 'multiSelect';
    });
    if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
      multiSelectElements.forEach(element => {
        const lookupElement = this.moduleElement[element.columnName][element.lookupkey];
        delete this.moduleElement[element.columnName];
        this.moduleElement[element.columnName] = [];
        lookupElement.forEach(data => {
          const dataObject = {};
          dataObject[element.lookupkey] = data;
          this.moduleElement[element.columnName].push(dataObject);
        });
      });
    }
    this.session.showLoader();
    this.service.postRequest(this.config.createURL, this.moduleElement, headers).subscribe(
      (data) => {
        this.listData = data;
        this.closeDialog.nativeElement.click();
        this.session.hideLoader();
      },
      (error) => {
        console.log(error);
        this.session.hideLoader();
      }
    );
  }
  saveData() {
    if (this.isValidToProceed()) {
      console.log(this.moduleElement);
      const multiSelectElements = this.config.view.filter(element => {
        return element.field === 'multiSelect';
      });
      if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
        multiSelectElements.forEach(element => {
          const lookupElement = this.moduleElement[element.columnName][element.lookupkey];
          delete this.moduleElement[element.columnName];
          this.moduleElement[element.columnName] = [];
          lookupElement.forEach(data => {
            const dataObject = {};
            dataObject[element.lookupkey] = data;
            this.moduleElement[element.columnName].push(dataObject);
          });
        });
      }
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      const requestObject = { ...this.moduleElement };
      delete requestObject[this.config.keyField];
      this.service.putRequest(this.config.updateURL + this.moduleElement[this.config.keyField], requestObject, headers).subscribe(
        (data) => {
          this.listData = data;
          this.closeDialog.nativeElement.click();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  deleteData() {
    if (this.isValidToProceed()) {
      console.log(this.moduleElement);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.service.deleteRequest(this.config.deleteURL + this.moduleElement[this.config.keyField]).subscribe(
        (data) => {
          this.listData = data;
          this.closeDialog.nativeElement.click();
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }
  isValidToProceed(): boolean {
    /*
     * checking mandatory field should be dirty else don't allow to proceed to submit the form
     * TODO ---
     * try to make multiple forms control into single form control make single object for validations
     */
    if ((this.defbox && this.defbox.invalid) || (this.textarea && this.textarea.invalid) ||
      (this.inputbox && this.inputbox.invalid) || (this.select && this.select.invalid)
        (this.mselect && this.mselect.invalid) || (this.pselect && this.pselect.invalid) ||
      (this.cselect && this.cselect.invalid)) {
      return false;
    } else {
      return true;
    }
  }
  onSelectChanges(parentLookup: string, childLookup: string, parentKeyField: string, parentKey: any) {
    if (this.lookupObject[parentLookup] !== undefined) {
      const childObj = this.lookupObject[parentLookup].filter(item => {
        return item[parentKeyField] === parentKey;
      });
      if (childObj && childObj.length > 0) {
        this.childLookupObject[childLookup] = childObj[0][childLookup];
      }
    }
  }

  loadListData() {
    this.service.getRequest(this.config.getURL).subscribe(
      (data) => {
        try {
          this.table.recalculate();
          this.listData = data;

        } catch (e) {
          console.log(e);
        }
      },
      (error) => {
        this.listData = [];
        console.log(error);
      }
    );
  }

}
