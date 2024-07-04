from flask import Flask, jsonify, request
from PyPDF2 import PdfReader
from googletrans import Translator

app = Flask(__name__)
translator = Translator()

def translate(text, target='ta'):
    output = translator.translate(text, target).text
    return output

def chunk_and_translate(text, lang, chunk=200):
    translated_text = ''
    for i in range(0, len(text), chunk):
        chunked = text[i:i+chunk]
        translatedchunk = translate(chunked, lang)
        a= translatedchunk.replace("\n", " ")
        translated_text+= " "+ a
    
    return translated_text

@app.route('/api/document', methods=['POST'])
def document():
    if 'pdf_file' not in request.files or 'lang' not in request.form:
        return jsonify({"error": "Missing file or language parameter"}), 400
    
    original_text = ""
    translated_text = []
    lang = ""
    
    lang = request.form['lang']
    pdf_file = request.files['pdf_file']

    if pdf_file and lang:
        # Read PDF content
        pdf_reader = PdfReader(pdf_file)
        for page in pdf_reader.pages:
            original_text += page.extract_text()
            a= original_text.replace("\n", " ")
            original_text= a

        # Translate PDF content
        translated_text = chunk_and_translate(original_text, lang)

    return jsonify({"original_text": original_text, "translated_text": translated_text})

if __name__ == '__main__':
    app.run(debug=True)
