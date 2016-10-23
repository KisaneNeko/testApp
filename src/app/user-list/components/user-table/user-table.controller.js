class UserTableController {
    constructor(userTableService) {
    'ngInject';

        this.userTableService = userTableService;
        this.userData = [];
    }

    $onInit() {
        this.userData = this.userTableService.getUserData();
    }
}

export default UserTableController;