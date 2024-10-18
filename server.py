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
# team3: team3isthewinner
# MongoDB connection
client = MongoClient(
    "mongodb+srv://team3:team3isthewinner@cluster0.sbx3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["jpm-cfg"]

restaurant = db["restaurant"]
users = db["users"]
# accounts = db["accounts"]
badges = db["badges"]

# return "Connected to MongoDB"


@app.route("/api/service/restaurant", methods=["GET"])
@cross_origin()
def get_all_events():
    location = request.args.get("location")
    if location not in ["kowloon", "hk-island"]:
        return jsonify({"error": "Invalid location"}), 400

    try:
        all_events = list(restaurant.find({"location": location}))
        for event in all_events:
            event["_id"] = str(event["_id"])
        return jsonify(all_events), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


def main():
    app.run(host="127.0.0.1", port=8080, debug=True)


@app.route("/api/service/add-restaurant", methods=["POST"])
@cross_origin()
def add_restaurant():
    data = request.get_json()
    required_fields = ["name", "cuisine"]
    optional_fields = [
        "address",
        "district",
        "lat",
        "lng",
        "pet_friendly",
        "price_range",
        "phone",
        "hours",
    ]

    # if not all(field in data for field in required_fields):
    #     return jsonify({"error": "Missing required fields"}), 400

    try:
        new_restaurant = {
            "name": data["name"],
            "cuisine": data["cuisine"],
            # "rating": data["rating"],
            "address": data.get("address"),
            "district": data.get("district"),
            "lat": data.get("lat"),
            "lng": data.get("lng"),
            "pet_friendly": data.get("pet_friendly"),
            "price_range": data.get("price_range"),
            "phone": data.get("phone"),
            "hours": data.get("hours"),
            "created_at": datetime.utcnow(),
        }
        result = restaurant.insert_one(new_restaurant)
        new_restaurant["_id"] = str(result.inserted_id)
        return jsonify(new_restaurant), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == "__main__":
    main()
# Your Flask routes and other code here
