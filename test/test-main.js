import 'babel-polyfill';
import angular from 'angular';
import 'angular-mocks/angular-mocks';

const context = require.context('../src', true, /spec\.js$/);
context.keys().forEach(context);
