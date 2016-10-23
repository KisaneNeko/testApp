import UserTableService from './user-table.service';
import userData from '../../../../user-data/data-10';

describe('UserTableService', () => {
    let service;

    beforeEach(() => {
        service = new UserTableService();
    });

    describe('methods', () => {
        it('should return user data', () => {
            // when
            const result = service.getUserData();

            // then
            expect(result).toEqual(userData);
        });
    });
});