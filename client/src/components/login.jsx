import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "../styles/login.css";
import "../index.css";
import "../styles/nav.css";

const Login = () => {
    const [language, setLanguage] = useState('english');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

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

            if (response.data.response === "login") {
                navigate("/home");
            } else {
                setError("Invalid login details");
            }

        } catch (error) {
            console.error('Error sending data to server: ', error);
        }
    };

    const content = {
        english: {
            arivagam: "Arivagam.",
            login: "LOGIN",
            mailId: "Mail ID",
            enterEmail: "Enter Email ID",
            password: "Password",
            enterPassword: "Enter your password",
            loginButton: "Login",
            newUser: "New User?",
            signup: "Signup",
            invalidLogin: "Invalid Login Credentials!",
            footer: "Copyright",
            yukthi: "Yukthi",
            team: "team",
            language: "Language",
            tamil: "Tamil",
            english: "English",
            hindi: "Hindi"
        },
        hindi: {
            arivagam: "ज्ञान केंद्र.",
            login: "लॉगिन",
            mailId: "मेल आईडी",
            enterEmail: "ईमेल आईडी दर्ज करें",
            password: "पासवर्ड",
            enterPassword: "अपना पासवर्ड दर्ज करें",
            loginButton: "लॉगिन",
            newUser: "नया उपयोगकर्ता?",
            signup: "साइन अप",
            invalidLogin: "अमान्य लॉगिन विवरण!",
            footer: "कॉपीराइट",
            yukthi: "युक्ति",
            team: "टीम",
            language: "भाषा",
            tamil: "तमिल",
            english: "अंग्रेज़ी",
            hindi: "हिंदी"
        },
        tamil: {
            arivagam: "அறிவகம்.",
            login: "உள்நுழைவு",
            mailId: "மின்னஞ்சல் ஐடி",
            enterEmail: "மின்னஞ்சல் ஐடி உள்ளிடவும்",
            password: "கடவுச்சொல்",
            enterPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
            loginButton: "உள்நுழைய",
            newUser: "புதிய பயனர்?",
            signup: "பதிவு",
            invalidLogin: "தவறான உள்நுழைவு விவரங்கள்!",
            footer: "பதிப்புரிமை",
            yukthi: "யுக்தி",
            team: "குழு",
            language: "மொழி",
            tamil: "தமிழ்",
            english: "ஆங்கிலம்",
            hindi: "இந்தி"
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top lp-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "rgb(255, 87, 51)", fontSize: "2rem" }} href="#">{content[language].arivagam}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle dimmed" style={{marginRight: "2rem"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {content[language].language}
                                </a>
                                <ul className="dropdown-menu" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderColor: "rgba(255, 255, 255, 0.4)" }}>
                                    <li><a className="dropdown-item text-white" onClick={() => setLanguage('english')} href="#">{content[language].english}</a></li>
                                    <li><hr className="dropdown-divider" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}></hr></li>
                                    <li><a className="dropdown-item text-white" onClick={() => setLanguage('hindi')} href="#">{content[language].hindi}</a></li>
                                    <li><hr className="dropdown-divider" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}></hr></li>
                                    <li><a className="dropdown-item text-white" onClick={() => setLanguage('tamil')} href="#">{content[language].tamil}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="LogHeader">
                <h1>
                    {content[language].login}
                </h1>
                <form onSubmit={handleSubmit} className="logDetails">
                    <div>
                        <label>{content[language].mailId}</label>
                        <input type="text" placeholder={content[language].enterEmail} value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label>{content[language].password}</label>
                        <input type="password" placeholder={content[language].enterPassword} value={password} onChange={handlePasswordChange} />
                    </div>
                    <button type="submit">{content[language].loginButton}</button>
                    <p>
                        {content[language].newUser} &nbsp;<Link to="/signup" className="signup">{content[language].signup}</Link>
                    </p>
                    {error && <p id="login-error-message">{content[language].invalidLogin}</p>}
                </form>
            </header>
            <footer className="LogFooter">
                <h1>
                    {content[language].footer} &copy; 2023 - {content[language].team} <b>{content[language].yukthi}</b>
                </h1>
            </footer>
        </div>
    );
}

export default Login;