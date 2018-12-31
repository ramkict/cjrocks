export const ADMINCONFIG = {
    'department': {
        'title': 'Department Master',
        'labelText': 'Department',
        'keyField': 'departmentId',
        'twoColumn': false,
        'getURL': '/admintool/listDepartments',
        'updateURL': '/admintool/updateDepartment/',
        'deleteURL': '/admintool/deleteDepartment/',
        'createURL': '/admintool/createDepartment',
        'view': [
            {
                'columnName': 'departmentName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'departmentDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    }, 'taxUnit': {
        'title': 'Tax Unit Master',
        'labelText': 'Tax Unit',
        'keyField': 'taxUnitId',
        'twoColumn': false,
        'getURL': '/admintool/listTaxUnits',
        'updateURL': '/admintool/updateTaxUnit/',
        'deleteURL': '/admintool/deleteTaxUnit/',
        'createURL': '/admintool/createTaxUnit',
        'view': [
            {
                'columnName': 'taxUnitName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'taxUnitDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    }, 'primaryMaterial': {
        'title': 'Primary Material',
        'labelText': 'Primary Material',
        'keyField': 'primaryMaterialId',
        'twoColumn': false,
        'getURL': '/admintool/listPrimaryMaterials',
        'updateURL': '/admintool/updatePrimaryMaterial/',
        'deleteURL': '/admintool/deletePrimaryMaterial/',
        'createURL': '/admintool/createPrimaryMaterial',
        'view': [
            {
                'columnName': 'primaryMaterialCode',
                'columnTitle': 'Material Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'primaryMaterialDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'secondaryMaterial': {
        'title': 'Secondary Material',
        'labelText': 'Secondary Material',
        'keyField': 'secondaryMaterialId',
        'twoColumn': false,
        'preload': ['primaryMaterial'],
        'getURL': '/admintool/listSecondaryMaterials',
        'updateURL': '/admintool/updateSecondaryMaterial/',
        'deleteURL': '/admintool/deleteSecondaryMaterial/',
        'createURL': '/admintool/createSecondaryMaterial',
        'view': [
            {
                'columnName': 'secondaryMaterialCode',
                'columnTitle': 'Material Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'secondaryMaterialDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'primaryMaterial',
                'columnTitle': 'Primary Material',
                'field': 'select',
                'lookup': 'primarymaterial',
                'lookupkey': 'primaryMaterialId',
                'lookupdisplay': 'primaryMaterialCode',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'material': {
        'title': 'Material Master',
        'labelText': 'Material',
        'keyField': 'materialId',
        'twoColumn': false,
        'preload': ['primaryMaterial', 'secondaryMaterial'],
        'getURL': '/admintool/listSecondaryMaterials',
        'updateURL': '/admintool/updateSecondaryMaterial/',
        'deleteURL': '/admintool/deleteSecondaryMaterial/',
        'createURL': '/admintool/createSecondaryMaterial',
        'view': [
            {
                'columnName': 'materialCode',
                'columnTitle': 'Material Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'materialDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'materialTaxability',
                'columnTitle': 'Material Taxability',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'primaryMaterial',
                'columnTitle': 'Primary Material',
                'field': 'select',
                'lookup': 'primarymaterial',
                'lookupkey': 'primaryMaterialId',
                'lookupdisplay': 'primaryMaterialCode',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'secondaryMaterial',
                'columnTitle': 'Secondary Material',
                'field': 'select',
                'lookup': 'secondarymaterial',
                'lookupkey': 'secondaryMaterialId',
                'lookupdisplay': 'secondaryMaterialCode',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'bay': {
        'title': 'Bay Master',
        'labelText': 'Bay',
        'keyField': 'bayId',
        'twoColumn': false,
        'getURL': '/admintool/listBays',
        'updateURL': '/admintool/updateBay/',
        'deleteURL': '/admintool/deleteBay/',
        'createURL': '/admintool/createBay',
        'view': [
            {
                'columnName': 'bayCode',
                'columnTitle': 'Bay Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'bayDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            },
            {
                'columnName': 'bayCapacity',
                'columnTitle': 'Capacity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'bayStatus',
                'columnTitle': 'Status',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    }, 'folio': {
        'title': 'Folio Master',
        'labelText': 'Folio',
        'keyField': 'folioId',
        'twoColumn': false,
        'getURL': '/admintool/listFolios',
        'updateURL': '/admintool/updateFolio/',
        'deleteURL': '/admintool/deleteFolio/',
        'createURL': '/admintool/createFolio',
        'view': [
            {
                'columnName': 'folioDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'location': {
        'title': 'Location Master',
        'labelText': 'Location',
        'keyField': 'locationId',
        'twoColumn': false,
        'preload': ['department'],
        'getURL': '/admintool/listLocations',
        'updateURL': '/admintool/updateLocation/',
        'deleteURL': '/admintool/deleteLocation/',
        'createURL': '/admintool/createLocation',
        'view': [
            {
                'columnName': 'locationName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'locationDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            },
            {
                'columnName': 'department',
                'columnTitle': 'Department',
                'field': 'select',
                'lookup': 'department',
                'lookupkey': 'departmentId',
                'lookupdisplay': 'departmentName',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'tax': {
        'title': 'Tax Master',
        'labelText': 'Tax',
        'keyField': 'taxId',
        'twoColumn': false,
        'threeColumn': true,
        'preload': ['taxUnit'],
        'getURL': '/admintool/listTaxs',
        'updateURL': '/admintool/updateTax/',
        'deleteURL': '/admintool/deleteTax/',
        'createURL': '/admintool/createTax',
        'view': [
            {
                'columnName': 'taxName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            },
            {
                'columnName': 'value',
                'columnTitle': 'Tax Value',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            },
            {
                'columnName': 'taxUnit',
                'columnTitle': 'Tax Unit',
                'field': 'select',
                'lookup': 'taxUnit',
                'lookupkey': 'taxUnitId',
                'lookupdisplay': 'taxUnitName',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'taxDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            }, {
                'columnName': 'currentValue',
                'columnTitle': 'Current Value',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'currentPeriod',
                'columnTitle': 'Current Period',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'currentExemptedPeriod',
                'columnTitle': 'Current Exempted Period',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'exemptedLocations',
                'columnTitle': 'Exempted Location',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'futureValue',
                'columnTitle': 'Future Value',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'futurePeriod',
                'columnTitle': 'Futer Period ',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'reatedTimestamp',
                'columnTitle': 'Reated Time stamp',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            },
        ]
    },
    'taxMapper': {
        'title': 'Tax Mapper',
        'labelText': 'Tax Mapper',
        'keyField': 'taxMapperId',
        'twoColumn': false,
        'preload': ['tax', 'material'],
        'getURL': '/admintool/listTaxMappers',
        'updateURL': '/admintool/updateTaxMapper/',
        'deleteURL': '/admintool/deleteTaxMapper/',
        'createURL': '/admintool/createTaxMapper',
        'view': [
            {
                'columnName': 'tax',
                'columnTitle': 'Tax',
                'field': 'select',
                'lookup': 'tax',
                'lookupkey': 'taxId',
                'lookupdisplay': 'taxName',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }, {
                'columnName': 'material',
                'columnTitle': 'Material',
                'field': 'select',
                'lookup': 'material',
                'lookupkey': 'materialId',
                'lookupdisplay': 'materialName',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12'
            }
        ]
    },
    'weighbridge': {
        'title': 'Weigh Bridge',
        'labelText': 'Weigh Bridge',
        'keyField': 'weighBridgeId',
        'twoColumn': false,
        'threeColumn': true,
        'preload': ['location'],
        'getURL': '/admintool/listWeighBridges',
        'updateURL': '/admintool/updateWeighBridge/',
        'deleteURL': '/admintool/deleteWeighBridge/',
        'createURL': '/admintool/createWeighBridge',
        'view': [
            {
                'columnName': 'weighBridgeName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            },
            {
                'columnName': 'location',
                'columnTitle': 'Location',
                'field': 'select',
                'lookup': 'location',
                'lookupkey': 'locationId',
                'lookupdisplay': 'locationName',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeDocument',
                'columnTitle': 'Document',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeDescription   ',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            }, {
                'columnName': 'weighBridgeMake',
                'columnTitle': 'Make',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeModel',
                'columnTitle': 'Model',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeDateOfInstallation',
                'columnTitle': 'Date of Installation',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeCapacity',
                'columnTitle': 'Capacity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeBaudRate',
                'columnTitle': 'Baud Rate',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeCalibrationDate',
                'columnTitle': 'Last Calibration Date',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'nextWeighBridgeCalibrationDate',
                'columnTitle': 'next Calibration Date',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeSerialPortParity',
                'columnTitle': 'Serial Port Parity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeSerialPortStartBit',
                'columnTitle': 'Serial Port Start Bit',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }, {
                'columnName': 'weighBridgeSerialPortStoptBit',
                'columnTitle': 'Serial Port Stop Bit',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-4'
            }
        ]
    },
    'clientaddress': {
        'title': 'Client Address Master',
        'labelText': 'Address',
        'keyField': 'clientAddressId',
        'twoColumn': true,
        'getURL': '/admintool/listClientAddresses',
        'updateURL': '/admintool/updateClientAddress/',
        'deleteURL': '/admintool/deleteClientAddress/',
        'createURL': '/admintool/createClientAddress',
        'view': [
            {
                'columnName': 'clientStreet',
                'columnTitle': 'Street',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            },
            {
                'columnName': 'clientStateCode',
                'columnTitle': 'Street Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            },
            {
                'columnName': 'clientDistrict',
                'columnTitle': 'District',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            },
            {
                'columnName': 'clientState',
                'columnTitle': 'State',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            },
            {
                'columnName': 'clientPinCode',
                'columnTitle': 'Pin Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true,
                'cssClass': 'col-xs-12 col-sm-12'
            },
        ]
    }
};
