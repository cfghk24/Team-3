from flask import Flask, jsonify, request, make_response

# from werkzeug.security import generate_password_hash, check_password_hash
import os
from flask_cors import CORS, cross_origin
from datetime import datetime
from pymongo import MongoClient
import logging

logging.basicConfig(level=logging.INFO)
app = Flask(__name__)
# CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
CORS(
    app,
    resources={r"/*": {"origins": "*"}},
)
team3: team3isthewinner
# MongoDB connection
client = MongoClient(
    "mongodb+srv://team3:team3isthewinner@cluster0.sbx3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["jpm-cfg"]

# return "Connected to MongoDB"


# Your Flask routes and other code here
