import { useState } from 'react';
import css from '../RegisterPage/RegisterPage.module.css'
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const onSubmit =(e)=>{
// e.preventDefault();


//   }

  return (
    <div>
      <form className={css.signup}>
      <h3 className={css.signuptitle}>Sign up in seconds</h3>
        <label>
          Name
          <input
            type="text"
            className={css.signupinput}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            className={css.signupinput}
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <button type="submit" className={css.signupbutton}>Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
