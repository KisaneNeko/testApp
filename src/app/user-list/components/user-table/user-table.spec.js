import { mock } from 'angular';

import '../../index';
import UserTableController from './user-table.controller';

describe('UserTable', () => {
    const userDataMock = [
        { name: 'Foo', lastName: 'Bar', birthDate: '02.02.1992', personalIN: '111111111', city: 'Random', phone: '111-111-111', email: 'random@gmail.com' }
    ];
    let controller;
    let service;

    beforeEach(mock.module('user.List'));
    beforeEach(mock.inject(($injector) => {
        service = $injector.get('userTableService');
    }));

    beforeEach(() => {
        controller = new UserTableController(service);
    });

    it('should set users data', () => {
        // given
        spyOn(service, 'getUserData').and.returnValue(userDataMock);

        // when
        controller.$onInit();

        expect(controller.userData).toEqual(userDataMock);
    });
});