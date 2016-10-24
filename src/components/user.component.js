import React from 'react';

class User extends React.Component {
   constructor() {
       super();
       this.state = { isActive: true };
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

   render() {
           const view = (
              <td><button className="btn btn-default" onClick={this.edit.bind(this)}>Edytuj</button></td>
           );
           const edit = (
               <td>
                   <button className="btn btn-default">Usuń użytkownika</button>
                   <button className="btn btn-default" onClick={this.close.bind(this)}>Zamknij</button>
               </td>
           );
           const { userData } = this.props;
           const active = this.state.isActive ? edit : view;

           return (<tr>
                   <td>{userData.name}</td>
                   <td>{userData.lastName}</td>
                   <td>{userData.birthDate}</td>
                   <td>{userData.personalIN}</td>
                   <td>{userData.city}</td>
                   <td>{userData.phone}</td>
                   <td>{userData.email}</td>
                   {active}
           </tr>);
   }
}

//<button class="btn btn-default" ng-click="vm.openEdit()">Edytuj</button>

//<button class="btn btn-default" ng-click="vm.remove()">Usuń użytkownika</button>
//<button class="btn btn-default" ng-click="vm.closeEdit()">Zamknij</button>

export default User;