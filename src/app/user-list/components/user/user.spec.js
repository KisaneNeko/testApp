import { mock } from 'angular';

import '../../index';

describe('User', () => {
    let scope;
    let element;
    let $compile;
    let controller;

    const compileTemplate = (template, userData) => {
        element = angular.element(template);
        scope.userData = userData;
        const el = $compile(element)(scope);
        controller = el.controller('user');
        scope.$apply();
        return el;
    };

    beforeEach(mock.module('user.List'));
    beforeEach(mock.inject(($injector) => {
        scope = $injector.get('$rootScope').$new();
        $compile = $injector.get('$compile');
    }));

    describe('methods', () => {
        const mockUser = { name: 'Foo', lastName: 'Bar' };
        const editedUser = { name: 'Name', lastName: 'Random' };
        const template = '<tr user user-data="userData">';

        beforeEach(() => {
            compileTemplate(template, mockUser);
        });

        it('should initialize properly', () => {
            expect(controller.userData).toEqual(mockUser);
            expect(controller.userCopy).toEqual(mockUser);
            expect(controller.isActive).toBe(false);
        });

        it('should save user data on apply', () => {
            // given
            controller.userCopy = editedUser;

            // when
            controller.apply();

            // then
            expect(controller.userData).toEqual(controller.userCopy);
        });
        
        it('should discard changes on cancel', () => {
            // given
            controller.userCopy = editedUser;
            
            // when
            controller.cancel();
            
            // then
            expect(controller.userData).toEqual(mockUser);
            expect(controller.userCopy).toEqual(controller.userData);
        });
        
        it('should set directive as active', () => {
            // when
            controller.setActive(true);

            // then
            expect(controller.isActive).toEqual(true);
        });

        it('should cancel set directive as inactive', () => {
            // given
            controller.setActive(true);

            // when
            controller.cancel();

            // then
            expect(controller.isActive).toBe(false);
        });

        it('should apply set directive as inactive', () => {
            // given
            controller.setActive(true);

            // when
            controller.apply();

            // then
            expect(controller.isActive).toBe(false);
        });
        
        afterEach(() => {
            expect(controller.userData).not.toBe(controller.userCopy);
        })
    });
});