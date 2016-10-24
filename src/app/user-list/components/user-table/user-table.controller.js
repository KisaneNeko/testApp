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

    remove(user) {
        const index = this.userData.findIndex(item => user === item);
        if (index !== -1) {
            this.userData.splice(index, 1);
        }
    }

    addUser(user) {
        this.userData.push(user);
    }
}

export default UserTableController;