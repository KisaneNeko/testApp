import angular from 'angular';

class UserController {
    constructor() {
    'ngInject';

        this.userCopy = angular.copy(this.userData);
        this.propertyList = this.getProperties();
        this.isActive = false;
    }

    openEdit() {
        this.setActive(true);
    }

    closeEdit() {
        this.setActive(false);
    }

    setActive(isActive) {
        this.isActive = isActive;
    }

    remove() {
        this.removeUser({ user: this.userData });
    }

    getProperties() {
        const keys = Object.keys(this.userData);
        return keys.filter(item => item.indexOf('$') === -1 );
    }
}

export default UserController;