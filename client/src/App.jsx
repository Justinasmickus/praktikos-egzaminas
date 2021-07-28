import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import MyForm from './components/MyForm';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = async () => {
  
    try {
      const allUsersFromDb = await axios.get('http://localhost:4000/api/user');
      if (Array.isArray(allUsersFromDb.data) && allUsersFromDb.data.length) {
       
        this.setState({ users: allUsersFromDb.data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  deleteUser = async (id) => {
    try {
      const deleteResult = await axios.delete('http://localhost:4000/api/user/delete/' + id);
      // console.log('deleteResult', deleteResult.data);
      // atnaujinti sarasa kad neliktu ka istrynem
      this.getAllUsers();
    } catch (error) {
      console.error(error);
    }
  }

  createNewUser = async (dataToCreateNewUser) => {
    try {
      const createRes = await axios.post(
        'http://localhost:4000/api/user/new',
        dataToCreateNewUser
      );
      this.getAllUsers()
      console.log('created user ', createRes.data);
      return createRes.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className='App'>
        <h1>Sveiki atvykę į Vartotojų aplikaciją</h1>
        <MyForm onCreateNewUser={this.createNewUser} />
        <UserList onDelete={this.deleteUser} users={this.state.users}/>
      </div>
    );
  }
}

export default App;
