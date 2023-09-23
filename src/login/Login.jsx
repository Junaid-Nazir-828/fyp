import React, { useState } from 'react';

const UserLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserSignup = () => {
    // Add your user login/signup logic here
    // You can use email and password state values
  };

  return (
    <div>
      <h2>User Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleUserSignup}>Sign Up as User</button>
      </form>
    </div>
  );
};

export default UserLoginForm;
