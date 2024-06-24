import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/login.css";
import "../index.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate= useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username: username,
                password: password
            });
            
            if (response.data.response=== "login"){
                navigate("/home");
            } else {
                setError("Invalid login details");
            }

        } catch (error) {
            console.error('Error sending data to server: ', error);
        }
    };

    return (
        <div>
            <header className="LogHeader">
                <h1>
                    LOGIN
                </h1>
                <form onSubmit={handleSubmit} className="logDetails">
                    <div>
                        <label>Mail ID</label>
                        <input type="text" placeholder="Enter Email ID" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">Login</button>
                    <p>
                        New User? &nbsp;<Link to="/signup" className="signup">Signup</Link>
                    </p>
                    {error && <p id="login-error-message">Invalid Login Credentials!</p>}
                </form>
            </header>
            <footer className="LogFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default Login;