# 🎓 GVHS Alumni Portal
> Connecting the past, building the future. A premium, high-tech community hub for the graduates of Golden Valley Higher Secondary School.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Firebase Auth](https://img.shields.io/badge/Auth-Firebase-orange?logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind--CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![ThreeJS](https://img.shields.io/badge/3D--Graphics-ThreeJS-black?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/Animations-GSAP-green?logo=greensock)](https://greensock.com/)
[![AI Assistant](https://img.shields.io/badge/Chatbot-Botpress-blueviolet)](https://botpress.com/)
[![Form Delivery](https://img.shields.io/badge/Forms-EmailJS-blue)](https://www.emailjs.com/)

---

## 🌟 Introduction

Welcome to the **Golden Valley Higher Secondary School (GVHS) Alumni Portal**. This project serves as a dynamic, interactive web-space designed to bring together school graduates from over the years, enabling mentorship, event tracking, and sponsor partnerships.

The portal transitions traditional static pages into an immersive digital journey. It leverages cutting-edge web tools, featuring an interactive **Three.js 3D Sponsor Sphere**, seamless **GSAP scroll-triggered animations**, client-side **Firebase authentication**, and integrated **Botpress AI Conversational Chatbots**.

---

## ⚡ Key Features

- **🔒 Secured Authentication & Persistence:** Client-side registration, credentials sign-in, and **Google Single Sign-On (SSO)** powered by the **Firebase Auth SDK**. Supports configurable browser-local vs. session persistence (`Remember Me`).
- **🎨 3D Interactive WebGL Experience:** A dynamic, floating sponsor sphere in the [Sponsors](sponsors.html) page utilizing **Three.js** and parallax WebGL rendering, backed by **GSAP** for hover scale triggers and automatic marquee loops.
- **💬 AI Conversational Assistant:** Embedded **Botpress webchat agent** active on all pages to answer alumni queries and provide guidance on school history or event navigation.
- **✉️ Serverless Contact Forms:** A zero-backend email messaging pipeline powered by **EmailJS**, routing message queries directly to school email containers on the [Contact](contact.html) page.
- **📅 Interactive Timelines & Events:** Responsive calendar grids displaying past events, ongoing schedules, and registration details.
- **📱 Responsive, Mobile-First Design:** Adapts fluidly across devices from wide 4K screens down to mobile devices, featuring modern overlay menus and responsive CSS layout engines.

---

## 🛠️ Technology Stack

| Layer | Technologies Used | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, ES6 JavaScript | Structural foundations and user experience interactions. |
| **Styling** | Tailwind CSS, FontAwesome 6 | Utility-first styling framework and rich vector icons. |
| **Animations** | GSAP, ScrollTrigger | Smooth scroll animations, custom parallax triggers, and title physics. |
| **3D Graphics** | Three.js WebGL | Render dynamic interactable planes, custom texturing, and raycasted hover picking. |
| **Authentication** | Firebase SDK v10 | Google Sign-In & Email/Password validation. |
| **Backend Helpers** | EmailJS, Botpress SDK | Serverless contact notifications and context-aware conversational chat. |

---

## 📂 Directory Structure

Below is the directory map illustrating key elements of the codebase:

```bash
Alumni-portal/
├── .vscode/               # Workspace configuration files
├── photos alumni/         # Core image asset directory for graduates
├── COMING SOON.png        # Placeholder image for upcoming milestones
├── LICENSE                # MIT License
├── README.md              # [THIS FILE] General project overview
├── ARCHITECTURE.md        # Technical design and integration guidelines
├── UPGRADE_ROADMAP.md     # Multi-phase blueprint to Next.js full-stack
│
│   # --- Dynamic HTML Modules ---
├── index.html             # Main Landing & Portal Entry point
├── about-alumni.html      # Alumni organization details
├── about-us.html          # Portal Core Executive Team details
├── events.html            # Event listing directory
├── schedule.html          # Structural schedule calendar
├── sponsors.html          # Three.js 3D Sponsors sphere and partners
├── gallery.html           # Main media visual hub
├── ongoing-gallery.html   # Active event visual catalog
├── past-gallery.html      # Past events visual catalog
├── contact.html           # Contact form integrated with EmailJS
├── login.html             # Firebase Client Login gateway
├── register.html          # Firebase Client Registration gateway
├── upcoming.html          # Upcoming milestone catalog
│
│   # --- Script & Style Assets ---
├── auth-protect.js        # Helper script for route protection
├── login_style.css        # Specific custom styling for Auth pages
├── upcoming.css           # Styling for upcoming milestone pages
└── settings.json          # Workspace developer configurations
```

---

## 🚀 Getting Started

Since this is a client-side web application leveraging cloud SDKs (Firebase, Botpress, EmailJS), setting up the portal locally takes less than 2 minutes and requires no database setup.

### 📋 Prerequisites

You only need a modern web browser (Google Chrome, Firefox, Safari, or Microsoft Edge) and a text editor (VS Code is highly recommended).

### ⚙️ Step-by-Step Local Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/anubhab-cloud/Alumni-portal.git
   cd Alumni-portal
   ```

2. **Configure Your Credentials (Optional):**
   - For **Firebase Auth** in [login.html](login.html) and [register.html](register.html), replace the placeholder `firebaseConfig` object with your own Firebase Project keys if you wish to run a custom sandbox:
     ```javascript
     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       // ...
     };
     ```
   - For **EmailJS** in [contact.html](contact.html), initialize with your own public key:
     ```javascript
     emailjs.init({ publicKey: "YOUR_EMAILJS_PUBLIC_KEY" });
     ```

3. **Run Locally:**
   - **Method A (VS Code Live Server - Recommended):** Open the directory in VS Code, install the **Live Server** extension, and click **"Go Live"** in the bottom right corner of VS Code to launch the project at `http://127.0.0.1:5500`.
   - **Method B (Local Static Serve):** You can also run a simple local HTTP server using Python or Node:
     - **Python 3:** `python -m http.server 8000` (Access at `http://localhost:8000`)
     - **Node.js (serve):** `npx serve .` (Access at `http://localhost:3000`)

---

## 🛠️ Security and Best Practices

- **Firebase Keys:** The Firebase Configuration parameters in client-side files are public keys used to identify your project on Google. To prevent unauthorized domain access, ensure you authorize only your local development domains (`localhost`, `127.0.0.1`) and your production URL in the **Firebase Console > Authentication > Authorized Domains** setting.
- **Route Protection:** A skeleton for route protection exists in [auth-protect.js](auth-protect.js). In the next upgrade phase, this is slated to be replaced by full server-side middleware checking.

---

## 🗺️ Roadmap & Next Steps

This repository is scheduled to undergo an architectural transition into a state-of-the-art **Next.js Full-Stack App**. Refer to the **[UPGRADE_ROADMAP.md](UPGRADE_ROADMAP.md)** file to view the 5-day modernization plan, which will include:
1. Migration of core layouts into reusable **React + Next.js Server Components**.
2. Complete data migration to **MongoDB** via Prisma/Mongoose for dynamic profiles and event RSVPs.
3. Enhanced styling via **Tailwind CSS + shadcn/ui**.
4. Full role-based dashboard access, Job boards, and an interactive Forum.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## 🤝 Contact & Community

Developed for the **Golden Valley Higher Secondary School (GVHS) Alumni Community**.
- **Location:** Padmapur, Dharmanagar, Tripura, India
- **Phone:** +91 8732016798 / +91 89898-98989
- **Email:** alumnigoldenvalley@gmail.com
- **Facebook:** [GVHS Alumni](https://www.facebook.com/gvhs.alumni/)
- **YouTube:** [@gvhsalumniofficial3726](https://www.youtube.com/@gvhsalumniofficial3726)
