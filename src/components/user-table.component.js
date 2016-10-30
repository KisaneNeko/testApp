import React from 'react';
import User from './user.component';
import Search from '../containers/search.container';
import AddUser from '../containers/add-user.container';

const UserTable = ({ userList, removeUser, modifyUser }) => (
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
                    <th>Email</th>
                    <th>Akcje</th>
                </tr>
                </thead>

                <tbody>
                    <AddUser />

                    {userList.map((user, index) =>
                      <User
                        key={index}
                        index={index}
                        userData={user}
                        removeUser={removeUser}
                        modifyUser={modifyUser}
                      />
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

export default UserTable;