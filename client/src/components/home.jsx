import React, { useState, useEffect } from "react";
import "../styles/home.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css";
import { Link } from "react-router-dom";
import "boxicons";

const Home = () => {
    const [language, setLanguage] = useState('english');
    const [videos, setVideos] = useState({});
    const [toDoItem, setToDoItem] = useState("");
    const [toDoDate, setToDoDate] = useState("");
    const [toDoTimeFrame, setToDoTimeFrame] = useState("");
    const [todoerror, setToDoError] = useState("");
    const [todo, setToDo] = useState({});
    const [todoShow, setToDoShow] = useState({});
    const [error, setError] = useState("");

    const handleToDoItem = (event) => {
        setToDoItem(event.target.value);
    }

    const handleToDoDate = (event) => {
        setToDoDate(event.target.value);
    }

    const handleToDoTimeFrame = (event) => {
        setToDoTimeFrame(event.target.value);
    }

    const handleToDoSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/api/home", {
                use: "todo",
                todoItem: toDoItem,
                todoDate: toDoDate,
                todoTime: toDoTimeFrame,
            });

            if (!toDoItem) {
                setToDoError("* To Do Item Required");
            } else if (!toDoDate) {
                setToDoError("* To Do Date Required");
            } else if (!toDoTimeFrame) {
                setToDoError("* To Do Time Frame Required");
            } else if (response.data.response === "success") {
                setToDoShow("yes");
                setToDo({ item: toDoItem, date: toDoDate, time: toDoTimeFrame });
            }

        } catch (error) {
            console.error("Error sending data to server: ", error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8080/api/home", {
                    use: "videos",
                });

                if (response) {
                    setVideos(response.data);

                    if (response.data.todo) {
                        setToDoShow("yes");
                        setToDo(response.data.todo);
                    }
                }

            } catch (error) {
                setError("Error receiving data from server");
                console.error("Error receiving data from server: ", error);
            }
        };

        fetchData();
    }, []);

    const content = {
        english: {
            arivagam: "Arivagam.",
            tamil: "Tamil",
            english: "English",
            hindi: "Hindi"
        },
        hindi: {
            arivagam: "ज्ञान केंद्र.",
            tamil: "तमिल",
            english: "अंग्रेज़ी",
            hindi: "हिंदी"
        },
        tamil: {
            arivagam: "அறிவகம்.",
            tamil: "தமிழ்",
            english: "ஆங்கிலம்",
            hindi: "இந்தி"
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top lp-nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: "rgb(255, 87, 51)", fontSize: "2rem" }} to={"/home"}>{content[language].arivagam}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                            <li className="nav-item">
                                <Link className="nav-link text-white dimmed" aria-current="page" to={"/chat"}>Chat Room</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white dimmed" aria-current="page" to={"/document"}>Document</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white dimmed" to={"/meet"}>Meet</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white dimmed" to={"/mentor"}>Mentor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white dimmed" to={"/nanba"}>Nanba</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white dimmed">Scholarship</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle dimmed" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
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
                                <Link className="nav-link text-white dimmed" to={"/editprofile"}><box-icon name='user-circle' type='solid' flip='horizontal' color='#ffffff' size="2rem"></box-icon>x</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header>
                <div className="ToDo">
                    <h1>Welcome to ARIVAGAM.2.0</h1>
                    <p>
                        Welcome back! It's a pleasure to have you here. We are here to assist you with your to-do list and support your journey of learning and growth. Together, we'll achieve your goals and make progress in various aspects of life. Let's collaborate and make the most of this opportunity to create a bright future!
                    </p>
                    <form className="homeToDo" onSubmit={handleToDoSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" placeholder="Add a to-do item..." value={toDoItem} onChange={handleToDoItem} />
                            <input type="datetime-local" value={toDoDate} onChange={handleToDoDate} />
                            <input type="number" placeholder="Time frame in hours" value={toDoTimeFrame} onChange={handleToDoTimeFrame} />
                            <button className="homeButton" type="submit">Add</button>
                        </div>
                    </form>
                    <form>
                        <div className="input-group">
                            <input type="text" placeholder="Type for the concept you want to learn today..." />
                            <input type="text" placeholder="Go for a course search" />
                            <button className="homeButton" type="submit">Learn</button>
                        </div>
                    </form>
                    {todoerror && <p>{todoerror}</p>}
                    {todoShow && <div>{todo.item}{todo.date}{todo.time}</div>}
                </div>
                <div className="homeCourses">
                    <h1>Suggested Lessons</h1>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <iframe className="home_video" src={videos.video1} title="YouTube video" allowFullScreen></iframe>
                            </div>
                            <div class="carousel-item">
                                <iframe className="home_video" src={videos.video2} title="YouTube video" allowFullScreen></iframe>
                            </div>
                            <div class="carousel-item">
                                <iframe className="home_video" src={videos.video3} title="YouTube video" allowFullScreen></iframe>
                            </div>
                            <div class="carousel-item">
                                <iframe className="home_video" src={videos.video4} title="YouTube video" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <footer className="homeFooter">
                <h1>Copyright &copy; 2023 - Team <b>Yukthi</b></h1>
            </footer>
        </div>
    );
};

export default Home;