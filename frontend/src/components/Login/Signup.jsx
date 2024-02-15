import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { signUp } from '../Service/auth';

const Signup = () => {
    const [accountData, setAccountData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccountData({ ...accountData, [name]: value });
    };

    const navigate =useNavigate ();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const form = {
          name: event.target.name.value,
          email: event.target.email.value,
          password: event.target.password.value,
        };
    
        signUp(form)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
      
            // Navigate to '/user' after successful signup
            // You need to define navigate function or use useHistory hook if using react-router-dom
            navigate('/');
          })
          .catch((err) => {
            console.error(err);
          });
      };

    return (
        <div style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/034/469/355/non_2x/fishing-boat-in-the-sea-at-sunset-3d-render-silhouette-of-a-deepsea-fishing-boat-during-sunset-ai-generated-free-photo.jpg")', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div style={{ maxWidth: '400px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', animation: 'fadeIn 1s ease', padding: '20px', borderRadius: '5px' }}>
                        <div style={{ borderRadius: '10px', padding: '20px'}}>
                            <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold',textAlign:'center',color:'black' }}>Sign Up</h2>
                            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                            <form onSubmit={handleSubmit} className="auth-form">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={accountData.name}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={accountData.email}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={accountData.password}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={accountData.confirmPassword}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    value={accountData.mobile}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', width: '100%' }}>Sign Up</button>
                            </form>
                            <p style={{ marginTop: '15px' }}>
                                Already have an account? <NavLink to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Login</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
