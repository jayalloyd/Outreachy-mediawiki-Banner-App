Interactive Banner Design Frontend

This project (microtask for T388234 - https://phabricator.wikimedia.org/T388248), developed as part of the Outreachy Application Contribution Period, provides a robust and user-friendly frontend web application for designing interactive banners. Leveraging modern web technologies, this application empowers users to create visually appealing and dynamic banners with ease.

Live Demo: https://outreachy-mediawiki-banner-app-pearl.vercel.app/

Key Technologies:

React: A powerful JavaScript library for building dynamic and responsive user interfaces, ensuring a smooth and interactive user experience.

JavaScript (ES6+): The core programming language, driving the application's logic and functionality.

Bootstrap: A widely-used CSS framework, providing a responsive and consistent design system, ensuring cross-device compatibility.

Vitest: A fast and reliable unit testing framework, guaranteeing code quality and application stability.

Core Features:

Intuitive and Interactive User Interface: A visually driven interface that simplifies banner customization, allowing users to effortlessly modify elements like text, images, and colors.

Real-time Preview: Instant feedback on design changes, enabling users to visualize their banners as they are being created.

Responsive Design: Ensures seamless banner creation and viewing across various screen sizes and devices, thanks to Bootstrap's responsive grid system.

Efficient State Management: Utilizes React's state management capabilities for optimal performance and a smooth user experience. 

Comprehensive Unit Testing: Employing Vitest, the application's codebase is thoroughly tested to maintain reliability and prevent regressions.


Getting Started:

To experience the Interactive Banner Design Frontend locally, follow these steps:

Clone the Repository: Bash

git clone [repository_url] (Replace [repository_url] with the actual repository URL.) Install Dependencies: Bash

npm install Start the Development Server: Bash

npm run dev This command will launch the application in your default web browser, allowing you to begin designing interactive banners. Project Structure:

src/: Contains the main application source code.

assets/: Images, icons, and other static assets.
public/: Static files served directly by the browser.

tests/: Unit and integration tests

Dependencies:

react: Core React library for building UI components.

bootstrap: CSS framework for responsive design.

vitest: Unit testing framework.

Scripts:

npm run dev: Starts the development server.
npm run build: Builds the production-ready application.
npm run test: Runs unit tests.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
