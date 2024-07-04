import React, { useState } from "react";
import "../styles/chatroom.css";
import "boxicons";

const ChatRoom = () => {
    return (
        <div>
            <header className="CRheader">
                <div className="CRtitle">
                    <h1>
                        Chat Room
                    </h1>
                </div>
                <div className="CRbody">
                    <div className="CRT">
                        <h1>
                            Room: 23 - Sujay
                        </h1>
                        <button>Leave Room</button>
                    </div>
                    <div className="CRchat">
                        <h1 className="CRon">You have joined room 23.</h1>
                        <h1 className="CRon">Transition is enabled in this room.</h1>
                        <h1 className="CRin">Good Morning</h1>
                        <h1 className="CRout">காலை வணக்கம்</h1>
                    </div>
                </div>
                <div className="CRinput">
                    <form>
                        <input type="text" placeholder="Type your message..." />
                    </form>
                    <button><box-icon name='send' animation='tada' flip='vertical' color='#ff5733' size="50px"></box-icon></button>
                </div>
            </header>
            <footer className="CRFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default ChatRoom;