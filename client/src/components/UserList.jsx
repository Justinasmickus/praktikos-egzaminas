import React, { Component } from 'react';
import SingleUser from './SingleUser';
class UserList extends Component {
    state = {  }
    render() { 
        // if (!this.props.users.lenght) return <h2>Šiuo metu vartotojų dar nepridėta</h2>
        return ( <div>
           <h3>Vartotojų sąrašas</h3>
           <div className="list-container">
                 {this.props.users.map((user) => (
          <SingleUser onUpdate={this.props.onUpdate} onDelete={this.props.onDelete} user={user} key={user._id} />
        ))}
           </div>
          
        </div> );
    }
}
 
export default UserList;