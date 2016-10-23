import angular from 'angular';

class UserController {
    constructor() {
    'ngInject';

        this.userCopy = angular.copy(this.userData);
        this.isActive = false;
    }

    apply() {
        Object.assign(this.userData, this.userCopy);
        this.setActive(false);
    }

    getPropertyList() {
        return Object.keys(this.userCopy);
    }

    cancel() {
        console.log(this.userCopy);
        this.userCopy = this.userData;
        this.setActive(false);
    }

    setActive(isActive) {
        this.isActive = isActive;
    }
}

export default UserController;