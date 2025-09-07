import { useState, useRef, useEffect } from 'react';
import { CheckIcon, PencilIcon, TrashIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, onToggle, onDelete, onEdit, isEditing, onStartEdit, onCancelEdit }) => {
  const [editValue, setEditValue] = useState(task.title);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Move cursor to the end of the input
      const length = editValue.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [isEditing, editValue.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editValue.trim()) {
      onEdit(task.id, editValue.trim());
    } else {
      setEditValue(task.title);
      onCancelEdit();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setEditValue(task.title);
      onCancelEdit();
    } else if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <li className="px-4 py-4 sm:px-6">
      <div className="flex items-center">
        <div className="min-w-0 flex-1 flex items-center">
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => onToggle(task.id)}
              className={`h-5 w-5 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                task.completed ? 'text-green-500' : 'text-gray-300 hover:text-gray-400'
              }`}
              aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {task.completed ? (
                <CheckCircleIcon className="h-5 w-5" />
              ) : (
                <div className="h-4 w-4 border-2 border-gray-300 rounded-full" />
              )}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="ml-3 flex-1">
              <input
                ref={inputRef}
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleSubmit}
                className="block w-full border-0 border-b-2 border-primary-500 p-0 text-gray-900 focus:ring-0 sm:text-sm"
              />
            </form>
          ) : (
            <div className="ml-3 flex-1 min-w-0">
              <p
                className={`text-sm font-medium ${
                  task.completed ? 'text-gray-400 line-through' : 'text-gray-900'
                }`}
              >
                {task.title}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(task.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          )}
        </div>

        <div className="ml-4 flex-shrink-0 flex space-x-2">
          {!isEditing ? (
            <>
              <button
                type="button"
                onClick={() => {
                  setEditValue(task.title);
                  onStartEdit();
                }}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-full p-1"
                disabled={task.completed}
                title="Edit task"
              >
                <PencilIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => onDelete(task.id)}
                className="text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 rounded-full p-1"
                title="Delete task"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleSubmit}
                className="text-green-500 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-full p-1"
                title="Save changes"
              >
                <CheckIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditValue(task.title);
                  onCancelEdit();
                }}
                className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full p-1"
                title="Cancel editing"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
