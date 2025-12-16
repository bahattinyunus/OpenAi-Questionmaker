import os
from typing import Tuple, Dict, Any

from flask import Flask, request, jsonify, Response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

# Initialize Flask Application
app = Flask(__name__)

# Configuration
# Fetch database connection string from environment variable for security and containerization support
# Default: Local PostgreSQL instance
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
    'DATABASE_URL', 
    'postgresql://postgres:postgres@localhost:5432/postgres2'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize Extensions
db = SQLAlchemy(app)
CORS(app)  # Enable Cross-Origin Resource Sharing for React Frontend

class Question(db.Model):
    """
    Database model representing a quiz question.
    Stores the question text, correct answer, distractors, type, and difficulty.
    """
    __tablename__ = 'questions'
    
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)
    wrong_answer1 = db.Column(db.String(255), nullable=False)
    wrong_answer2 = db.Column(db.String(255), nullable=False)
    wrong_answer3 = db.Column(db.String(255), nullable=False)
    question_type = db.Column(db.String(50), nullable=False)
    difficulty = db.Column(db.Integer, nullable=False)

    def to_dict(self) -> Dict[str, Any]:
        """Convert the model instance to a dictionary."""
        return {
            "id": self.id,
            "text": self.text,
            "answer": self.answer,
            "difficulty": self.difficulty,
            "type": self.question_type
        }

@app.route('/create_question', methods=['POST'])
def create_question() -> Tuple[Response, int]:
    """
    API Endpoint to create a new question in the database.
    
    Expected JSON Payload:
    {
        "soru": str,
        "dogru_cevap": str,
        "yanlis_cevap1": str,
        "yanlis_cevap2": str,
        "yanlis_cevap3": str,
        "tur": str,
        "zorluk_seviyesi": int
    }
    """
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid payload"}), 400

        # Extract data with safe access (though direct access assumes valid payload from frontend)
        text = data.get('soru')
        answer = data.get('dogru_cevap')
        wrong_answer1 = data.get('yanlis_cevap1')
        wrong_answer2 = data.get('yanlis_cevap2')
        wrong_answer3 = data.get('yanlis_cevap3')
        question_type = data.get('tur')
        difficulty = data.get('zorluk_seviyesi')

        # Create new Question instance
        question = Question(
            text=text,
            answer=answer,
            wrong_answer1=wrong_answer1,
            wrong_answer2=wrong_answer2,
            wrong_answer3=wrong_answer3,
            question_type=question_type,
            difficulty=difficulty
        )

        # Commit to database
        db.session.add(question)
        db.session.commit()

        return jsonify({"message": "Soru başarıyla veritabanına eklendi.", "id": question.id}), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Internal Server Error: {str(e)}"}), 500

@app.route('/health', methods=['GET'])
def health_check() -> Tuple[Response, int]:
    """Simple health check endpoint for Docker/Kubernetes probes."""
    return jsonify({"status": "healthy"}), 200

if __name__ == '__main__':
    # Create tables if they don't exist
    with app.app_context():
        db.create_all()
    
    # Run server
    app.run(host='0.0.0.0', port=5000, debug=True)
