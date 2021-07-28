import React, { Component } from 'react';

class SingleUser extends Component {
    state = {  }
    render() { 
        const { user: u } = this.props;
        return ( <div className="single-user__card">
            <div className="single-user__card-body">
            <h4>Vartotojo vardas:{u.name}</h4>
            <p>amžius:{u.age}</p>
            <p>El. paštas:{u.email}</p>
            </div>
            <div className="single-user__card-footer">
                <button>Redaguoti</button>
                <button onClick={() => this.props.onDelete(u._id)}>Ištrinti</button>
            </div>

        </div> );
    }
}
 
export default SingleUser;