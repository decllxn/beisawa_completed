import React, { useState } from 'react';
import '../styles/Auth.css';
import MyImage from '../assets/logo2.jpeg'

const Auth = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          {/* Sign In Form */}
          <form className={`form ${isSignUpMode ? 'sign-up-form' : 'sign-in-form'}`}>
            <div className="logo">
              <a href="#">
                <img src={MyImage} alt="logo" className="brand-logo" />
              </a>
            </div>
            <h2 className="title">{isSignUpMode ? 'Sign up' : 'Sign in'}</h2>
            {!isSignUpMode ? (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username/email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" value="Login" className="btn solid" />
              </>
            ) : (
              <>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <input type="submit" className="btn" value="Sign up" />
              </>
            )}
            <p className="social-text">Or {isSignUpMode ? 'Sign up' : 'Sign in'} with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="ri-google-line"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>{isSignUpMode ? 'One of us ?' : 'New here ?'}</h3>
            <p>
              {isSignUpMode
                ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.'
                : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!'}
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              {isSignUpMode ? 'Sign in' : 'Sign up'}
            </button>
          </div>
          <img src={isSignUpMode ? "/img/register.svg" : "/img/log.svg"} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>{isSignUpMode ? 'New here ?' : 'One of us ?'}</h3>
            <p>
              {isSignUpMode
                ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!'
                : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.'}
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              {isSignUpMode ? 'Sign up' : 'Sign in'}
            </button>
          </div>
          <img src={isSignUpMode ? "/img/log.svg" : "/img/register.svg"} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
