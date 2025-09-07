# Task Manager

A modern, responsive task management application built with React, React Router, and Tailwind CSS.

## Features

- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Search and filter tasks
- Responsive design for all devices
- Data persistence using localStorage
- Smooth animations and transitions

## Technologies Used

- React 18
- React Router 6
- Tailwind CSS 3
- Heroicons
- Vite
- Vitest (for testing)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Running Tests

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in UI mode
npm run test:ui
```

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Project Structure

```
src/
  ├── components/         # Reusable UI components
  ├── pages/             # Page components
  ├── App.jsx            # Main application component
  ├── main.jsx           # Application entry point
  └── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Screenshots

![Task List](screenshots/task-list.png)

![Add Task](screenshots/add-task.png)

## Live Demo

[View Live Demo](https://your-vercel-app.vercel.app)

---

Built with ❤️ by [Your Name]
