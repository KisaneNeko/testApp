import { mock } from 'angular';

import '../../index';
import UserTableController from './user-table.controller';

describe('UserTable', () => {
    let userDataMock;
    let controller;
    let service;

    beforeEach(mock.module('user.List'));
    beforeEach(mock.inject(($injector) => {
        service = $injector.get('userTableService');
    }));

    beforeEach(() => {
        userDataMock = [
            { name: 'Foo', lastName: 'Bar', birthDate: '02.02.1992', personalIN: '111111111', city: 'Random', phone: '111-111-111', email: 'random@gmail.com' },
            { name: 'Foo2', lastName: 'Bar2', birthDate: '02.02.1992', personalIN: '111111111', city: 'Random', phone: '111-111-111', email: 'random@gmail.com' }
        ];

        controller = new UserTableController(service);
        spyOn(service, 'getUserData').and.returnValue(userDataMock);
    });

    it('should set users data', () => {
        // when
        controller.$onInit();

        // then
        expect(controller.userData).toEqual(userDataMock);
        expect(controller.userData.length).toEqual(2);

    });

    it('should set empty search string', () => {
        // when
        controller.$onInit();

        // then
        expect(controller.searchString).toBeDefined();
        expect(controller.searchString).toEqual('');
    });

    it('should remove user from the list', () => {
        // given
        const itemToBeRemoved = userDataMock[0];
        controller.$onInit();

        // when
        controller.remove(itemToBeRemoved);

        // then
        expect(controller.userData.length).toEqual(1);
    });

    it('should not remove user if not found on the list', () => {
        // given
        const user = { name: 'foo', lastName: 'bazz' };
        controller.userData = userDataMock;

        // when
        controller.remove(user);

        // then
        expect(controller.userData.length).toEqual(2);
    });

    it('should remove user from the list', () => {
        // given
        const user = { name: 'foo', lastName: 'bar' };

        // when
        controller.addUser(user);

        // then
        expect(controller.userData.length).toEqual(1);
        expect(controller.userData).toContain(user);
    });
});