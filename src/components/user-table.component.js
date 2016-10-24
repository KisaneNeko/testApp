import React from 'react';
import User from './user.component';
import Search from '../containers/search.container';

const UserTable = ({ userList }) => (
    <div className="user-table-container">
        <Search />

        <div className="row user-table">
            <table className="table table-bordered table-stripped">
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Data urodzenia</th>
                    <th>Pesel</th>
                    <th>Miasto</th>
                    <th>Telefon</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {userList.map((user, index) =>
                  <User
                    key={index}
                    userData={user}
                  />
                )}
                </tbody>
            </table>
        </div>
    </div>
);

export default UserTable;