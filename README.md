![OpenAI-Questionmaker Banner](assets/banner.png)

# OpenAI QuestionMaker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)
![React](https://img.shields.io/badge/react-18+-61DAFB.svg)
![PostgreSQL](https://img.shields.io/badge/database-postgresql-336791.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

**OpenAI QuestionMaker** is a sophisticated full-stack application designed to generate, manage, and store complex educational questions using state-of-the-art AI. By leveraging OpenAI's powerful language models, it allows educators and developers to create high-quality question banks for exams, quizzes, and educational games effortlessly.

## 🚀 Key Features

*   **AI-Powered Generation**: Create diverse and challenging questions across various subjects using OpenAI's API.
*   **Robust Database**: Automatically store questions, answers, distractors, and metadata (difficulty, type) in a PostgreSQL database.
*   **Modern UI**: intuitive React-based frontend for seamless interaction and question management.
*   **RESTful API**: Flexible Flask backend providing a reliable `/create_question` endpoint for system integration.
*   **Scalable Architecture**: Built with separation of concerns in mind, allowing for easy expansion of both frontend and backend.

## 🛠️ Technology Stack

### Backend
*   **Framework**: Flask (Python)
*   **Database**: PostgreSQL (via SQLAlchemy ORM)
*   **API**: RESTful endpoints with CORS support

### Frontend
*   **Library**: React.js (v18+)
*   **Styling**: Modern CSS
*   **HTTP Client**: Axios

## 📂 Project Structure

The core application logic is located within the `soru oluşturucu/Soru oluştur` directory:

```
OpenAi-Questionmaker/
├── assets/                 # Project assets (banners, images)
├── soru oluşturucu/
│   └── Soru oluştur/
│       ├── backend/        # Flask Application
│       │   ├── app.py      # Main entry point & DB Models
│       │   └── venv/       # Python virtual environment
│       └── frontend/       # React Application
│           ├── src/        # React source code
│           ├── public/     # Static assets
│           └── package.json
└── README.md
```

## 💻 Installation & Usage

### Prerequisites
*   Python 3.8+
*   Node.js & npm
*   PostgreSQL installed and running locally
*   OpenAI API Key

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd "soru oluşturucu/Soru oluştur/backend"
```

Create and activate a virtual environment:
```bash
python -m venv venv
# Windows
.\venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

Install dependencies (Flask, SQLAlchemy, Psicopg2, etc.):
```bash
pip install flask flask-sqlalchemy flask-cors psycopg2-binary
```

Configure the database in `app.py`:
Ensure your PostgreSQL database is running and the connection string in line 6 matches your credentials:
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/your_database'
```

Run the server:
```bash
python app.py
```
*The API will start at `http://localhost:5000`*

### 2. Frontend Setup

Open a new terminal and navigate to the frontend directory:
```bash
cd "soru oluşturucu/Soru oluştur/frontend"
```

Install Node dependencies:
```bash
npm install
```

Start the application:
```bash
npm start
```
*The app will run at `http://localhost:3000`*

## 🤝 Contributing

We welcome contributions! Please check the `CONTRIBUTING.md` file for guidelines on how to help improve this project.

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for full details.
