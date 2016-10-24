import controller from './add-user.controller';
import template from './add-user.tpl.html';

function AddUserDirective() {
    'ngInject';

    return {
        restrict: 'A',
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            addUser: '&'
        }
    }
}

export default AddUserDirective;