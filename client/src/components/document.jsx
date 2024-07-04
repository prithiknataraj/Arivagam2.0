import React, { useState } from "react";
import axios from 'axios';
import "../styles/document.css";
import "../index.css";

const Document = () => {
    const [originalText, setOriginalText] = useState(null);
    const [translatedText, setTranslatedText] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [language, setLanguage] = useState("");

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleTranslate = async () => {
        const formData = new FormData();
        formData.append('pdf_file', pdfFile);
        formData.append('lang', language);

        try {
            const response = await axios.post('http://localhost:5000/api/document', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setOriginalText(response.data.original_text);
            setTranslatedText(response.data.translated_text);
        } catch (error) {
            console.error("Error translating document:", error);
        }
    };

    return (
        <div>
            <header className="docHeader">
                <h1>Document Translator</h1>
                <div className="docIn">
                    <form className="docInput" onSubmit={(e) => { e.preventDefault(); handleTranslate(); }}>
                        <div>
                            <label>Upload PDF: </label>
                            <input type="file" id="pdfUpload" accept=".pdf" required onChange={handleFileChange}></input>
                        </div>
                        <div>
                            <label>
                                Language:
                            </label>
                            <input type="text" placeholder="Enter your preferred language..." required onChange={handleLanguageChange}></input>
                        </div>
                        <button type="submit" className="docTrans">Translate</button>
                    </form>
                </div>
                {originalText && <div className="docOut">
                    <div>
                        <h1>Original Document</h1>
                        <p>{originalText}</p>
                    </div>
                    <div>
                        <h1>Translated Document</h1>
                        <p>{translatedText}</p>
                    </div>
                </div>}
            </header>
            <footer className="docFooter">
                <h1>
                    Copyright &copy; 2023 - Team <b>Yukthi</b>
                </h1>
            </footer>
        </div>
    );
};

export default Document;