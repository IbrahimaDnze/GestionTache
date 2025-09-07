import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
};

global.localStorage = localStorageMock;

// Cleanup after each test
afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
