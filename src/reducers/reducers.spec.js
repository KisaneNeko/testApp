import reduce from './reducers';
import userList from '../user-data/user-data';

describe('reducers', () => {
    it('should return the initial state', () => {
        const result = reduce(undefined, {
            type: 'NON_EXISTING_ACTION'
        });

        expect(result.userList).toEqual(userList);
    });

    it('should remove one of the elements', () => {
        // given
        const mockState = {
            foo: 'bar',
            userList: [ 'foo', 'bar', 'buzz' ]
        };
        const mockAction = {
            type: 'REMOVE_USER',
            index: 1
        };

        // when
        const result = reduce(mockState, mockAction);

        // then
        expect(result.userList.length).toEqual(2);
        expect(result.userList).not.toContain('bar');
    });

    it('should change state of search input', () => {
        const mockState = { searchString: 'foo' };

        const { searchString } = reduce(mockState, {
            type: 'SEARCH',
            text: 'bar'
        });
        
        expect(searchString).toEqual('bar');
    });

    it('should edit user last name', () => {
        // given
        const stateMock = {
            userList: [
                { name: 'foo', lastName: 'bar'},
                { name: 'bazz', lastName: 'buzz' }
            ]
        };

        // when
        const result = reduce(stateMock, {
            type: 'MODIFY_USER',
            index: 0,
            key: 'lastName',
            value: 'foo'
        });

        // then
        expect(result.userList[0]).toEqual({ name: 'foo', lastName: 'foo' });
    });

    it('should add new user', () => {
        // given
        const mockState = { userList: [{ name: 'foo', lastName: 'bar'}] };

        // when
        const result = reduce(mockState, {
            type: 'ADD_USER',
            newUser: { name: 'buzz', lastName: 'bazz' }
        });

        // then
        expect(result.userList).toContain({ name: 'buzz', lastName: 'bazz' });
    });
});