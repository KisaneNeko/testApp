const search = (text) => ({
    type: 'SEARCH',
    text
});

const removeUser = (index) => ({
   type: 'REMOVE_USER',
   index
});

const modifyUser = (index, key, value) => ({
    type: 'MODIFY_USER',
    index,
    key,
    value
});

const addUser = (newUser) => ({
    type: 'ADD_USER',
    newUser
});

export { search, removeUser, modifyUser, addUser };