from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS 

import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/postgres2')
db = SQLAlchemy(app)
CORS(app)
class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255))
    answer = db.Column(db.String(255))
    wrong_answer1 = db.Column(db.String(255))
    wrong_answer2 = db.Column(db.String(255))
    wrong_answer3 = db.Column(db.String(255))
    question_type = db.Column(db.String(50))
    difficulty = db.Column(db.Integer)

@app.route('/create_question', methods=['POST'])
def create_question():
    data = request.json
    text = data['soru']
    answer = data['dogru_cevap']
    wrong_answer1 = data['yanlis_cevap1']
    wrong_answer2 = data['yanlis_cevap2']
    wrong_answer3 = data['yanlis_cevap3']
    question_type = data['tur']
    difficulty = data['zorluk_seviyesi']

    try:
        question = Question(
            text=text,
            answer=answer,
            wrong_answer1=wrong_answer1,
            wrong_answer2=wrong_answer2,
            wrong_answer3=wrong_answer3,
            question_type=question_type,
            difficulty=difficulty
        )

        db.session.add(question)
        db.session.commit()

        return jsonify({"message": "Soru başarıyla veritabanına eklendi."})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
