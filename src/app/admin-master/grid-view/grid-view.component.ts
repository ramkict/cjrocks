import { HttpHeaders } from '@angular/common/http';
import { AdminService } from './../admin.service';
import { ADMINCONFIG } from './admin.config';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {
  @ViewChild('formModel') formModel: ElementRef;
  moduleName;
  config;
  listData: any[];
  columns = [];
  moduleElement = {};
  constructor(public router: ActivatedRoute, public service: AdminService) {
    this.router.params.subscribe(params => {
      console.log(params);
      this.moduleName = params.m;
      this.config = ADMINCONFIG[this.moduleName];
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
  }
  add() {
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
  addData() {
    console.log(this.moduleElement);
    const headers = new HttpHeaders({ 'Context-Type': 'application/json' });
    this.service.postRequest(this.config.createURL, this.moduleElement, headers).subscribe(
      (data) => {
        this.listData = data;
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
          this.listData = data;
        } catch (e) {
          console.log(e);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
