import React from 'react';

class AddUser extends React.Component {
    constructor() {
        super();
        this.clearUser = { name: '', lastName: '', birthDate: '', personalIN: '', city: '', email: '' };
        this.state = {
            user: { ...this.clearUser }
        };
        this.userLabels = Object.keys(this.state.user);
    }

    _onChangeInput(label, value) {
        const modifiedUser = {...this.state.user};
        modifiedUser[label] = value;

        this.setState({ ...this.state, user: modifiedUser });
    }

    _addUser(addUser) {
        addUser(this.state.user);
        this.setState({ ...this.state, user: { ...this.clearUser } })
    }

    render() {
        const { addUser } = this.props;

        return (
            <tr>
                {this.userLabels.map((label, id) => (
                    <td key={id}><input type="text"
                               value={this.state.user[label]}
                               onChange={e => this._onChangeInput(label, e.target.value)}
                    /></td>
                ))}

                <td><button className="btn btn-default"
                            onClick={() => this._addUser(addUser)}>
                    Dodaj
                </button></td>
            </tr>
        );
    }
}

export default AddUser;