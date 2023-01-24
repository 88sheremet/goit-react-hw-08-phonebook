import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authSlice';
import css from '../LoginPage/LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={css.signup} onSubmit={onSubmit}>
        <h3 className={css.signuptitle}>Log in in seconds</h3>

        <label>
          Email
          <input
            type="text"
            className={css.signupinput}
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            className={css.signupinput}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={css.signupbutton}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
