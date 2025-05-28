# Medical Patient Intake Forms (Adults & Children)

This project is a web-based form system built for a doctor to collect and manage patient data efficiently using Google Sheets. It includes two tailored forms — one for **adult patients** and one for **children** — with fields adapted to their respective demographics and medical requirements.

## 🧾 Project Overview

- 💡 Goal: To digitize the patient intake process and securely store form submissions into a structured **Google Sheets table**.
- 📄 Forms: Two responsive HTML forms:
  - `Fiche Vertige Adultes`
  - `Fiche Vertige Enfants`
- ☁️ Backend: Google Apps Script to automatically forward form data to a Google Sheet.
- 🌐 Hosting: Deployed on [Vercel](https://vercel.com/) for reliable and fast access.
- 🔐 Privacy: Sensitive endpoints are protected using Vercel's serverless functions to proxy requests securely.

## 🔧 Technologies Used

| Technology       | Purpose                          |
|------------------|----------------------------------|
| HTML/CSS         | Form UI and styling              |
| JavaScript       | Dynamic behavior (e.g., conditional fields) |
| Google Apps Script | Backend to store form data into Google Sheets |
| Vercel           | Hosting and deployment           |


## 📥 Features

- 📋 Clean and user-friendly input forms
- 📊 Data automatically saved to Google Sheets in table format
- ✅ Input validation (age ranges, phone number formats, etc.)
- 🧠 Smart inputs: Conditional logic for showing related fields (e.g., diabetes duration)
- 🔒 Backend abstraction to protect sensitive data submission URLs

## 🔄 How It Works

1. User fills out the adult or child form.
2. On submit, the data is sent to a **serverless function** on Vercel.
3. The function forwards the request to a **Google Apps Script Web App**.
4. Data is inserted in real time into a **Google Sheet**, structured as a table.

## 📌 Live Demo

👉 https://fiche-vertige-1z7axkl7z-ghassensws-projects.vercel.app/

## 📸 Screenshots

You can include screenshots like:
- Full-page form preview
- Dynamic inputs in action
- Example Google Sheet view

## 🚀 Deployment

To deploy your own version:

1. Clone the repo.
2. Replace the `action` URL or configure Vercel serverless proxy.
3. Deploy to [Vercel](https://vercel.com/).
4. Set environment variables if needed.

## 🛡️ Security Notes

- All form submissions are securely routed through a backend function to protect sensitive endpoints.
- Ensure no patient-identifiable data is publicly accessible or stored without proper authorization.

## 📄 License

This project is for demonstration and private client use. Not intended for commercial redistribution. Please contact the author if you plan to adapt it for other medical applications.

---

## 👨‍⚕️ Author

Built with care for clinical usability by [Your Name].

