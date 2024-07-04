import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/landingPage';
import Login from './components/login';
import SignUp from './components/signUp';
import Home from "./components/home";
import ChatHome from './components/chatHome';
import Document from "./components/document";
import MeetingHome from "./components/meetingHome";
import MentorRegister from './components/mentorRegister';
import Nanba from "./components/nanba";
import EditProfile from "./components/editProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatHome />} />
        <Route path='/document' element= {<Document />} />
        <Route path='/meet' element= {<MeetingHome />} />
        <Route path='/mentor' element= {<MentorRegister />} />
        <Route path='/nanba' element= {<Nanba />} />
        <Route path='/editprofile' element= {<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
