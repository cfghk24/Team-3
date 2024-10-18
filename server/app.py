from flask import Flask, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
genai.configure(api_key='')
CORS(app)

@app.route('/testLLM', methods =['POST'])
def test_LLM():
    """Generates a refined query using a language model and retrieves relevant context."""

    model = genai.GenerativeModel("gemini-1.5-flash")

    # Context data - list of pets
    context = [
        {
            "About Me": "Handsome, Smart, Reserve. I was found trapped in a school foundation in Tsz Wan Shan on 22 October 2022. Although I take some time to warm up to people I don’t know, I have come a long way in my training and can now go to the dog park to socialise with other dogs. My friends would describe me as handsome and smart. Please ask my trainers for tips if you would like to adopt me!",
            "Centre": "Hong Kong Centre",
            "Intake": "Rescued by Inspectors",
            "Pet Breed": "Male Mongrel",
            "Pet name": "Hyena",
            "_id": "6711dbd8e8f858b0bad2bbd5",
            "birthday": "2022-09-04"
        },
        {
            "About Me": "Adorable, Friendly, Passionate. Hi, my name is Troy! I was found at a rubbish dump in Fanling by a kind passerby. As I was well-groomed and socialised, it was suspected that I was someone's lost pet. However, no one ever came forward to collect me. Now I wait at our Wan Chai Centre for my happy ever after. Come visit me and see if we make a good match!",
            "Centre": "Hong Kong Centre",
            "Gender": "Male (Desexed)",
            "Intake": "Rescue from Stray",
            "Pet Breed": "Poodle",
            "Pet name": "Troy",
            "_id": "6711e54fe8f858b0bad2bbd6",
            "birthday": "2022-09-27"
        },
        {
            "About Me": "Positive, Practical, Independent, Curious, Elegant. Hi, my name is Nathan! I was rescued by AFCD and then transferred to the SPCA, where I now wait for my forever home. I hope to find a loving owner who will care for me until the end of time! Is that you? Come visit me at the Kowloon Centre and see if we make a good match!",
            "Centre": "Kowloon Centre",
            "Gender": "Male (Desexed)",
            "Intake": "Rescue from AFCD",
            "Pet Breed": "Domestic",
            "Pet name": "Nathan",
            "_id": "6711e591e8f858b0bad2bbd7",
            "birthday": "2019-05-03"
        },
        {
            "About Me": "Positive, Gentle, Quiet, Introverted, Curious. I was rescued from a window sill at a housing estate in Sham Shui Po in January 2024 by our inspectors. Now that I have had my health check, I wait patiently at our Kowloon Centre for my forever family - come and visit me!",
            "Centre": "Kowloon Centre",
            "Gender": "Female (Desexed)",
            "Intake": "Rescued by Inspectors",
            "Pet Breed": "Domestic Short hair",
            "Pet name": "Sonia",
            "_id": "6711e617e8f858b0bad2bbd9",
            "birthday": "2023-09-28"
        }
    ]

    # Generate the response with additional safeguards
    prompt = f"""
        # Part 1: Information obtained from database input
        pets = {context}

        The name of the user is Amy.
        She is 18 years old.
        She likes cats.
        Her personality is mild and quiet.
        She lives with her parents.

        # Part 2: Requirements set by the LLM developer

        # Exact prompt to be used together with database information
        What kind of pets do you recommend to her? Based on the database information, provide the top 3 recommended pets.
        Return the data in a format understandable by the frontend.
    """

    response = model.generate_content(prompt)

    # Construct the final response
    final_response = {
        "response": response.text
    }

    # Print the final response for debugging
    print("Response:", final_response)

    # Return the final response as JSON
    return jsonify(final_response), 200


if __name__ == "__main__":
    app.run(debug=True)