import React from 'react';
import { connect } from 'react-redux';
import UserTableComponent from '../components/user-table.component';

function getVisibleUsers(userList = [], searchString) {
    const lowerCaseSearch = searchString.toLowerCase();
    return !searchString ? userList : userList.filter(user => user.lastName.toLowerCase().indexOf(lowerCaseSearch) !== -1);
}

const mapStateToProps = (state) => ({
    userList: getVisibleUsers(state.userList, state.searchString)
});

const Search = connect(
    mapStateToProps
)(UserTableComponent);

export default Search;