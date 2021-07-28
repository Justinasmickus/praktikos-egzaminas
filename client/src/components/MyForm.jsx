import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: 'Tiger',
    age: '26',
    email: 'tiger@woods.com',
    password: 'uwontpass',
  };

  handleSubmit = (e) => {
      const { name, age, email, password } = this.state;
    e.preventDefault();
    console.log('submit prevented');
    const dataToCreateNewUser = {
        name,
        age,
        email,
        password,
      };
      this.props.onCreateNewUser(dataToCreateNewUser);

  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className='form-container'>
        <form autoComplete='off' onSubmit={this.handleSubmit}>
          <input
            type='text'
            onChange={this.handleInput}
            value={s.name}
            name='name'
            id='name'
            placeholder='Vardas'
          />
          <input
            type='number'
            onChange={this.handleInput}
            value={s.age}
            name='age'
            id='age'
            placeholder='Amžius'
          />
          <input
            type='text'
            onChange={this.handleInput}
            value={s.email}
            name='email'
            id='email'
            placeholder='El. paštas'
          />
          <input
            type='password'
            onChange={this.handleInput}
            value={s.password}
            name='password'
            id='password'
            placeholder='Slaptažodis'
          />

          <button className='form-create__btn'>Sukurti naują vartotoją</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
