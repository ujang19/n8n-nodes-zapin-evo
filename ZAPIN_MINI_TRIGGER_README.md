# ZAPIN Mini Trigger Node

## Deskripsi

ZAPIN Mini Trigger adalah versi sederhana dari ZAPIN Trigger yang hanya fokus pada event `MESSAGES_UPSERT` dari Evolution API. Node ini dirancang untuk use case yang hanya membutuhkan notifikasi pesan masuk tanpa kompleksitas event lainnya.

## Fitur

- **Single Event Focus**: Hanya menangani event `messages.upsert`
- **Lightweight**: Lebih ringan dibanding ZAPIN Trigger lengkap
- **Real-time**: Menerima notifikasi pesan secara real-time
- **Webhook Integration**: Terintegrasi dengan Evolution API webhook

## Event yang Didukung

| Event | Deskripsi |
|-------|----------|
| `messages.upsert` | Pesan baru diterima atau diperbarui |

## Cara Penggunaan

### 1. Setup Webhook di Evolution API

Pastikan webhook sudah dikonfigurasi di Evolution API instance Anda:

```bash
curl -X POST 'https://your-evolution-api.com/webhook/set/instance_name' \
-H 'Content-Type: application/json' \
-H 'apikey: your_api_key' \
-d '{
  "webhook": {
    "url": "https://your-n8n-instance.com/webhook/your-webhook-id",
    "events": ["MESSAGES_UPSERT"]
  }
}'
```

### 2. Konfigurasi di n8n

1. Drag **ZAPIN Mini Trigger** node ke workflow Anda
2. Klik node untuk membuka pengaturan
3. Salin webhook URL yang diberikan
4. Gunakan URL tersebut untuk konfigurasi webhook di Evolution API
5. Aktifkan workflow

### 3. Struktur Data Output

ZAPIN Mini Trigger akan mengeluarkan data dengan struktur:

```json
{
  "event": "messages.upsert",
  "instance": "instance_name",
  "data": {
    "key": {
      "remoteJid": "628123456789@s.whatsapp.net",
      "fromMe": false,
      "id": "message_id"
    },
    "message": {
      "conversation": "Hello World!"
    },
    "messageTimestamp": 1640995200,
    "status": "RECEIVED"
  }
}
```

## Contoh Workflow

```
ZAPIN Mini Trigger → IF Node (filter pesan) → Send Response
```

## Perbedaan dengan ZAPIN Trigger

| Fitur | ZAPIN Trigger | ZAPIN Mini Trigger |
|-------|---------------|--------------------|
| Event yang didukung | 20+ events | 1 event (messages.upsert) |
| Output ports | Multiple | Single |
| Resource usage | Higher | Lower |
| Use case | Comprehensive | Message-focused |

## Tips Penggunaan

1. **Gunakan untuk chat bot sederhana** yang hanya perlu merespons pesan
2. **Ideal untuk auto-reply** atau notifikasi pesan
3. **Kombinasikan dengan IF node** untuk filtering pesan berdasarkan konten
4. **Gunakan ZAPIN Trigger lengkap** jika membutuhkan event lain seperti status online, grup, dll

## Troubleshooting

### Webhook tidak menerima data
1. Pastikan webhook URL sudah benar
2. Cek apakah workflow sudah aktif
3. Verifikasi konfigurasi webhook di Evolution API
4. Pastikan event `MESSAGES_UPSERT` sudah diaktifkan

### Data tidak sesuai format
1. Cek versi Evolution API yang digunakan
2. Pastikan menggunakan format event yang benar
3. Lihat log n8n untuk error details

## Support

Untuk bantuan lebih lanjut, silakan buka issue di repository atau hubungi tim support.
