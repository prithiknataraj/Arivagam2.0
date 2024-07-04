import React, {useState} from "react";
import "../styles/meetingHome.css";

const MeetingHome= ()=> {
    return(
        <div>
            <header className="MHheader">
                <h1>
                    Welcome to Arivagam's Meeting Room
                </h1>
                <p>
                    Collaborate and communicate seamlessly with your team in our virtual meeting space.
                </p>
                <div>
                    <button className="MHB1">Start a New Meeting</button>
                    <button className="MHB2">Join an Existing Meeting</button>
                </div>
                <h2 className="MHSupportTeam">Contact our Support Team</h2>
            </header>
            <footer className="MHFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default MeetingHome;