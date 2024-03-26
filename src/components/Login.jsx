// src/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login= () => {
    const [enrollmentId, setEnrollmentId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (enrollmentId === '0201EC201032' && password === '123456789') {
            navigate('/student-section');
        } else {
            setError('Invalid enrollment ID or password');
        }
    };

    return (
        <div className="container">
            <div className="login-form">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="enrollmentId">Enrollment ID:</label>
                        <input
                            type="text"
                            id="enrollmentId"
                            value={enrollmentId}
                            onChange={(e) => setEnrollmentId(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
