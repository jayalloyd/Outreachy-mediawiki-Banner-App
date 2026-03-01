Interactive Banner Design 

This project (microtask for T388234 - https://phabricator.wikimedia.org/T388248), developed as part of the Outreachy Application Contribution Period, provides a robust and user-friendly frontend web application for designing interactive banners. Leveraging modern web technologies, this application empowers users to create visually appealing and dynamic banners with ease.

Live Demo: https://jayalloyd.github.io/Outreachy-mediawiki-Banner-App/


https://public-paws.wmcloud.org/User:Jayarani.ys/Custom-Banner.ipynb


🖼️ Screenshots

![banner](https://github.com/user-attachments/assets/13c05313-a6e5-4b6f-b3f6-956bca295633)



## 🔥 Features

- **🖼 Background Options**  
  Upload a custom image or select a solid color as the banner background.

- **✍️ Custom Text & Caption**  
  Edit the banner heading and caption with options to choose font family, font size, and font color.

- **🌗 Dark / Light Mode Toggle**  
  Seamlessly switch between light and dark themes.

- **♻️ Reset Controls**  
  - **Reset All** – Clears all user inputs and customizations  
  - **Reset to Default** – Restores the banner to the original layout and style

- **📥 Download Option**  
  Download the fully customized banner as an image file.

---

## 🧑‍💻 How to Use

### 1. 🎨 Choose Background
- Upload an image **or**
- Select a solid color using the color picker

### 2. ✏️ Edit Banner Content
- Modify the banner **title** and **caption**
- Pick a **font**, set the **font size**, and apply a **text color**

### 3. 🌙 Toggle Theme
- Switch between **dark** and **light** mode using a single toggle

### 4. 🔄 Reset Options
- **Reset All**: Clears all changes made by the user  
- **Reset to Default**: Reverts banner to default layout and settings

### 5. 📥 Download
- Save the current banner design as an image with one click

---

## ⚙️ Available Actions

| Action              | Description                                     |
|---------------------|-------------------------------------------------|
| **Download Banner** | Downloads the customized banner as an image     |
| **Reset All**       | Clears all user inputs and selections           |
| **Reset to Default**| Returns banner to its initial design            |
| **Toggle Mode**     | Switches between dark and light UI themes       |

---

## 🛠 Tech Stack

| Technology   | Role                                             |
|--------------|--------------------------------------------------|
| **React**    | UI library for building dynamic, component-based interfaces |
| **Bootstrap**| CSS framework for responsive, mobile-first layout and styling |
| **Vitest**   | Lightweight, fast test runner for unit testing React components |

---

## 📁 Project Structure

```
/public
  └── vite.svg            # Static assets

/src
  ├── /assets             # Images and media assets
  ├── /components         # Reusable UI components
  │   ├── Banner.jsx
  │   ├── Banner.test.jsx
  │   ├── BannerControls.jsx
  │   └── BannerControls.test.jsx
  ├── /styles             # Global stylesheets (if needed)
  ├── App.jsx             # Main application component
  ├── App.test.jsx        # App test file
  └── main.jsx            # Entry point

/tests
  └── setupTests.js       # Vitest configuration
```

---

## 🌟 Highlights

- **Intuitive Interface** – A clean, visual editing experience using Bootstrap
- **Real-Time Preview** – Instant feedback as you customize your banner
- **Responsive Design** – Fully functional on all screen sizes and devices
- **State Management** – Efficient use of React hooks for a smooth UX
- **Test Coverage** – Core functionality tested with Vitest to ensure reliability



📖 Getting Started

Clone the Repository

git clone https://github.com/jayalloyd/Outreachy-mediawiki-Banner-App
cd Outreachy-mediawiki-Banner-App

Install Dependencies


npm install
Run the App


npm run dev
Open in Browser
Visit http://localhost:5173 to start customizing your banner







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
