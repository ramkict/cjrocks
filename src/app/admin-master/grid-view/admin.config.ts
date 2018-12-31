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
                'formVisibility': true
            }, {
                'columnName': 'departmentDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true
            },
            {
                'columnName': 'departmentId',
                'columnTitle': 'ID',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': false,
                'formVisibility': false
            }
        ]
    }, 'taxunit': {
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
                'formVisibility': true
            }, {
                'columnName': 'taxUnitDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true
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
                'formVisibility': true
            }, {
                'columnName': 'bayDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true
            },
            {
                'columnName': 'bayCapacity',
                'columnTitle': 'Capacity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'bayStatus',
                'columnTitle': 'Status',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
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
                'formVisibility': true
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
                'formVisibility': true
            }, {
                'columnName': 'locationDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true
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
                'formVisibility': true
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
                'columnName': 'locationName',
                'columnTitle': 'Name',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'locationDescription',
                'columnTitle': 'Description',
                'field': 'textarea',
                'mandatory': true,
                'flexGrow': '3',
                'gridVisibility': true,
                'formVisibility': true
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
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeMake',
                'columnTitle': 'Make',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeModel',
                'columnTitle': 'Model',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeDocument',
                'columnTitle': 'Document',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeDateOfInstallation',
                'columnTitle': 'Date of Installation',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeCapacity',
                'columnTitle': 'Capacity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeBaudRate',
                'columnTitle': 'Baud Rate',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeCalibrationDate',
                'columnTitle': 'Last Calibration Date',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'nextWeighBridgeCalibrationDate',
                'columnTitle': 'next Calibration Date',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeSerialPortParity',
                'columnTitle': 'Serial Port Parity',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeSerialPortStartBit',
                'columnTitle': 'Serial Port Start Bit',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
            }, {
                'columnName': 'weighBridgeSerialPortStoptBit',
                'columnTitle': 'Serial Port Stop Bit',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': false,
                'formVisibility': true
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
                'formVisibility': true
            },
            {
                'columnName': 'clientStateCode',
                'columnTitle': 'Street Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            },
            {
                'columnName': 'clientDistrict',
                'columnTitle': 'District',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            },
            {
                'columnName': 'clientState',
                'columnTitle': 'State',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            },
            {
                'columnName': 'clientPinCode',
                'columnTitle': 'Pin Code',
                'field': 'text',
                'mandatory': true,
                'flexGrow': '1',
                'gridVisibility': true,
                'formVisibility': true
            },
        ]
    }
};
