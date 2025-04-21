import { useState } from 'react';
import './SignIn.css';
import user from '../../assets/icons/user.svg';
import email_icon from '../../assets/icons/email.svg';
import password_icon from '../../assets/icons/password.svg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log({ email, password, rememberMe });

    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  const inputClassName = email !== '' ? 'filled' : 'empty';
  const passwordClassName = password !== '' ? 'filled' : 'empty';

  return (
    <div className='signin'>
      <div className='signin-content'>
      <div className='signin-container'>
        <h1 className='title'>Sign In</h1>

        <img src={user} alt="user icon" className='user' />

        <form onSubmit={handleSubmit}>
          <div className='email'>
            <img src={email_icon} alt="email icon" />
            <input
              id='Email'
              type="email"
              placeholder='Email'
              value={email}
              onChange={handleInputChange}
              className={inputClassName}
            />
          </div>

          <div className='password'>
            <input
              id='Password'
              type="password"
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              className={passwordClassName}
            />
            <img src={password_icon} alt="Password icon" />
          </div>

          <button type='submit' className='login-button'>Log in</button>

          <div className="remember">
            <input
              type="checkbox"
              id='Remember'
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <div className='remember-forgotpassword'>
              <label htmlFor="Remember">Remember me</label>
              <p className='forgot'>Forgot password?</p>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
