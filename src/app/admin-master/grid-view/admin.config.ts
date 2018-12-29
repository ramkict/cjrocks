export const ADMINCONFIG = {
    'department': {
        'title': 'Department Master',
        'labelText': 'Department',
        'getURL': '/admintool/listDepartments',
        'updateURL': '',
        'deleteURL': '',
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
        'getURL': '/admintool/listLocations',
        'updateURL': '',
        'deleteURL': '',
        'createURL': ''
    }
};
