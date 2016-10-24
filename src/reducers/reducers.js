import userList from '../user-data/user-data';

const initialState = {
    userList,
    searchString: ''
};

function removeUser(list, index) {
    return [
        ...list.slice(0, index),
        ...list.slice(index+1)
    ];
}

function modifyUser(list, index, key, value) {
    const user = list[index];
    const modifiedUser = {...user};
    modifiedUser[key] = value;

    return [
        ...list.slice(0, index),
        modifiedUser,
        ...list.slice(index+1)
    ];
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchString: action.text
            };
        case 'REMOVE_USER':
            return {
                ...state,
                userList: removeUser(state.userList, action.index)
            };
        case 'MODIFY_USER':
            return {
                ...state,
                userList: modifyUser(state.userList, action.index, action.key, action.value)
            };
        default:
            return state;
    }
};

export default users;