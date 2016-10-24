import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';
import addUserComponent from '../components/add-user.component';

const mapStateToProps = () => ({});
const mapDispatchToProps = ({
    addUser
});

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(addUserComponent);

export default Search;