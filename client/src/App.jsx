import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {
  state = {  }
  render() { 
    return ( <div className="App"><h1>Sveiki atvykę į Vartotojų aplikaciją</h1>
    <MyForm/>
    </div> );
  }
}
 
export default App;


