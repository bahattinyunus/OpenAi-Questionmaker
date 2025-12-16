# Güvenlik Politikası

## Desteklenen Sürümler

Şu anda sadece en son kararlı sürümü güvenlik güncellemeleri için destekliyoruz.

| Versiyon | Destek Durumu |
| -------- | ------------- |
| 1.0.x    | ✅ Destekleniyor |
| < 1.0    | ❌ Desteklenmiyor |

## Güvenlik Açığı Bildirimi

Bir güvenlik açığı fark ederseniz:

1. Lütfen GitHub Issues kısmından herkese açık bir kayıt oluşturmayın.
2. Açığı detaylarıyla birlikte şu adrese e-posta gönderin: `security@example.com` (veya proje sahibinin e-postası).
3. Bildiriminiz alındıktan sonra 48 saat içinde size dönüş yapacağız.

## Hassas Veriler

- **API Anahtarları**: OpenAI API anahtarlarınızı asla repoya `commit` etmeyin. `.env` dosyalarını kullanın.
- **Veritabanı Şifreleri**: Üretim ortamında güçlü şifreler kullanın ve bunları çevre değişkenlerinde saklayın.

Projeyi güvende tutmamıza yardımcı olduğunuz için teşekkür ederiz!
