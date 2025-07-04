# ☁️ SkyCast – Live Weather Web App

SkyCast is a simple and elegant weather application that lets users check real-time weather data for any city in the world. Built using **Node.js**, **Express**, and **OpenWeatherMap API**, this project features a modern frontend and a secure backend to protect the API key.

> 🔗 Live Demo: [https://skycast-pgyg.onrender.com/](https://skycast-pgyg.onrender.com/)
---

## 🌐 Features

- 🌍 Search any city for live weather data
- 🌡 Temperature in Celsius
- 📋 Weather condition and icon
- 💧 Humidity and 🌬 wind speed
- ⏰ Shows local time of the city
- ⚡ Dynamic backend with hidden API key
- 💻 Responsive frontend using HTML/CSS/JS

---

## 🔐 API Security

- Uses a **Node.js Express backend**
- API key stored in a `.env` file (never exposed to frontend)
- Frontend fetches weather data via `/api/weather`

---

## 🚀 How to Run Locally

### 1. Clone this Repository
```bash
git clone https://github.com/saadhaji2007/skycast-weather-app.git
cd skycast-weather-app

2. Install Dependencies
bash
Copy
Edit
npm install

3. Create .env File
env
Copy
Edit
WEATHER_API_KEY=your_openweathermap_api_key

4. Run the Server
bash
Copy
Edit
node server.js
Open your browser and go to:
http://localhost:3000
```
---

📁 Project Structure
```
pgsql
Copy
Edit
weather-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── server.js
├── .env
├── package.json

```

---

🌍 Deployment
You can deploy this app on:

🔷 Render

🔶 Railway

🟩 [Vercel (frontend only + serverless backend)]

---
🧑‍💻 Developer Info
Saad Haji
📧 hajisaad029@gmail.com
🔗 LinkedIn – @saadhaji2007
💻 GitHub: @saadhaji2007

📝 License: [MIT](./LICENSE)
