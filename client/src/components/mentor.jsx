import React, { useState } from "react";
import "../styles/mentor.css";
import "boxicons";

const Mentor = () => {
    return (
        <div>
            <header className="MentorHeader">
                <h1>
                    Available Mentors
                </h1>
                <div className="MentorDetails">
                    <div>
                        <box-icon name='user-circle' type='solid' color='#ffffffb3'></box-icon>
                        <h1>SivaMurugan</h1>
                    </div>
                    <div>
                        <box-icon name='calendar-alt' type='solid' color='#ffffffb3'></box-icon>
                        <h1>45</h1>
                    </div>
                    <div>
                        <box-icon name='book-content' type='solid' color='#ffffffb3'></box-icon>
                        <h1>IOT</h1>
                    </div>
                    <div>
                        <box-icon name='globe' color='#ffffffb3' ></box-icon>
                        <h1>Tamil</h1>
                    </div>
                    <div>
                        <box-icon name='male-female' color='#ffffffb3' ></box-icon>
                        <h1>Male</h1>
                    </div>
                    <div>
                        <box-icon name='envelope' type='solid' color='#ffffffb3' ></box-icon>
                        <h1>sivamurugan@gmail.com</h1>
                    </div>
                    <button className="MentorCButton">Connect</button>
                </div>
            </header>
            <footer className="MentorFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default Mentor;