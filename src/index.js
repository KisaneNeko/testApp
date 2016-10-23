import angular from 'angular';

import './app/user-list'

import AppComponent from './app/components/app.component';

export default angular.module('app', [
    'user.List'
])
    .component('app', AppComponent);