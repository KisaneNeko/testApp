import React from 'react';

const Search = ({ onSearchChange }) => (
    <div className="row col-md-4 search-container">
        <input type="text" className="form-control" placeholder="Wpisz nazwisko"
            onChange={e => onSearchChange(e.target.value)} />
    </div>
);

export default Search;