# CV Builder

A modern, responsive CV builder application built with React that provides real-time preview functionality. Create and customize your CV with an intuitive interface and see changes instantly.

## Features

- **Real-time Preview** - See your CV update as you type
- **Section Management** - Organized form sections for easy data entry
- **Component-Based Architecture** - Built with reusable React components

## Tech Stack

- React 18
- Vite (Build tool)
- Tailwind CSS
- JavaScript (ES6+)

## Live Preview 

Site Link :https://cv-application-nine-gamma.vercel.app/


## Project Structure

```
src/
├── components/
│   ├── GeneralInfo.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── ProfileSummary.jsx
│   └── CVPreview.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## How It Works

The application uses React's `useState` hook for state management and follows these principles:

- **State Lifting**: All CV data is managed in the main App component
- **Props Drilling**: Data and setter functions are passed to child components
- **Controlled Components**: Form inputs are controlled by React state
- **Immutable Updates**: State updates use the spread operator for immutability


## Contact

Lokesh - itslokeshx@gmail.com

---

⭐ Found this helpful? Give it a star!