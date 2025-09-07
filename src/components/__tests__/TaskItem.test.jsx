import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: '1',
    title: 'Test Task',
    completed: false,
    createdAt: new Date().toISOString(),
  };

  it('renders task title and date', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
        onEdit={jest.fn()}
        isEditing={false}
        onStartEdit={jest.fn()}
        onCancelEdit={jest.fn()}
      />
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText(new Date(mockTask.createdAt).toLocaleDateString())).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const mockToggle = jest.fn();
    render(
      <TaskItem
        task={mockTask}
        onToggle={mockToggle}
        onDelete={jest.fn()}
        onEdit={jest.fn()}
        isEditing={false}
        onStartEdit={jest.fn()}
        onCancelEdit={jest.fn()}
      />
    );

    const checkbox = screen.getByRole('button', { name: /mark as complete/i });
    fireEvent.click(checkbox);
    expect(mockToggle).toHaveBeenCalledWith('1');
  });

  it('shows edit form when isEditing is true', () => {
    render(
      <TaskItem
        task={mockTask}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
        onEdit={jest.fn()}
        isEditing={true}
        onStartEdit={jest.fn()}
        onCancelEdit={jest.fn()}
      />
    );

    expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel editing/i })).toBeInTheDocument();
  });
});
