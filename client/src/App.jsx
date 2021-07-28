import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';

class App extends Component {
  state = {  }
  createNewUser = async (dataToCreateNewUser) => {
    console.log('dataToCreateNewUser', dataToCreateNewUser);
    try {
      const createRes = await axios.post('http://localhost:4000/api/user/new', dataToCreateNewUser);
      console.log('created user ', createRes.data);
      return createRes.data ? true : false;
       
     } catch (error) {
       console.error(error)
     }
  }

  render() { 
    return ( <div className="App"><h1>Sveiki atvykę į Vartotojų aplikaciją</h1>
    <MyForm onCreateNewUser={this.createNewUser}/>
    </div> );
  }
}
 
export default App;


