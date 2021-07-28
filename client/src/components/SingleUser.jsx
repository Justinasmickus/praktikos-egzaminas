import React, { Component } from 'react';
import MyForm from './MyForm';


class SingleUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isEditOn: false,
        };
      }
    
      handleEdit = (updatedUserData) => {
        if (this.state.isEditOn) this.props.onUpdate(this.props.user._id, updatedUserData);
    
        this.setState({ isEditOn: !this.state.isEditOn });
      };

    render() { 
        const { user: u } = this.props;
        return ( <div className="single-user__card">
          {this.state.isEditOn ? (
          <MyForm user={u} onEdit={this.handleEdit} />
        ) : (
          <React.Fragment>
            <div className="single-user__card-body">
            <h4>Vartotojo vardas:{u.name}</h4>
            <p>amžius:{u.age}</p>
            <p>El. paštas:{u.email}</p>
            {/* <p>Slaptažodis:{u.password}</p> */}
            </div>
            <div className="single-user__card-footer">
                <button onClick={this.handleEdit}>Redaguoti</button>
                <button onClick={() => this.props.onDelete(u._id)}>Ištrinti</button>
            </div>
            </React.Fragment> )}
        </div> );
    }
}
 
export default SingleUser;