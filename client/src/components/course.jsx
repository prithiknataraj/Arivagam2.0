import React, { useState } from "react";
import "../styles/course.css";
import "boxicons";

const Course = () => {
    return (
        <div>
            <header className="courseHeader">
                <div className="courseDiv1">
                    <div className="courseD1">
                        <h1>
                            Video
                        </h1>
                        <video controls width="630" height="360">
                            <source src="path_to_your_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="courseD2">
                        <h1>
                            Subtitle
                        </h1>
                        <p>
                            A pine is any conifer tree or shrub in the genus Pinus of the family Pinaceae. Pinus is the sole genus in the subfamily Pinoideae. World Flora Online, created by the Royal Botanic Gardens, Kew, and Missouri Botanical Garden, accepts 187 species names of pines as current, together with more synonyms.
                        </p>
                    </div>
                </div>
                <div className="courseDiv2">
                    <div className="courseC1">
                        <h1>Suggested Videos</h1>
                        <div>
                            <video controls width="500">
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video controls width="500">
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video controls width="500">
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video controls width="500">
                                <source src="path_to_your_video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="courseC2">
                        <h1>
                            Chat
                        </h1>
                        <div className="courseContent">
                            <p>Life is to live</p>
                            <p>Love all</p>
                            <img src="/src/img/background.jpg" />
                            <audio controls>
                                <source src="https://example.com/your-audio.mp3" type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        <div className="courseINS">
                            <button>
                                <box-icon name='image-add' type='solid' color='#ffffff' size="40px"></box-icon>
                            </button>
                            <button>
                                <box-icon name='microphone' type='solid' color='#ffffff' size="40px"></box-icon>
                            </button>
                            <input type="text" placeholder="Take Notes..."></input>
                            <button>
                                <box-icon name='send' animation='tada' flip='vertical' color='#ff5733' size="40px"></box-icon>
                            </button>
                            <button>
                                <box-icon name='download' type='solid' color='#ffffff' size="40px"></box-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <footer className="courseFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
}

export default Course;