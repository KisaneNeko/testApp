import angular from 'angular';
import { mock } from 'angular';

import '../../index';

describe('Add user', () => {
    let scope;
    let element;
    let $compile;
    let controller;
    let addSpy;

    const compileTemplate = (template) => {
        element = angular.element(template);
        addSpy = jasmine.createSpy('addUser');
        scope.addUser = addSpy;
        const el = $compile(element)(scope);
        controller = el.controller('addUser');
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
        const template = '<tr add-user="addUser(user)">';

        beforeEach(() => {
            compileTemplate(template, mockUser);
        });

        it('should initialize properly', () => {
            expect(controller.user).toBeDefined();
            expect(controller.clearUser).toBeDefined();
            expect(controller.user).toEqual(controller.clearUser);
            expect(controller.user).not.toBe(controller.clearUser);
        });

        it('should add user', () => {
            // given
            controller.user = { name: 'foo', lastName: 'bar' };

            // when
            controller.add();

            // then
            expect(addSpy).toHaveBeenCalledWith({ name: 'foo', lastName: 'bar' });
            expect(controller.user).toEqual(controller.clearUser);
        });
    });
});