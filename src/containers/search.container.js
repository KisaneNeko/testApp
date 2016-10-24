import React from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';
import SearchComponent from '../components/search.component';

const mapStateToProps = () => ({});
const mapDispatchToProps = ({
    onSearchChange: search
});

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);

export default Search;