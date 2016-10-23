class UserTableController {
    constructor(userTableService) {
    'ngInject';

        this.userTableService = userTableService;
        this.userData = [];
        this.searchString = '';
    }

    $onInit() {
        this.userData = this.userTableService.getUserData();
    }
}

export default UserTableController;