import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signUp.css";
import "../index.css";
import axios from "axios";

const SignUp = () => {
    const navigate= useNavigate();
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
            if (response.data.response=== "signup"){
                navigate("/home");
            } else {
                setMessage(response.data.response);
            }
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    };

    return (
        <div>
            <header className="signHeader">
                <h1>SIGNUP</h1>
                <form onSubmit={handleSubmit} className="signDetails">
                    <div className="cdiv">
                        <label>Name</label>
                        <input type="text" placeholder="Enter your username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <div className="cdiv">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        </div>
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>Phone Number</label>
                            <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={handlePhoneNumberChange} />
                        </div>
                        <div className="cdiv">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>
                    <div className="sdiv">
                        <div className="cdiv">
                            <label>Preferred Language</label>
                            <select value={preferredLanguage} onChange={handlePreferredLanguageChange}>
                                <option value="" disabled hidden>Select an option</option>
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Kannada">Kannada</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Telugu">Telugu</option>
                            </select>
                        </div>
                        <div className="cdiv">
                            <label>Disabilities</label>
                            <select value={disabilities} onChange={handleDisabilitiesChange}>
                                <option value="" disabled hidden>Select an option</option>
                                <option value="def">Deaf</option>
                                <option value="dum">Dumb</option>
                                <option value="both">Both Deaf and Dumb</option>
                                <option value="dyslexic">Dyslexic</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="cdiv">
                        <label>Age</label>
                        <input type="number" placeholder="Enter your age" value={age} onChange={handleAgeChange} />
                    </div>
                    <div className="mdiv">
                        <label>Gender: </label>
                        <div>
                            <input type="radio" id="male" name="gender" value="male" onChange={handleGenderChange} checked={gender === 'male'} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female" onChange={handleGenderChange} checked={gender === 'female'} />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <button type="submit">Signup</button>
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
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
};

export default SignUp;