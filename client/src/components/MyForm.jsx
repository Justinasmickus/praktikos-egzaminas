import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    password: '',
  };

  componentDidMount() {
    this.props.user && this.propsToState();
  }

  propsToState() {
    const { name, age, email, password } = this.props.user;
    this.setState({
      name,
      age,
      email,
      password,
    });
  }

  clearInputs = () => {
    this.setState({
      name: '',
      age: '',
      email: '',
      password: '',
    });
  };


  handleSubmit = async (e) => {
    const { name, age, email, password } = this.state;
    e.preventDefault();
  
    const dataToCreateNewUser = {
      name,
      age,
      email,
      password,
    };
    if (this.props.user) {
        console.log('Editinam one Sukuriam');
        this.props.onEdit(dataToCreateNewUser);
        return;
      }


    this.props.onCreateNewUser(dataToCreateNewUser);
    const createSuccess = await this.props.onCreateNewUser(dataToCreateNewUser);
    if (createSuccess) this.clearInputs();
  };


  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className='form-container'>
        <form className='form' autoComplete='off' onSubmit={this.handleSubmit}>
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

          <button className='form-create__btn'>{this.props.user ? 'redaguoti' : 'Sukurti naują vartotoją'}</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
