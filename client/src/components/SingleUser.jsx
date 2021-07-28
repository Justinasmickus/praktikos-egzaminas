import React, { Component } from 'react';

class SingleUser extends Component {
    state = {  }
    render() { 
        return ( <div className="single-user__card">
            <div className="single-user__card-body">
            <h4>Vartotojo vardas:</h4>
            <p>amžius:</p>
            <p>El. paštas:</p>
            </div>
            <div className="single-user__card-footer">
                <button>Redaguoti</button>
                <button>Ištrinti</button>
            </div>

        </div> );
    }
}
 
export default SingleUser;