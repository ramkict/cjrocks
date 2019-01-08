import * as tslib_1 from "tslib";
import { ApplicationSession } from './../../app.session';
import { HttpHeaders } from '@angular/common/http';
import { AdminService } from './../admin.service';
import { ADMINCONFIG } from './admin.config';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
var GridViewComponent = /** @class */ (function () {
    function GridViewComponent(r, router, service, session) {
        var _this = this;
        this.r = r;
        this.router = router;
        this.service = service;
        this.session = session;
        this.columns = [];
        this.moduleElement = {};
        this.showView = false;
        this.router.params.subscribe(function (params) {
            _this.showView = false;
            console.log(params);
            _this.moduleName = params.m;
            _this.config = ADMINCONFIG[_this.moduleName];
            _this.lookupObject = {};
            _this.childLookupObject = {};
            if (_this.config.preload && _this.config.preload.length > 0) {
                _this.preloadLookup(_this.config.preload);
                console.log(_this.lookupObject['department']);
            }
            _this.editMode = false;
            _this.columns = [];
            console.log(_this.config);
            _this.loadListData();
            _this.config.view.forEach(function (element) {
                if (element.gridVisibility) {
                    _this.columns.push(element);
                }
            });
        });
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    GridViewComponent.prototype.edit = function (event, selectedRow, row) {
        var _this = this;
        console.log(event, selectedRow, row);
        this.moduleElement = row;
        var multiSelectElements = this.config.view.filter(function (element) {
            return element.field === 'multiSelect';
        });
        if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
            multiSelectElements.forEach(function (element) {
                var multiLookup = _this.moduleElement[element.columnName];
                var ids = [];
                multiLookup.forEach(function (lookupObject) {
                    ids.push(lookupObject[element.lookupkey]);
                });
                _this.moduleElement[element.columnName][element.lookupkey] = ids;
            });
        }
        this.editMode = true;
        this.showView = true;
        this.formModel.nativeElement.click();
    };
    GridViewComponent.prototype.add = function () {
        this.editMode = false;
        var formObj = '';
        this.config.view.forEach(function (element) {
            if (element.formVisibility) {
                formObj += formObj === '' ? '' : ',';
                if (element.lookupkey && element.lookupkey != '') {
                    formObj += '"' + element.columnName + '":{}';
                }
                else {
                    formObj += '"' + element.columnName + '":""';
                }
            }
        });
        if (formObj !== '') {
            this.moduleElement = JSON.parse('{' + formObj + '}');
        }
        this.showView = true;
        this.formModel.nativeElement.click();
    };
    GridViewComponent.prototype.preloadLookup = function (preload) {
        var _this = this;
        preload.forEach(function (element) {
            _this.service.getRequest(ADMINCONFIG[element].getURL).subscribe(function (data) {
                _this.lookupObject[element] = data;
            }, function (error) {
                console.log(error);
            });
        });
    };
    GridViewComponent.prototype.addData = function () {
        var _this = this;
        console.log(this.moduleElement);
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        var multiSelectElements = this.config.view.filter(function (element) {
            return element.field === 'multiSelect';
        });
        if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
            multiSelectElements.forEach(function (element) {
                var lookupElement = _this.moduleElement[element.columnName][element.lookupkey];
                delete _this.moduleElement[element.columnName];
                _this.moduleElement[element.columnName] = [];
                lookupElement.forEach(function (data) {
                    var dataObject = {};
                    dataObject[element.lookupkey] = data;
                    _this.moduleElement[element.columnName].push(dataObject);
                });
            });
        }
        this.session.showLoader();
        this.service.postRequest(this.config.createURL, this.moduleElement, headers).subscribe(function (data) {
            _this.listData = data;
            _this.closeDialog.nativeElement.click();
            _this.session.hideLoader();
        }, function (error) {
            console.log(error);
            _this.session.hideLoader();
        });
    };
    GridViewComponent.prototype.saveData = function () {
        var _this = this;
        if (this.isValidToProceed()) {
            console.log(this.moduleElement);
            var multiSelectElements = this.config.view.filter(function (element) {
                return element.field === 'multiSelect';
            });
            if (multiSelectElements !== undefined && multiSelectElements.length > 0) {
                multiSelectElements.forEach(function (element) {
                    var lookupElement = _this.moduleElement[element.columnName][element.lookupkey];
                    delete _this.moduleElement[element.columnName];
                    _this.moduleElement[element.columnName] = [];
                    lookupElement.forEach(function (data) {
                        var dataObject = {};
                        dataObject[element.lookupkey] = data;
                        _this.moduleElement[element.columnName].push(dataObject);
                    });
                });
            }
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            var requestObject = tslib_1.__assign({}, this.moduleElement);
            delete requestObject[this.config.keyField];
            this.service.putRequest(this.config.updateURL + this.moduleElement[this.config.keyField], requestObject, headers).subscribe(function (data) {
                _this.listData = data;
                _this.closeDialog.nativeElement.click();
            }, function (error) {
                console.log(error);
            });
        }
    };
    GridViewComponent.prototype.deleteData = function () {
        var _this = this;
        if (this.isValidToProceed()) {
            console.log(this.moduleElement);
            var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            this.service.deleteRequest(this.config.deleteURL + this.moduleElement[this.config.keyField]).subscribe(function (data) {
                _this.listData = data;
                _this.closeDialog.nativeElement.click();
            }, function (error) {
                console.log(error);
            });
        }
    };
    GridViewComponent.prototype.isValidToProceed = function () {
        /*
         * checking mandatory field should be dirty else don't allow to proceed to submit the form
         * TODO ---
         * try to make multiple forms control into single form control make single object for validations
         */
        if ((this.defbox && this.defbox.invalid) || (this.textarea && this.textarea.invalid) ||
            (this.inputbox && this.inputbox.invalid) || (this.select && this.select.invalid)(this.mselect && this.mselect.invalid) || (this.pselect && this.pselect.invalid) ||
            (this.cselect && this.cselect.invalid)) {
            return false;
        }
        else {
            return true;
        }
    };
    GridViewComponent.prototype.onSelectChanges = function (parentLookup, childLookup, parentKeyField, parentKey) {
        if (this.lookupObject[parentLookup] !== undefined) {
            var childObj = this.lookupObject[parentLookup].filter(function (item) {
                return item[parentKeyField] === parentKey;
            });
            if (childObj && childObj.length > 0) {
                this.childLookupObject[childLookup] = childObj[0][childLookup];
            }
        }
    };
    GridViewComponent.prototype.loadListData = function () {
        var _this = this;
        this.service.getRequest(this.config.getURL).subscribe(function (data) {
            try {
                _this.table.recalculate();
                _this.listData = data;
            }
            catch (e) {
                console.log(e);
            }
        }, function (error) {
            _this.listData = [];
            console.log(error);
        });
    };
    tslib_1.__decorate([
        ViewChild('formModel'),
        tslib_1.__metadata("design:type", ElementRef)
    ], GridViewComponent.prototype, "formModel", void 0);
    tslib_1.__decorate([
        ViewChild('closeDialog'),
        tslib_1.__metadata("design:type", ElementRef)
    ], GridViewComponent.prototype, "closeDialog", void 0);
    tslib_1.__decorate([
        ViewChild('table'),
        tslib_1.__metadata("design:type", DatatableComponent)
    ], GridViewComponent.prototype, "table", void 0);
    tslib_1.__decorate([
        ViewChild('defbox'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "defbox", void 0);
    tslib_1.__decorate([
        ViewChild('inputbox'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "inputbox", void 0);
    tslib_1.__decorate([
        ViewChild('textarea'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "textarea", void 0);
    tslib_1.__decorate([
        ViewChild('select'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "select", void 0);
    tslib_1.__decorate([
        ViewChild('mselect'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "mselect", void 0);
    tslib_1.__decorate([
        ViewChild('pselect'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "pselect", void 0);
    tslib_1.__decorate([
        ViewChild('cselect'),
        tslib_1.__metadata("design:type", Object)
    ], GridViewComponent.prototype, "cselect", void 0);
    GridViewComponent = tslib_1.__decorate([
        Component({
            selector: 'app-grid-view',
            templateUrl: './grid-view.component.html',
            styleUrls: ['./grid-view.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute, AdminService, ApplicationSession])
    ], GridViewComponent);
    return GridViewComponent;
}());
export { GridViewComponent };
//# sourceMappingURL=grid-view.component.js.map