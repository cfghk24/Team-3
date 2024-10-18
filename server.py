from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import logging
import requests

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB connection
client = MongoClient(
    "mongodb+srv://team3:team3isthewinner@cluster0.sbx3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["database"]  # Correctly accessing the database


@app.route("/api/get_pet_data", methods=["GET"])
def get_data():
    try:
        pet_data = list(db.pet.find())  # Accessing the correct collection
        for pet in pet_data:
            pet["_id"] = str(pet["_id"])
        return jsonify(pet_data), 200  # Returns data as JSON with status code
    except Exception as e:
        logging.error(f"Error fetching pet data: {e}")
        return jsonify({"error": "Failed to fetch pet data"}), 500  # Handle errors


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
