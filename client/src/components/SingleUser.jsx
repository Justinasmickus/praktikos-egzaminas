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
            <div className="single-user__card-container ">
            <p className='single-user__card-item'><strong>{u.name}</strong></p>
            <p className='single-user__card-item'>amžius:{u.age}</p>
            <p className='single-user__card-item'>El. paštas:{u.email}</p>
            {/* <p>Slaptažodis:{u.password}</p> */}
            </div>
            <div className="single-user__card-footer">
                <button className='card-btn__edit' onClick={this.handleEdit}>Redaguoti</button>
                <button className='card-btn__delete' onClick={() => this.props.onDelete(u._id)}>Ištrinti</button>
            </div>
            </React.Fragment> )}
        </div> );
    }
}
 
export default SingleUser;