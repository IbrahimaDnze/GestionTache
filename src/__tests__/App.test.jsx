import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// Mock localStorage
const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('App', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it('renders the task manager with no tasks', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText('My Tasks')).toBeInTheDocument();
    expect(screen.getByText('0 tasks total • 0 completed')).toBeInTheDocument();
    expect(screen.getByText('No tasks')).toBeInTheDocument();
  });

  it('adds a new task', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Click add task button
    const addButton = screen.getByRole('button', { name: /add task/i });
    fireEvent.click(addButton);

    // Fill in the task title
    const input = screen.getByPlaceholderText('Enter task title...');
    fireEvent.change(input, { target: { value: 'New Test Task' } });

    // Submit the form
    const submitButton = screen.getByRole('button', { name: /add task/i });
    fireEvent.click(submitButton);

    // Check if task was added
    await waitFor(() => {
      expect(screen.getByText('New Test Task')).toBeInTheDocument();
      expect(screen.getByText('1 task total • 0 completed')).toBeInTheDocument();
    });
  });

  it('toggles task completion', async () => {
    // Add a task first
    const task = {
      id: '1',
      title: 'Test Task',
      completed: false,
      createdAt: new Date().toISOString(),
    };
    window.localStorage.setItem('tasks', JSON.stringify([task]));

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Toggle the task completion
    const toggleButton = screen.getByRole('button', { name: /mark as complete/i });
    fireEvent.click(toggleButton);

    // Check if task was toggled
    await waitFor(() => {
      expect(screen.getByText('1 task total • 1 completed')).toBeInTheDocument();
    });
  });
});
