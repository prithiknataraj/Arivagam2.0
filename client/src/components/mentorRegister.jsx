import React, { useState } from "react";
import "../styles/mentorRegister.css";

const MentorRegister = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <header className="MRHeader">
                <h1>Welcome to our Mentor Section!</h1>
                <h2>Register and Learn with Mentor.</h2>
                <div>
                    <select value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    <button onClick={handleButtonClick} className="MRButton">Pay</button>
                </div>
            </header>
            <footer className="MRFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default MentorRegister;