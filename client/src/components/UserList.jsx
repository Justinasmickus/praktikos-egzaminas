import React, { Component } from 'react';
import SingleUser from './SingleUser';
class UserList extends Component {
    state = {  }
    render() { 
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