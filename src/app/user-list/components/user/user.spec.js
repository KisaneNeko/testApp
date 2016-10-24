import { mock } from 'angular';

import '../../index';

describe('User', () => {
    let scope;
    let element;
    let $compile;
    let controller;
    let removeSpy;

    const compileTemplate = (template, userData) => {
        element = angular.element(template);
        scope.userData = userData;
        removeSpy = scope.removeUser = jasmine.createSpy('removeUser');
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
        const template = '<tr user user-data="userData" remove-user="removeUser(user)">';

        beforeEach(() => {
            compileTemplate(template, mockUser);
        });

        it('should initialize properly', () => {
            expect(controller.userData).toEqual(mockUser);
            expect(controller.userCopy).toEqual(mockUser);
            expect(controller.isActive).toBe(false);
            expect(controller.propertyList).toEqual(['name', 'lastName']);
        });

        it('should filter out angular specific properties', () => {
            // given
            controller.userData.$$hash = 'random';

            // when
            const result = controller.getProperties();

            // then
            expect(result).not.toContain('$$hash');
        });

        it('should set directive as active', () => {
            // when
            controller.openEdit();

            // then
            expect(controller.isActive).toEqual(true);
        });

        it('should set directive as inactive', () => {
            // given
            controller.setActive(true);

            // when
            controller.closeEdit();

            // then
            expect(controller.isActive).toBe(false);
        });

        it('should remove user from the list', () => {
            // given
            const user = { name: 'foo', lastName: 'bar' };
            controller.userData = user;

            // when
            controller.remove(user);

            // then
            expect(removeSpy).toHaveBeenCalledWith(user);
        });
        
        afterEach(() => {
            expect(controller.userData).not.toBe(controller.userCopy);
        })
    });
});