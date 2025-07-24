# Evolution API Trigger Node

## Overview

Evolution API Trigger adalah node khusus untuk n8n yang memungkinkan Anda menerima event real-time dari Evolution API melalui webhook. Node ini menggunakan pola multiple output, di mana setiap event Evolution API memiliki output port yang terpisah.

## Features

- **Multiple Output Ports**: Setiap event memiliki output port terpisah untuk routing yang lebih mudah
- **Real-time Events**: Menerima event secara real-time dari Evolution API
- **Event Filtering**: Hanya event yang didukung yang akan diproses
- **Easy Integration**: Mudah diintegrasikan dengan workflow n8n yang sudah ada

## Supported Events

Trigger ini mendukung semua event Evolution API kecuali event Typebot:

- `application.startup` - Notifikasi saat aplikasi dimulai
- `qrcode.updated` - Mengirim QR code dalam format base64 untuk scanning
- `connection.update` - Informasi status koneksi WhatsApp
- `messages.set` - Mengirim daftar semua pesan yang dimuat di WhatsApp (hanya sekali)
- `messages.upsert` - Notifikasi saat pesan diterima
- `messages.update` - Informasi saat pesan diperbarui
- `messages.delete` - Informasi saat pesan dihapus
- `send.message` - Notifikasi saat pesan dikirim
- `contacts.set` - Memuat awal semua kontak (hanya sekali)
- `contacts.upsert` - Memuat ulang semua kontak dengan informasi tambahan (hanya sekali)
- `contacts.update` - Informasi saat kontak diperbarui
- `presence.update` - Informasi status online, aktivitas, dan terakhir dilihat
- `chats.set` - Mengirim daftar semua chat yang dimuat
- `chats.update` - Informasi saat chat diperbarui
- `chats.upsert` - Mengirim informasi chat baru
- `chats.delete` - Notifikasi saat chat dihapus
- `groups.upsert` - Notifikasi saat grup dibuat
- `groups.update` - Notifikasi saat informasi grup diperbarui
- `group.participants.update` - Notifikasi saat terjadi aksi pada peserta grup
- `new.token` - Notifikasi saat token (jwt) diperbarui

### Excluded Events

Event berikut tidak didukung oleh trigger ini:
- `TYPEBOT_START` - Event khusus Typebot
- `TYPEBOT_CHANGE_STATUS` - Event khusus Typebot

## Setup Instructions

### 1. Konfigurasi Webhook di Evolution API

Untuk menggunakan trigger ini, Anda perlu mengkonfigurasi webhook di Evolution API instance Anda:

```bash
POST /webhook/instance
{
  "url": "https://your-n8n-instance.com/webhook/evolution",
  "webhook_by_events": false,
  "webhook_base64": false,
  "events": [
    "QRCODE_UPDATED",
    "MESSAGES_UPSERT",
    "MESSAGES_UPDATE",
    "MESSAGES_DELETE",
    "SEND_MESSAGE",
    "CONNECTION_UPDATE",
    "TYPEBOT_START",
    "TYPEBOT_CHANGE_STATUS"
  ]
}
```

### 2. Menggunakan Node di n8n

1. Drag **Evolution API Trigger** node ke workflow Anda
2. Copy **Webhook URL** yang ditampilkan di node
3. Konfigurasi Evolution API instance untuk mengirim event ke URL tersebut
4. Connect output ports sesuai dengan event yang ingin Anda handle

### 3. Workflow Example

```
Evolution API Trigger
├── MESSAGES_UPSERT → Process New Messages
├── CONNECTION_UPDATE → Handle Connection Status
├── QRCODE_UPDATED → Send QR Code to User
└── GROUPS_UPSERT → Log New Groups
```

## Event Data Structure

Setiap event akan mengirimkan data dalam format JSON yang sesuai dengan dokumentasi Evolution API. Contoh:

```json
{
  "event": "MESSAGES_UPSERT",
  "instance": "instance_name",
  "data": {
    "key": {
      "remoteJid": "5511999999999@s.whatsapp.net",
      "fromMe": false,
      "id": "message_id"
    },
    "message": {
      "conversation": "Hello World!"
    },
    "messageTimestamp": 1640995200
  }
}
```

## Troubleshooting

### Node tidak menerima events
1. Pastikan webhook URL sudah dikonfigurasi dengan benar di Evolution API
2. Periksa apakah Evolution API instance berjalan dan terhubung
3. Pastikan event yang diinginkan sudah ditambahkan dalam konfigurasi webhook

### Event tidak muncul di output yang benar
1. Periksa nama event di payload yang diterima
2. Pastikan event tersebut ada dalam daftar supported events

## Advanced Usage

### Webhook by Events

Jika Anda mengaktifkan `webhook_by_events: true` di Evolution API, setiap event akan dikirim ke URL yang berbeda:

- `https://your-n8n-instance.com/webhook/evolution/messages-upsert`
- `https://your-n8n-instance.com/webhook/evolution/connection-update`
- dll.

Dalam kasus ini, Anda mungkin perlu membuat multiple trigger nodes atau menggunakan konfigurasi webhook yang berbeda.

## References

- [Evolution API Webhook Documentation](https://doc.evolution-api.com/v2/en/configuration/webhooks)
- [n8n Webhook Documentation](https://docs.n8n.io/integrations/creating-nodes/)