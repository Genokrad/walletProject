import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

// import { useState } from 'react';
import { Button } from '../Button/Button';

// console.log(register);

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        username: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      // console.log(register())
    );
    // form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <h2 className="title">Please register</h2>
      <label className="formLabel">
        <span className="labelTitle">Name:</span>
        <input className="inputTag" type="text" name="name" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">E-mail:</span>
        <input className="inputTag" type="email" name="email" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">Password:</span>
        <input className="inputTag" type="password" name="password" />
      </label>
      <Button title="Create account" type="submit" />
    </form>
  );
};

export default RegistrationForm;
