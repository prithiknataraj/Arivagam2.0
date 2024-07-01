import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/landingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('english');

  const handleFindOutMoreClick = () => {
    const lpFomSection = document.querySelector('.LPfom');
    lpFomSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const content = {
    english: {
      button1: "Find Out More",
      button2: "Get Started",
      header: "Education: Where Boundaries Disappear and Potential Soars!",
      about: "With a resolute commitment to inclusivity, Arivagam embraces individuals of all abilities, providing an open and accessible space for learning. We believe that education knows no boundaries, and our platform ensures that people with disabilities can participate fully.",
      join: "Join our gathering.",
      joinText: "Join us on this transformative journey where education transcends barriers, empowering every learner to thrive and excel.",
      footer: "Copyright",
      yukthi: "Yukthi",
      team: "team",
      language: "Language",
      aboutNav: "About",
      loginNav: "Login",
      tamil: "Tamil",
      english: "English",
      hindi: "Hindi"
    },
    hindi: {
      button1: "और जानें",
      button2: "शुरू करें",
      header: "शिक्षा: जहाँ सीमाएँ गायब होती हैं और क्षमता ऊँचाइयों पर पहुँचती है!",
      about: "समावेशिता के प्रति दृढ़ प्रतिबद्धता के साथ, अरिवगम सभी क्षमताओं के व्यक्तियों को गले लगाता है, सीखने के लिए एक खुला और सुलभ स्थान प्रदान करता है। हमें विश्वास है कि शिक्षा की कोई सीमा नहीं है, और हमारा मंच यह सुनिश्चित करता है कि विकलांग व्यक्ति पूरी तरह से भाग ले सकें।",
      join: "हमारे सभा में शामिल हों।",
      joinText: "हमारे साथ इस परिवर्तनकारी यात्रा में शामिल हों जहाँ शिक्षा बाधाओं को पार करती है, प्रत्येक शिक्षार्थी को समृद्ध और उत्कृष्ट बनाने के लिए सशक्त बनाती है।",
      footer: "कॉपीराइट",
      yukthi: "युक्ति",
      team: "टीम",
      language: "भाषा",
      aboutNav: "के बारे में",
      loginNav: "लॉगिन",
      tamil: "तमिल",
      english: "अंग्रेज़ी",
      hindi: "हिंदी"
    },
    tamil: {
      button1: "மேலும் அறிக",
      button2: "தொடங்குங்கள்",
      header: "கல்வி: எல்லைகள் மறைந்து, திறன் உயரும் இடம்!",
      about: "உணர்ச்சி உடைய புறக்கணிப்பு இல்லாத இடத்தில், அரிவகம் அனைத்து திறன்களையுடைய நபர்களையும் கைகொள்ளுகிறது, கற்றலுக்கான திறந்த மற்றும் அணுகக்கூடிய இடத்தை வழங்குகிறது. கல்விக்கு எல்லைகள் இல்லை என்று நாங்கள் நம்புகிறோம், மேலும் எங்கள் தளம் மாற்றுத்திறனாளிகள் முழுமையாக பங்கேற்கத்தக்கதாக உறுதி செய்கிறது.",
      join: "எங்கள் கூடத்தில் சேருங்கள்.",
      joinText: "கல்வி தடைகளை தாண்டி, ஒவ்வொரு கற்றலாளரையும் வளர்த்தழைக்கச் செய்கிறது. எங்கள் மாற்றம் அடைவுகளின் பயணத்தில் எங்களுடன் சேருங்கள்.",
      footer: "பதிப்புரிமை",
      yukthi: "யுக்தி",
      team: "குழு",
      language: "மொழி",
      aboutNav: "பற்றி",
      loginNav: "உள்நுழைவு",
      tamil: "தமிழ்",
      english: "ஆங்கிலம்",
      hindi: "இந்தி"
    }
  };


  return (
    <div className='LPbody'>
      <nav className="navbar navbar-expand-lg fixed-top lp-nav">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "rgb(255, 87, 51)", fontSize: "2rem" }} href="#">Arivagam.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
              <li className="nav-item dropdown">
                <a className="nav-link text-white dropdown-toggle dimmed" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {content[language].language}
                </a>
                <ul className="dropdown-menu" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderColor: "rgba(255, 255, 255, 0.4)" }}>
                  <li><a className="dropdown-item text-white" onClick={() => setLanguage('english')} href="#">{content[language].english}</a></li>
                  <li><hr className="dropdown-divider" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}></hr></li>
                  <li><a className="dropdown-item text-white" onClick={() => setLanguage('hindi')} href="#">{content[language].hindi}</a></li>
                  <li><hr className="dropdown-divider" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}></hr></li>
                  <li><a className="dropdown-item text-white" onClick={() => setLanguage('tamil')} href="#">{content[language].tamil}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white dimmed" aria-current="page" href="#about">{content[language].aboutNav}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white active" onClick={handleGetStartedClick}>{content[language].loginNav}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className='LPtotalContent'>
        <div className='LPabout' id='about'>
          <h1 className='bounce-text'>
            {content[language].header}
          </h1>
          <p>
            {content[language].about}
          </p>
          <button onClick={handleFindOutMoreClick}>
            {content[language].button1}
          </button>
        </div>
        <div className='LPfom' id='fom'>
          <h1>
            {content[language].join}
          </h1>
          <p>
            {content[language].joinText}
          </p>
          <button className='bulge-button' onClick={handleGetStartedClick}>
            {content[language].button2}
          </button>
        </div>
      </header>
      <footer className='LPFooter'>
        <h1>
          {content[language].footer} &copy; 2023 - {content[language].team} <b>{content[language].yukthi}</b>
        </h1>
      </footer>
    </div>
  );
}

export default LandingPage;