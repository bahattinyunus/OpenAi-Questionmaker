![OpenAI-Questionmaker Banner](assets/banner.png)

# OpenAI QuestionMaker

![Lisans](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.8+-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-green.svg)
![React](https://img.shields.io/badge/react-18+-61DAFB.svg)
![PostgreSQL](https://img.shields.io/badge/database-postgresql-336791.svg)
![Durum](https://img.shields.io/badge/status-active-success.svg)

**OpenAI QuestionMaker**, en son teknoloji yapay zekayı kullanarak karmaşık eğitim soruları oluşturmak, yönetmek ve saklamak için tasarlanmış gelişmiş bir full-stack uygulamasıdır. OpenAI'nin güçlü dil modellerinden yararlanarak, eğitimcilerin ve geliştiricilerin sınavlar, testler ve eğitici oyunlar için yüksek kaliteli soru bankaları oluşturmasına olanak tanır.

## 🚀 Temel Özellikler

*   **Yapay Zeka Destekli Üretim**: OpenAI API'sini kullanarak çeşitli konularda zorlu ve çeşitli sorular oluşturun.
*   **Güçlü Veritabanı**: Soruları, cevapları, çeldiricileri ve meta verileri (zorluk, tür) otomatik olarak bir PostgreSQL veritabanında saklayın.
*   **Modern Arayüz**: Sorunsuz etkileşim ve soru yönetimi için sezgisel React tabanlı arayüz.
*   **RESTful API**: Sistem entegrasyonu için güvenilir bir `/create_question` uç noktası sağlayan esnek Flask backend.
*   **Ölçeklenebilir Mimari**: Hem frontend hem de backend'in kolayca genişletilmesine olanak tanıyan, endişelerin ayrılığı (separation of concerns) ilkesiyle oluşturulmuştur.

## 🛠️ Teknoloji Yığını

### Backend (Arka Uç)
*   **Çatı (Framework)**: Flask (Python)
*   **Veritabanı**: PostgreSQL (SQLAlchemy ORM aracılığıyla)
*   **API**: CORS destekli RESTful uç noktaları

### Frontend (Ön Yüz)
*   **Kütüphane**: React.js (v18+)
*   **Stil**: Modern CSS
*   **HTTP İstemcisi**: Axios

## 📂 Proje Yapısı

Temel uygulama mantığı `soru oluşturucu/Soru oluştur` dizini içinde yer almaktadır:

```
OpenAi-Questionmaker/
├── assets/                 # Proje varlıkları (bannerlar, görseller)
├── soru oluşturucu/
│   └── Soru oluştur/
│       ├── backend/        # Flask Uygulaması
│       │   ├── app.py      # Ana giriş noktası & Veritabanı Modelleri
│       │   └── venv/       # Python sanal ortamı
│       └── frontend/       # React Uygulaması
│           ├── src/        # React kaynak kodları
│           ├── public/     # Statik varlıklar
│           └── package.json
└── README.md
```

## 💻 Kurulum ve Kullanım

### Gereksinimler
*   Python 3.8+
*   Node.js & npm
*   Yerel olarak çalışan PostgreSQL
*   OpenAI API Anahtarı

### 1. Backend Kurulumu

Backend dizinine gidin:
```bash
cd "soru oluşturucu/Soru oluştur/backend"
```

Bir sanal ortam oluşturun ve etkinleştirin:
```bash
python -m venv venv
# Windows için
.\venv\Scripts\activate
# macOS/Linux için
source venv/bin/activate
```

Bağımlılıkları yükleyin (Flask, SQLAlchemy, Psicopg2 vb.):
```bash
pip install flask flask-sqlalchemy flask-cors psycopg2-binary
```

Veritabanını `app.py` içinde yapılandırın:
PostgreSQL veritabanınızın çalıştığından ve 6. satırdaki bağlantı dizesinin kimlik bilgilerinizle eşleştiğinden emin olun:
```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://kullanici_adi:sifre@localhost:5432/veritabaniniz'
```

Sunucusu çalıştırın:
```bash
python app.py
```
*API `http://localhost:5000` adresinde başlayacaktır.*

### 2. Frontend Kurulumu

Yeni bir terminal açın ve frontend dizinine gidin:
```bash
cd "soru oluşturucu/Soru oluştur/frontend"
```

Node bağımlılıklarını yükleyin:
```bash
npm install
```

Uygulamayı başlatın:
```bash
npm start
```
*Uygulama `http://localhost:3000` adresinde çalışacaktır.*

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Bu projeyi geliştirmeye nasıl yardımcı olabileceğinizle ilgili yönergeler için lütfen `CONTRIBUTING.md` dosyasına bakın.

## 📄 Lisans

Bu proje **MIT Lisansı** kapsamındadır. Tüm detaylar için `LICENSE` dosyasına bakınız.
