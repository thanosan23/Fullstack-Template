from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config['CORS_ORIGINS'] = 'http://localhost:3000'
app.config['CORS_SEND_WILDCARD'] = False

CORS(app)

@app.route('/')
def home():
    return jsonify(success=True)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
