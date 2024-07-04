import React, { useState } from "react";
import "../styles/chatHome.css";

const ChatHome = () => {
    return (
        <div>
            <header className="CHheader">
                <div className="CHtitle">
                    <h1>
                        Chat Room
                    </h1>
                </div>
                <div className="CHbody">
                    <h1>
                        Create or Join a room
                    </h1>
                    <form>
                        <div className="CHdiv">
                            <label>Room ID:</label>
                            <input type="text" placeholder="Enter the Room ID" />
                        </div>
                        <div className="CHdiv">
                            <label>Preferred Language:</label>
                            <input type="text" placeholder="Enter your Prefered Language" />
                        </div>
                        <div className="CHdiv">
                            <label>Your Name:</label>
                            <input type="text" placeholder="Enter your Name" />
                        </div>
                        <div className="CHB">
                            <button className="CHB1">Join Room</button>
                            <button className="CHB2">Apply Translation</button>
                        </div>

                    </form>
                </div>
            </header>
            <footer className="CHFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default ChatHome;