from flask import Flask, jsonify
from flask_cors import CORS
import json

# pip install Flask
# pip install flask-cors

# Dependencias para poder hostear el Rest-Api

app = Flask(__name__)
CORS(app)

with open('data.json') as f:
    data = json.load(f)

@app.route('/dishes', methods=['GET'])
def dishes():
    return jsonify(data)

@app.route('/dishes/packages/<int:id>', methods=['GET'])
def get_dish(id):
    dish = next((dish for dish in data if dish['id'] == id), None)
    if dish:
        return jsonify(dish)  
    else:
      return jsonify({'message': 'Dish not found'}), 404
    
if __name__ == '__main__':
    app.run(debug=True)