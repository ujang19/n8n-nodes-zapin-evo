# ⚡ Zapin EVO — Evolution API Nodes for n8n

> ⚠️ This project is a fork of [n8n-nodes-evolution-api](https://github.com/oriondesign2015/n8n-nodes-evolution-api) by [OrionDesign](https://github.com/oriondesign2015).  
> It integrates with the official [Evolution API v2.2+](https://github.com/EvolutionAPI/evolution-api).
> Translated by https://github.com/ilyasskarroumi/n8n-nodes-evolution-api-eng  |
> Credit to both original authors is fully preserved.

<p align="center">
This community node is a 100% free solution designed to help users easily integrate and maximize the main features of the <b>Evolution API v2.2+</b> within their <b>n8n</b> workflows.  
Originally developed by <b>OrionDesign</b>. This version is adapted by <b>Zapin EVO</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-year%2Fn8n-nodes-evolution-api&query=downloads&style=for-the-badge&label=Total%20Downloads&labelColor=%230d1117&color=%23359514&cacheSeconds=30&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fn8n-nodes-evolution-api" alt="Downloads Badge">
</p>

---

## ⚙️ Requirements

To use this community node, you need:
- **n8n** version **1.54.4** or later
- **Evolution API** version **2.2.0** or later

---

## 📌 Available Features

### 🖥️ Instance
Manage Zapin EVO instances:
- Create, connect, fetch, customize, restart, and delete instances.
- Control presence and proxy, generate QR codes.

<details>
  <summary><b>Operations</b></summary>

- ✅ Create Instance  
- ✅ Generate QR Code  
- ✅ Fetch Instance  
- ✅ Set Behavior  
- ✅ Set Presence  
- ✅ Set Proxy  
- ✅ Get Proxy  
- ✅ Disconnect WhatsApp  
- ✅ Delete Instance  

</details>

---

### ✉️ Message
Manage sending and formatting of all message types supported by Zapin EVO:
- Text, image, video, audio, documents, contacts, buttons, lists, and PIX.

<details>
  <summary><b>Operations</b></summary>

- ✅ Send Text  
- ✅ Send Image  
- ✅ Send Video  
- ✅ Send Audio  
- ✅ Send Document  
- ✅ Send Poll  
- ✅ Send Contact  
- ✅ Send List  
- ✅ Send Button  
- ✅ Send PIX  
- ✅ Send Status  
- ✅ React to Message  

</details>

---

### 👥 Group
Full control over WhatsApp group management:
- Create and configure groups, manage members, links, and temporary messages.

<details>
  <summary><b>Operations</b></summary>

- ✅ Create Group  
- ✅ Update Group Image  
- ✅ Update Group Name  
- ✅ Update Group Description  
- ✅ Update Group Settings  
- ✅ Update Members  
- ✅ Get Group Invite Link  
- ✅ Revoke Group Invite Link  
- ✅ Send Group Invite Link  
- ✅ Find Participants  
- ✅ Set Temporary Messages  
- ✅ Leave Group  
- ✅ Join Group  

</details>

---

### 💬 Chat
Manage conversations, contacts, media, and message status.

<details>
  <summary><b>Operations</b></summary>

- ✅ Verify Number  
- ✅ Mark as Read  
- ✅ Manage Media  
- ✅ Mark as Unread  
- ✅ Delete Message  
- ✅ Get Profile Picture  
- ✅ Get Media (Base64)  
- ✅ Edit Message  
- ✅ Send Presence  
- ✅ Block Contact  
- ✅ Fetch Contacts  
- ✅ Search Messages  
- ✅ Search Status  
- ✅ Search Chats  

</details>

---

### ⚡ Events
Real-time monitoring and integration with:
- Webhooks and RabbitMQ for instant event handling.

<details>
  <summary><b>Operations</b></summary>

- ✅ Webhook  
- ✅ RabbitMQ  

</details>

---

### 🔗 Integration
Seamlessly integrate with third-party platforms:
- Chatwoot, Evolution Bot, Typebot, Flowise, Dify, and more.

<details>
  <summary><b>Operations</b></summary>

- ✅ Chatwoot  
- ✅ Evolution Bot  
- ✅ Typebot  
- ✅ Dify  
- ✅ Flowise  

</details>

---

## 🤝 Contributing

Help the project grow!
- **Pull Requests**: Add new features or fixes.  
- **Issues**: Report bugs or suggest improvements.  
- **Feedback**: Share your ideas and input.  
- **Docs**: Help improve the documentation.

---

## 🌟 Main Contributors

[![](https://contrib.rocks/image?repo=oriondesign2015/n8n-nodes-evolution-api)](https://github.com/oriondesign2015/n8n-nodes-evolution-api/graphs/contributors)

---

<p align="center">
Originally developed with ❤️ by OrionDesign  
<br>
Adapted by Zapin EVO for multi-tenant use on n8n
</p>
