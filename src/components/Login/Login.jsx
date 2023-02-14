// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/auth/operations';

import { Button } from '../Button/Button';

export const LoginForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const login = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    console.log(login);

    form.reset();
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="title">Please log in</h2>
      <label className="formLabel">
        <span className="labelTitle">E-mail:</span>
        <input className="inputTag" type="email" name="email" />
      </label>
      <label className="formLabel">
        <span className="labelTitle">Password:</span>
        <input className="inputTag" type="password" name="password" />
      </label>
      <Button title="Log in" type="submit" />
    </form>
  );
};
