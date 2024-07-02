import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signUp.css";
import "../index.css";
import axios from "axios";
import "../styles/nav.css";

const SignUp = () => {
    const [language, setLanguage] = useState('english');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [preferredLanguage, setPreferredLanguage] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [disabilities, setDisabilities] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({});

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handlePreferredLanguageChange = (event) => {
        setPreferredLanguage(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleDisabilitiesChange = (event) => {
        setDisabilities(event.target.value);
    };

    const validate = () => {
        let newErrors = {};

        if (!username) newErrors.username = '* Name is required';
        if (!password) newErrors.password = '* Password is required';
        else if (password !== confirmPassword) newErrors.confirmPassword = '* Passwords do not match';
        if (!email) newErrors.email = '* Email ID required';
        else if (!email.includes('@')) newErrors.email = '* Invalid email address';
        if (!phoneNumber) newErrors.phoneNumber = '* Phone number required';
        else if (!phoneNumber.match(/^\d{10}$/)) newErrors.phoneNumber = '* Phone number must be 10 digits';
        if (!age) newErrors.age = '* Age required';
        else if (!age || age <= 0) newErrors.age = '* Invalid Age';
        if (!disabilities) newErrors.disabilities = '* Disability required';
        if (!preferredLanguage) newErrors.preferredLanguage = '* Preferred Language required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        // Perform API call here if validation is successful
        try {
            const response = await axios.post('http://127.0.0.1:8080/api/signup', {
                username,
                password,
                preferredLanguage,
                age,
                gender,
                phoneNumber,
                email,
                disabilities
            });
            if (response.data.response === "signup") {
                navigate("/home");
            } else {
                setMessage(response.data.response);
            }
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };

    const content = {
        english: {
            arivagam: "Arivagam.",
            signUp: "SIGNUP",
            name: "Name",
            enterUsername: "Enter your username",
            password: "Password",
            enterPassword: "Enter your password",
            confirmPassword: "Confirm Password",
            confirmYourPassword: "Confirm your password",
            phoneNumber: "Phone Number",
            enterPhoneNumber: "Enter your phone number",
            email: "Email",
            enterEmail: "Enter your email",
            preferredLanguage: "Preferred Language",
            selectLanguage: "Select an option",
            disabilities: "Disabilities",
            selectDisabilities: "Select an option",
            age: "Age",
            enterAge: "Enter your age",
            gender: "Gender",
            male: "Male",
            female: "Female",
            signUpButton: "Signup",
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
            signUp: "साइन अप",
            name: "नाम",
            enterUsername: "अपना उपयोगकर्ता नाम दर्ज करें",
            password: "पासवर्ड",
            enterPassword: "अपना पासवर्ड दर्ज करें",
            confirmPassword: "पासवर्ड की पुष्टि करें",
            confirmYourPassword: "अपना पासवर्ड पुष्टि करें",
            phoneNumber: "फोन नंबर",
            enterPhoneNumber: "अपना फोन नंबर दर्ज करें",
            email: "ईमेल",
            enterEmail: "अपना ईमेल दर्ज करें",
            preferredLanguage: "पसंदीदा भाषा",
            selectLanguage: "एक विकल्प चुनें",
            disabilities: "विकलांगता",
            selectDisabilities: "एक विकल्प चुनें",
            age: "आयु",
            enterAge: "अपनी आयु दर्ज करें",
            gender: "लिंग",
            male: "पुरुष",
            female: "महिला",
            signUpButton: "साइन अप करें",
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
            signUp: "பதிவு",
            name: "பெயர்",
            enterUsername: "உங்கள் பயனர் பெயரை உள்ளிடவும்",
            password: "கடவுச்சொல்",
            enterPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",
            confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
            confirmYourPassword: "உங்கள் கடவுச்சொல்லை உறுதிப்படுத்தவும்",
            phoneNumber: "தொலைபேசி எண்",
            enterPhoneNumber: "உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்",
            email: "மின்னஞ்சல்",
            enterEmail: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
            preferredLanguage: " விரும்பிய மொழி",
            selectLanguage: "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
            disabilities: "முகமூடி",
            selectDisabilities: "ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
            age: "வயது",
            enterAge: "உங்கள் வயதை உள்ளிடவும்",
            gender: "பாலினம்",
            male: "ஆண்",
            female: "பெண்",
            signUpButton: "பதிவு செய்யவும்",
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
                                <a className="nav-link text-white dropdown-toggle dimmed" style={{ marginRight: "2rem" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
            <header className="signHeader">
                <h1>{content[language].signUp}</h1>
                <form onSubmit={handleSubmit} className="signDetails">
                    <div className="cdiv">
                        <label>{content[language].name}</label>
                        <input type="text" placeholder={content[language].enterUsername} value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>{content[language].password}</label>
                            <input type="password" placeholder={content[language].enterPassword} value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="cdiv">
                            <label>{content[language].confirmPassword}</label>
                            <input type="password" placeholder={content[language].confirmYourPassword} value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        </div>
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>{content[language].phoneNumber}</label>
                            <input type="tel" placeholder={content[language].enterPhoneNumber} value={phoneNumber} onChange={handlePhoneNumberChange} />
                        </div>
                        <div className="cdiv">
                            <label>{content[language].email}</label>
                            <input type="email" placeholder={content[language].enterEmail} value={email} onChange={handleEmailChange} />
                        </div>
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>{content[language].preferredLanguage}</label>
                            <select value={preferredLanguage} onChange={handlePreferredLanguageChange}>
                                <option value="" disabled hidden>{content[language].selectLanguage}</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Kannada">Kannada</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telugu">Telugu</option>
                            </select>
                        </div>
                        <div className="cdiv">
                            <label>{content[language].disabilities}</label>
                            <select value={disabilities} onChange={handleDisabilitiesChange}>
                                <option value="" disabled hidden>{content[language].selectDisabilities}</option>
                                <option value="def">Deaf</option>
                                <option value="dum">Dumb</option>
                                <option value="both">Both Deaf and Dumb</option>
                                <option value="dyslexic">Dyslexic</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="cdiv">
                        <label>{content[language].age}</label>
                        <input type="number" placeholder={content[language].enterAge} value={age} onChange={handleAgeChange} />
                    </div>
                    <div className="mdiv">
                        <label>{content[language].gender}: </label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" onChange={handleGenderChange} checked={gender === 'male'} />
                            <label htmlFor="male">{content[language].male}</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female" onChange={handleGenderChange} checked={gender === 'female'} />
                            <label htmlFor="female">{content[language].female}</label>
                        </div>
                    </div>
                    <button type="submit">{content[language].signUpButton}</button>
                    <div id="su_error">
                        {errors.username && <p className="error-message">{errors.username}</p>}
                        {errors.message && <p className="error-message">{message}</p>}
                        {errors.password && <p className="error-message">{errors.password}</p>}
                        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        {errors.preferredLanguage && <p className="error-message">{errors.preferredLanguage}</p>}
                        {errors.disabilities && <p className="error-message">{errors.disabilities}</p>}
                        {errors.age && <p className="error-message">{errors.age}</p>}
                    </div>
                </form>
            </header>
            <footer className="signFooter">
                <h1>
                    {content[language].footer} &copy; 2023 - {content[language].team} <b>{content[language].yukthi}</b>
                </h1>
            </footer>
        </div>
    );
};

export default SignUp;