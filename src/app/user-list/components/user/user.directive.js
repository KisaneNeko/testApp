import controller from './user.controller';
import template from './user.tpl.html';

function UserDirective() {
    'ngInject';

    return {
        restrict: 'A',
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            userData: '=',
            removeUser: '&'
        }
    }
}

export default UserDirective;