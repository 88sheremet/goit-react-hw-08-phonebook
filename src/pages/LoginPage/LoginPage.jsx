import css from '../LoginPage/LoginPage.module.css'

const LoginPage =()=>{
    return (
        <div>
      
      <form className={css.signup}>
      <h3 className={css.signuptitle}>Log in in seconds</h3>
        
        <label>
          Email
          <input
            type="text"
            className={css.signupinput}
            // value={email}
            // onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            className={css.signupinput}
            // value={password}
            // onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className={css.signupbutton}>Log in</button>
      </form>
    </div>
    )
}

export default LoginPage