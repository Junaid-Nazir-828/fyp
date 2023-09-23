import React, { useState } from 'react';
import AdminLoginForm from './AdminLoginForm'; // Import your AdminLoginForm component
import UserLoginForm from './UserLoginForm'; // Import your UserLoginForm component
// import './LoginForm.css'; // Import your CSS file

const LoginForm = () => {
  const [isUserForm, setIsUserForm] = useState(true);

  const handleUserSignup = () => {
    setIsUserForm(true);
  };

  const handleAdminSignup = () => {
    setIsUserForm(false);
  };

  return (
    <div className="login-container">
      <h2>{isUserForm ? 'User' : 'Admin'} Login</h2>
      {isUserForm ? (
        <UserLoginForm /> // Render UserLoginForm when isUserForm is true
      ) : (
        <AdminLoginForm /> // Render AdminLoginForm when isUserForm is false
      )}
      <div className="form-switch">
        <button onClick={handleUserSignup}>Signup as User</button>
        <button onClick={handleAdminSignup}>Signup as Admin</button>
      </div>
    </div>
  );
};

export default LoginForm;
