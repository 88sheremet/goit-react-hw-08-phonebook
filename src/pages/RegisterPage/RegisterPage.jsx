import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authSlice';
import css from '../RegisterPage/RegisterPage.module.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={css.signup} onSubmit={onSubmit}>
        <h3 className={css.signuptitle}>Sign up in seconds</h3>
        <label>
          Name
          <input
            type="name"
            className={css.signupinput}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            className={css.signupinput}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className={css.signupinput}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={css.signupbutton}>
          Register
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
