import React, { useState } from "react";
import "../styles/signUp.css";
import "../index.css";

const EditProfile = () => {
    const [username, setUsername] = useState('Prithik');
    const [password, setPassword] = useState('1234');
    const [confirmPassword, setConfirmPassword] = useState('1234');
    const [preferredLanguage, setPreferredLanguage] = useState('English');
    const [age, setAge] = useState('20');
    const [gender, setGender] = useState('male');
    const [phoneNumber, setPhoneNumber] = useState('8778718094');
    const [email, setEmail] = useState('prithik2111022@ssn.edu.in');
    const [disabilities, setDisabilities] = useState('Deaf');

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

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <header className="signHeader">
                <h1>
                    Edit Profile
                </h1>
                <form onSubmit={handleSubmit} className="signDetails">
                    <div className="cdiv">
                        <label>Username</label>
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
                                <option value="Spanish">Hindi</option>
                                <option value="Spanish">Kannada</option>
                                <option value="Spanish">Malayalam</option>
                                <option value="French">Tamil</option>
                                <option value="French">Telugu</option>
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
                    <button type="submit">Edit</button>
                </form>
            </header>
            <footer className="signFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    )
}

export default EditProfile;