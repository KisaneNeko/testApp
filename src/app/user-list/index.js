import angular from 'angular';

import UserTableComponent from './components/user-table/user-table.component';
import UserDirective from './components/user/user.directive';
import UserTableService from './components/user-table/user-table.service';
import AddUserDirective from './components/add-user/add-user.directive';

export default angular.module('user.List', [])
    .component('userTable', UserTableComponent)
    .directive('user', UserDirective)
    .directive('addUser', AddUserDirective)
    .service('userTableService', UserTableService);
