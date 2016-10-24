import * as actions from './index';

describe('User list actions', () => {
    it('should create search action', () => {
        expect(actions.search('foo')).toEqual({
            type: 'SEARCH',
            text: 'foo'
        });
    });

    it('should create remove_user action', () => {
        expect(actions.removeUser(1)).toEqual({
            type: 'REMOVE_USER',
            index: 1
        })
    });

    it('should create modify_user action', () => {
        expect(actions.modifyUser(1, 'name', 'foo')).toEqual({
            type: 'MODIFY_USER',
            index: 1,
            key: 'name',
            value: 'foo'
        });
    });
});