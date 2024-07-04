from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo  import MongoClient

app= Flask(__name__)
cors= CORS(app, origins='*')

youtube_base_link= "https://www.youtube.com/embed/"

# _________________________Connecting MongoDB_________________________
client= MongoClient("mongodb+srv://prithik:Indian@cluster0.gyp783r.mongodb.net/?retryWrites=true&w=majority&appName=cluster0")
db= client["arivagam"]
users= db["users"]

# _________________________Connecting REACT_________________________
# Login Page

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    db.users.delete_one({"admin_email":"yukthi@gmail.com"})
    db.users.insert_one({"admin_email":"yukthi@gmail.com", "current_user": username})
    
    user= db.users.find_one({"email": username, "password": password})
    
    if user:
        return jsonify({"response": "login"}), 200

    return jsonify({"response": "nologin"}), 200

#SignUp Page
@app.route("/api/signup", methods=["POST"])
def signup():    
    data= request.json    
    username= data.get('username')
    password= data.get('password')
    preferred_language= data.get('preferredLanguage')
    age= data.get('age')
    gender= data.get('gender')
    phone_number= data.get('phoneNumber')
    email= data.get('email')
    disability= data.get('disabilities')
    
    db.users.delete_one({"admin_email":"yukthi@gmail.com"})
    db.users.insert_one({"admin_email":"yukthi@gmail.com", "current_user": username})
    
    if db.users.find_one({'username': username}):
        return jsonify({"response": "Mail ID already registered"})

    user_data = {'Name': username, 'password': password, 'age':age,'preferred_language':preferred_language, 'gender':gender, "phone_number": phone_number, "email": email, "disability": disability}
    db.users.insert_one(user_data)
    
    return jsonify({"response": "signup"})

@app.route("/api/home", methods= ["POST"])
def home():
    data= request.json
    
    if data.get('use')== "todo":
        current_user= db.users.find_one({"admin_email": "yukthi@gmail.com"})
        user= db.users.find_one({"email": current_user["current_user"]})
        
        item= data.get('todoItem')
        date= data.get('todoDate')
        time= data.get('todoTime')
        
        todo= {"item": item, "date": date, "time": time}
        user["todo"]= todo
        
        db.user.delete_one({"email": current_user["current_user"]})
        print(user)
        
        return jsonify({"response": "success"})
        
    
    elif data.get('use')== "videos":
        current_user= db.users.find_one({"admin_email": "yukthi@gmail.com"})
        user= db.users.find_one({"email": current_user["current_user"]})

        if "todo" in user:
            todo= user["todo"]  
            
        else: 
            todo= None
               
        age= user["age"]
        
        if age< 10:
            video1= youtube_base_link+ "OTuph9pJWU4"
            video2= youtube_base_link+ "mSEYTJZ4N_c"
            video3= youtube_base_link+ "HaEmIakO7f4"
            video4= youtube_base_link+ "ndDpjT0_IM0"
            
        if age< 13:
            video1= youtube_base_link+ "OTuph9pJWU4"
            video2= youtube_base_link+ "mSEYTJZ4N_c"
            video3= youtube_base_link+ "HaEmIakO7f4"
            video4= youtube_base_link+ "ndDpjT0_IM0"
            
        if age< 16:
            video1= youtube_base_link+ "OTuph9pJWU4"
            video2= youtube_base_link+ "mSEYTJZ4N_c"
            video3= youtube_base_link+ "HaEmIakO7f4"
            video4= youtube_base_link+ "ndDpjT0_IM0"
            
        if age< 19:
            video1= youtube_base_link+ "OTuph9pJWU4"
            video2= youtube_base_link+ "mSEYTJZ4N_c"
            video3= youtube_base_link+ "HaEmIakO7f4"
            video4= youtube_base_link+ "ndDpjT0_IM0"
            
        if age< 22:
            video1= youtube_base_link+ "OTuph9pJWU4"
            video2= youtube_base_link+ "mSEYTJZ4N_c"
            video3= youtube_base_link+ "HaEmIakO7f4"
            video4= youtube_base_link+ "ndDpjT0_IM0"
            
        return jsonify({"video1": video1, "video2": video2, "video3": video3, "video4": video4, "todo": todo})
    
if __name__== "__main__":
    app.run(debug= True, port= 8080)