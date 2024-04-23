import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';

const Login = ({ setRoleVar }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State variable to track success
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = () => {
    axios.post('http://localhost:3001/auth/login', { username, password, role })
      .then(res => {
        if (res.data.login && res.data.role === 'admin') {
          setRoleVar('admin');
          navigate('/dashboard');
          setSuccess(true); // Set success to true on successful login
        } else if (res.data.login && res.data.role === 'student') {
          setRoleVar('student');
          navigate('/');
          setSuccess(true); // Set success to true on successful login
        } else {
          setError('Incorrect username or password. Please try again.'); // Set error message for incorrect login
        }
      })
      .catch(err => {
        setError('An error occurred during login. Please try again.'); // Set error message for other errors
        console.log(err);
      });
  };

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2>
        {success && <p className="success-message">Login successful!</p>} {/* Render success message if present */}
        {error && <p className="error-message">{error}</p>} {/* Render error message if present */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select name="role" id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default Login;
