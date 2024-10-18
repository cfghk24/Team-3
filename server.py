from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import logging

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# MongoDB connection
client = MongoClient(
    "mongodb+srv://team3:team3isthewinner@cluster0.sbx3m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
db = client["database"]  # Correctly accessing the database
@app.route('/api/get_pet_data', methods=['GET'])
def get_data():
    try:
        pet_data = list(db.pet.find())  # Accessing the correct collection
        for pet in pet_data:
            pet['_id'] = str(pet['_id'])
        return jsonify(pet_data), 200  # Returns data as JSON with status code
    except Exception as e:
        logging.error(f"Error fetching pet data: {e}")
        return jsonify({"error": "Failed to fetch pet data"}), 500  # Handle errors

def main():
    app.run(host="127.0.0.1", port=8080, debug=True)

if __name__ == "__main__":
    main()