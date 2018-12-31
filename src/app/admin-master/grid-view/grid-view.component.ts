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
  moduleName;
  config;
  editMode: boolean;
  listData: any[];
  columns = [];
  moduleElement = {};
  subscriotion;
  lookupObject = [];
  constructor(public r: Router, public router: ActivatedRoute, public service: AdminService) {
    this.router.params.subscribe(params => {
      console.log(params);
      this.moduleName = params.m;
      this.config = ADMINCONFIG[this.moduleName];
      this.lookupObject = [];
      if (this.config.preload && this.config.preload.length > 0) {
        this.preloadLookup(this.config.preload);
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
    this.editMode = true;
    this.formModel.nativeElement.click();
  }
  add() {
    this.editMode = false;
    let formObj = '';
    this.config.view.forEach(element => {
      if (element.formVisibility) {
        formObj += formObj === '' ? '' : ',';
        formObj += '"' + element.columnName + '":""';
      }
    });
    if (formObj !== '') {
      this.moduleElement = JSON.parse('{' + formObj + '}');
    }
    this.formModel.nativeElement.click();
  }
  preloadLookup(preload) {
    
  }
  addData() {
    console.log(this.moduleElement);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.service.postRequest(this.config.createURL, this.moduleElement, headers).subscribe(
      (data) => {
        this.listData = data;
        this.closeDialog.nativeElement.click();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  saveData() {
    console.log(this.moduleElement);
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

  deleteData() {
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
