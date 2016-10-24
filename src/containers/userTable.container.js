import React from 'react';
import { connect } from 'react-redux';
import UserTableComponent from '../components/user-table.component';
import { removeUser, modifyUser } from '../actions';

function getVisibleUsers(userList = [], searchString) {
    if (!searchString) return userList;

    const lowerCaseSearch = searchString.toLowerCase();
    return userList.filter(user => user.lastName.toLowerCase().indexOf(lowerCaseSearch) !== -1);
}

const mapStateToProps = (state) => ({
    userList: getVisibleUsers(state.userList, state.searchString)
});

const mapDispatchToProps = ({
    removeUser,
    modifyUser
});

const UserTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserTableComponent);

export default UserTable;