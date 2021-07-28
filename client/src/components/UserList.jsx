import React, { Component } from 'react';
import SingleUser from './SingleUser';
class UserList extends Component {
    state = {  }
    render() { 
        return ( <div className="list-container">
            <h3>User list</h3>
            
            {this.props.users.map((user) => (
          <SingleUser onDelete={this.props.onDelete} user={user} key={user._id} />
        ))}
        </div> );
    }
}
 
export default UserList;