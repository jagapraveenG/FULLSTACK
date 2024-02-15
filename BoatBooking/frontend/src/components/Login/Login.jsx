import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signIn } from '../Service/auth';
import { jwtDecode } from 'jwt-decode';
const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            email: credentials.email,
            password: credentials.password
        };

        // signIn(form)
        //     .then((res) => {
        //         localStorage.setItem('token', res.data.token);
        //         console.log(res.data.token)
        //         navigate('/home');
        //     })
        signIn(form)
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        console.log(res.data.token);
        const decoded = jwtDecode(res.data.token);
        console.log(decoded.sub);
        sessionStorage.setItem('token', res.data.token);
        if (decoded.sub === "admin@gmail.com") {
            // Redirect to the appropriate page for admin
            navigate('/dash');
        } else {
            // Redirect to the home page for non-admin users
            navigate('/home');
        }
    })
    .catch((err) => {
        // Handle authentication errors
        console.log(err);
        // Clear email and password fields if needed
        setEmail("");
        setPassword("");
    });

        
    };

    return (
        <div style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/034/469/355/non_2x/fishing-boat-in-the-sea-at-sunset-3d-render-silhouette-of-a-deepsea-fishing-boat-during-sunset-ai-generated-free-photo.jpg")', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-6">
                    <div style={{ maxWidth: '400px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', animation: 'fadeIn 1s ease', padding: '20px', borderRadius: '5px' }}>
                        <div style={{ borderRadius: '10px', padding: '20px' }}>
                            <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' ,textAlign:'center',color:'black'}}>Login</h2>
                            <form onSubmit={handleSubmit} className="auth-form">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={credentials.email}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                    style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
                                    required
                                />
                                <button type="submit" style={{ marginTop: '15px', padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', width: '100%' }}>Login</button>
                            </form>
                            <p style={{ marginTop: '15px' }}>
                                Don't have an account? <NavLink to="/signup" style={{ color: '#007bff', textDecoration: 'none',textAlign:'center' }}>Sign Up</NavLink>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
