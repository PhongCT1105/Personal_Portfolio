# Personal Portfolio Website

This repository contains the source code for my personal portfolio website, built using **ReactJS**, **Tailwind CSS**, and **TypeScript**, with **Firebase** integration for data tracking and visualization.

## Features

- **Home Section**: Introduction and navigation to other sections.
- **About Section**: Detailed information about me.
- **Skills Section**: Showcase of my technical and personal skills.
- **Projects Section**: Highlight of my major projects with descriptions and links.
- **Contact Section**: Form and information for reaching out to me.
- **Data Visualization**: Integrated Firebase analytics for tracking website performance and visitor behavior.

## Technologies Used

- **Frontend**:
  - [ReactJS](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
  - [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript for better code maintainability.
- **Backend**:
  - [Firebase](https://firebase.google.com/) - Used for analytics and data visualization.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PhongCT1105/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Deployment

To deploy the project, use any hosting platform compatible with React (e.g., Vercel, Netlify, Firebase Hosting):

1. Build the project:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

2. Deploy the `dist` folder to your hosting platform.

## Firebase Integration

This project uses Firebase to track and visualize data. To configure Firebase:

1. Create a Firebase project on [Firebase Console](https://console.firebase.google.com/).
2. Add your project credentials to the `.env` file:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
3. Import Firebase services in your application as needed.

## Folder Structure

```
|-- src
|   |-- assets        // Static files and images
|   |-- components    // Reusable UI components
|   |-- pages         // Individual sections/pages
|   |-- styles        // Global and component-specific styles
|   |-- utils         // Utility functions and Firebase integration
|-- public            // Public files and favicon
|-- .env.example      // Environment variable template
|-- vite.config.ts    // Vite configuration
|-- package.json      // Project dependencies and scripts
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes and push them to your branch.
4. Open a pull request explaining your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Contact

Feel free to reach out if you have any questions or suggestions:

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **GitHub**: [PhongCT1105](https://github.com/PhongCT1105)
