import React from 'react';

class User extends React.Component {
   constructor() {
       super();
       this.state = { isActive: false };
   }

   changeEdit() {
        const active = this.state.isActive;
        this.setState({ isActive: !active });
   }

   close() {
       this.changeEdit();
   }

   edit() {
       this.changeEdit();
   }

   _getEditButton() {
       return <td><button className="btn btn-default" onClick={this.edit.bind(this)}>Edytuj</button></td>;
   }

   _getRemoveButton(remove, index) {
       return (
        <td>
            <button className="btn btn-default" onClick={() => this._remove(remove, index)}>Usuń</button>
            <button className="btn btn-default" onClick={this.close.bind(this)}>Zamknij</button>
        </td>
       );
   };

   _getEditInput(userData, label, index, modifyUser) {
       return !this.state.isActive ? '' : (
           <span><br />
               <input type="text"
                      value={userData[label]}
                      onChange={(e) => modifyUser(index, label, e.target.value)}
               />
           </span>
       )
   }

    _remove(remove, index) {
        this.setState({ isActive: false });
        remove(index);
    }

   render() {
       const { userData, removeUser, index, modifyUser } = this.props;
       const userDataLabels = Object.keys(userData);
       const controls = this.state.isActive ? this._getRemoveButton(removeUser, index) : this._getEditButton();

       return (
           <tr>
               {userDataLabels.map((label, id) => (
                   <td key={id}>
                       <span>
                            {userData[label]}
                       </span>
                       {this._getEditInput(userData, label, index, modifyUser)}
                   </td>
               ))}
               {controls}
            </tr>
       );
   }
}

export default User;