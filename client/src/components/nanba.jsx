import React, { useState } from "react";
import "../styles/nanba.css";
import "boxicons";

const Nanba = () => {
    const [inputValue, setInputValue] = useState('');
    const [reply, setReply] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const generatedReply = generateReply(inputValue);
        setReply(generatedReply);
    };

    const generateReply = (input) => {
        return `You entered: ${input}`;
    };

    return (
        <div className="nanbaContainer">
            <header className="nanbaHeader">
                <div className="nanbaInput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaOutput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaInput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaOutput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaInput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaOutput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaInput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
                <div className="nanbaOutput">
                    <p>Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.</p>
                </div>
            </header>
            <footer className="nanbaFooter">
                <form onSubmit={handleSubmit} className="nanbaForm">
                    <label>
                        <input type="text" value={inputValue} onChange={handleChange} id="nanbaInput" />
                    </label>
                    <button type="submit" id="nanbaSend"><box-icon name='send' animation='tada' flip='vertical' color='#ff5733' size="50px"></box-icon></button>
                </form>
                <h1 id="nanbaCR">
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default Nanba;