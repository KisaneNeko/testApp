import userList from '../user-data/user-data';

const initialState = {
    userList,
    searchString: ''
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                searchString: action.text
            };
        default:
            return state;
    }
};

export default users;