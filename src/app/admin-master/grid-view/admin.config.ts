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
