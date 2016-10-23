import angular from 'angular';

import UserTableComponent from './components/user-table/user-table.component';
import UserComponent from './components/user/user.component';

export default angular.module('user.List', [])
    .component('userTable', UserTableComponent)
    .component('user', UserComponent);
