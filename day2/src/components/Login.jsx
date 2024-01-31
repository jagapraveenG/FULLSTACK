import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f0f0',
            backgroundImage: `url('https://images.pexels.com/photos/244517/pexels-photo-244517.jpeg?cs=srgb&dl=pexels-photoklickr-244517.jpg&fm=jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className="auth" style={{
                maxWidth: '400px',
                padding: '20px',
                borderRadius: '10px',
                
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                animation: 'fadeIn 1s ease',
            }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={credentials.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <NavLink to="/home"><button type="submit">Login</button></NavLink>
                </form>
                <p>
                    Don't have an account? <NavLink to="/signup" className="switch">Sign Up</NavLink>
                   <br></br> <NavLink to="/Admin" className="switch">AdminLogin</NavLink>
                </p>
            </div>
        </div>
    );
    };

export default Login;
