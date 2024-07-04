import React, { useState } from "react";
import "../styles/existingmeeting.css";

const ExistingMeeting = () => {
    return (
        <div>
            <header className="EMheader">
                <h1>Join a Room</h1>
                <p>
                    Enter the Room ID to get Started
                </p>
                <div>
                    <input type="number" placeholder="Enter the room ID..."></input>
                    <button>Join</button>
                </div>
            </header>
            <footer className="EMFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default ExistingMeeting;