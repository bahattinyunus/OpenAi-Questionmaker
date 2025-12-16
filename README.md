![OpenAI-Questionmaker Banner](assets/banner.png)

# OpenAI QuestionMaker

![Lisans](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.9-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)
![React](https://img.shields.io/badge/react-18+-61DAFB.svg)
![Docker](https://img.shields.io/badge/docker-ready-2496ED.svg)
![PostgreSQL](https://img.shields.io/badge/database-postgresql-336791.svg)
![Durum](https://img.shields.io/badge/status-active-success.svg)

**OpenAI QuestionMaker**, en son teknoloji yapay zekayı kullanarak karmaşık eğitim soruları oluşturmak, yönetmek ve saklamak için tasarlanmış gelişmiş bir full-stack uygulamasıdır. Artık **Docker** desteği ile çok daha kolay kurulabilir ve dağıtılabilir.

## 🚀 Temel Özellikler

*   **Yapay Zeka Destekli Üretim**: OpenAI API'sini kullanarak çeşitli konularda zorlu ve çeşitli sorular oluşturun.
*   **Tam Konteynerizasyon**: Docker ve Docker Compose ile tek komutla kurulum.
*   **Güçlü Veritabanı**: Soruları, cevapları, çeldiricileri ve meta verileri otomatik olarak PostgreSQL veritabanında saklayın.
*   **Modern Arayüz**: Sorunsuz etkileşim için React tabanlı arayüz.
*   **Ölçeklenebilir Mimari**: Backend (Flask) ve Frontend (React) ayrımı ile profesyonel yapı.

## 🛠️ Teknoloji Yığını

- **Backend**: Python, Flask, PostgreSQL (SQLAlchemy)
- **Frontend**: React.js, Nginx (Prodüksiyon için)
- **DevOps**: Docker, Docker Compose, GitHub Actions

## 🏗️ Mimari Şeması

Aşağıdaki şema, uygulamanın bileşenlerinin nasıl etkileşime girdiğini göstermektedir:

```mermaid
graph TD
    User[Kullanıcı] -->|HTTP Request| Frontend[React Frontend]
    Frontend -->|API Calls (Axios)| Backend[Flask Backend]
    Backend -->|SQL Query| DB[(PostgreSQL Database)]
    Backend -->|Prompt| OpenAI[OpenAI API]
    OpenAI -->|Generated Question| Backend
    Backend -->|JSON Response| Frontend
    Frontend -->|Render UI| User

    subgraph Docker Network
        Frontend
        Backend
        DB
    end
```

## 📂 Proje Yapısı

```
OpenAi-Questionmaker/
├── backend/            # Flask API & Dockerfile
├── frontend/           # React App & Dockerfile
├── assets/             # Görsel varlıklar
├── .github/            # CI/CD & Şablonlar
├── docker-compose.yml  # Servis orkestrasyonu
└── README.md
```

## 💻 Kurulum ve Kullanım

### Seçenek 1: Docker ile Hızlı Kurulum (Önerilen)

Bilgisayarınızda Docker ve Docker Compose yüklü olmalıdır.

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/bahattinyunus/OpenAi-Questionmaker.git
   cd OpenAi-Questionmaker
   ```

2. Uygulamayı başlatın:
   ```bash
   docker-compose up --build
   ```
   *Bu komut backend, frontend ve veritabanını otomatik olarak kuracaktır.*

3. Tarayıcıda açın: `http://localhost:3000`

### Seçenek 2: Manuel Kurulum (Geliştirme İçin)

**Gereksinimler:** Python 3.9+, Node.js, PostgreSQL.

1. **Backend**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   export DATABASE_URL='postgresql://kullanici:sifre@localhost:5432/db'
   python app.py
   ```

2. **Frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## 🤝 Katkıda Bulunma

Lütfen `CONTRIBUTING.md` dosyasına bakın.

## 📄 Lisans

Bu proje **MIT Lisansı** altındadır. Detaylar için `LICENSE` dosyasına bakınız.
