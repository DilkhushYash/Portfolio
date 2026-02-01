# 3D Developer Portfolio (React + Tailwind CSS)

A modern, responsive, and high-performance developer portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.  
It features a premium "Dark Mode" aesthetic with glassmorphism effects, smooth animations, and a clean user experience.

![Portfolio Preview](./src/assets/profile.jpg) 
*(Note: Replace the above link with an actual screenshot of your hero section if available)*

## 🚀 Features

-   **Premium UI/UX:** Dark theme with "Electric Violet" accents and glassmorphism cards.
-   **Responsive Design:** Fully optimized for Desktop, Tablet, and Mobile screens.
-   **Smooth Animations:** Powered by `framer-motion` for scroll reveals and `react-parallax-tilt` for interactive cards.
-   **Dynamic Content:** All personal data (Profile, Education, Skills, Projects, Research) is centralized in a single file for easy updates.
-   **Performance Optimized:** Built with **Vite** for blazing fast development and production builds. React-only architecture ensures a lightweight bundle.

## 🛠️ Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/) (v19)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3) + PostCSS
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Interactivity:** [React Parallax Tilt](https://www.npmjs.com/package/react-parallax-tilt)
-   **Build Tool:** [Vite](https://vitejs.dev/)

## 📂 Project Structure

```bash
src/
├── assets/          # Images (profile.jpg, icons, etc.)
├── components/      # UI Components (Hero, About, Education, etc.)
├── data/            # Centralized data file (constants.js)
├── canvas/          # (Legacy) Removed in favor of 2D CSS animations
├── App.jsx          # Main application layout
├── index.css        # Global styles & Tailwind directives
└── main.jsx         # Entry point
```

## ⚡ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-portfolio.git
    cd your-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder, ready for deployment.

## 📝 Customization

You can easily update the portfolio content without touching the component code.

1.  Open **`src/data/constants.js`**.
2.  Update the objects for `PROFILE`, `SKILLS`, `PROJECTS`, `EDUCATION`, and `RESEARCH`.

**Example:**
```javascript
export const PROFILE = {
    name: "Your Name",
    role: "Your Role",
    bio: "Your short bio...",
    // ...
};
```

## 🎨 Theme Configuration

To change the primary colors or fonts, modify:
-   **`tailwind.config.js`**: For color palette extensions.
-   **`src/index.css`**: For global CSS variables and glassmorphism utilities.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
