import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About Task Manager</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Task Manager is a simple and intuitive application designed to help you organize your daily tasks and boost your productivity. 
            Built with modern web technologies, it provides a clean and responsive interface that works seamlessly across all your devices.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Features</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
            <li>Add, edit, and delete tasks with ease</li>
            <li>Mark tasks as complete or incomplete</li>
            <li>Search and filter tasks</li>
            <li>Responsive design that works on mobile and desktop</li>
            <li>Data persistence using localStorage</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Technologies Used</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
            <li>React - A JavaScript library for building user interfaces</li>
            <li>React Router - For navigation between pages</li>
            <li>Tailwind CSS - For styling with utility classes</li>
            <li>Heroicons - For beautiful, hand-crafted SVG icons</li>
            <li>Vite - For fast development and building</li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              This application was created as a demonstration of modern web development practices.
              The source code is available on <Link to="https://github.com" className="text-primary-600 hover:text-primary-800">GitHub</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
