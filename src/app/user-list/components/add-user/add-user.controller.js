import angular from 'angular';

class UserController {
    constructor() {
        'ngInject';

        this.clearUser = { name: '', lastName: '', birthDate: '', personalIN: '', city: '', email: '' };
        this.user = angular.copy(this.clearUser);

        this.propertyList = Object.keys(this.user);
    }

    add() {
        this.addUser({ user: this.user });
        this.user = angular.copy(this.clearUser);
    }
}

export default UserController;