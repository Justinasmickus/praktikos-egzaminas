import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';

class App extends Component {
  state = {  }
  createNewUser = (dataToCreateNewUser) => {
    console.log('dataToCreateNewUser', dataToCreateNewUser)
  }

  render() { 
    return ( <div className="App"><h1>Sveiki atvykę į Vartotojų aplikaciją</h1>
    <MyForm onCreateNewUser={this.createNewUser}/>
    </div> );
  }
}
 
export default App;


