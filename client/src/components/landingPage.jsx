import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/landingPage.css";

function LandingPage() {
  const navigate= useNavigate();

  const handleFindOutMoreClick = () => {
    const lpFomSection = document.querySelector('.LPfom');
    lpFomSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className='LPbody'>
      <header className='LPtotalContent'>
        <div className='LPabout' id='about'>
          <h1 className='bounce-text'>
            Education: Where Boundaries Disappear and Potential Soars!
          </h1>
          <p>
            With a resolute commitment to inclusivity, Arivagam embraces
            individuals of all abilities, providing an open and accessible
            space for learning. We believe that education knows no boundaries,
            and our platform ensures that people with disabilities can
            participate fully.
          </p>
          <button onClick={handleFindOutMoreClick}>
            Find Out More
          </button>
        </div>
        <div className='LPfom' id='fom'>
          <h1>
            Join our gathering.
          </h1>
          <p>
            Join us on this transformative journey where education transcends
            barriers, empowering every learner to thrive and excel.
          </p>
          <button className='bulge-button' onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </header>
      <footer className='LPFooter'>
        <h1>
          Copyright &copy; 2023 - Team <b>Yukthi</b>
        </h1>
      </footer>
    </div>
  );
}

export default LandingPage;