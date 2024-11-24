import TodoList from './TodoList';


// TodoList.jsx
import React, { useState } from 'react';

const TodoList = () => {
  // Initial demo todos
  const [todos] = useState([
    { id: 1, text: 'Learn React Testing', completed: false },
    { id: 2, text: 'Write Test Cases', completed: true },
    { id: 3, text: 'Test Component Rendering', completed: false }
  ]);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4" data-testid="todo-header">
        Todo List
      </h2>
      
      <ul className="space-y-2" data-testid="todo-list">
        {todos.map(todo => (
          <li 
            key={todo.id}
            className={`p-3 border rounded ${
              todo.completed ? 'bg-gray-100' : 'bg-white'
            }`}
            data-testid={`todo-item-${todo.id}`}
          >
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <span 
              className={`ml-2 px-2 py-1 text-sm rounded ${
                todo.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}
              data-testid={`todo-status-${todo.id}`}
            >
              {todo.completed ? 'Completed' : 'Pending'}
            </span>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-gray-500 text-center" data-testid="empty-message">
          No todos found
        </p>
      )}
    </div>
  );
};

export default TodoList;

// TodoList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component - Initial Render', () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test('renders the TodoList component with header', () => {
    const header = screen.getByTestId('todo-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Todo List');
  });

  test('renders the initial demo todos', () => {
    const todoList = screen.getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
    
    // Check if all demo todos are rendered
    const todoItems = screen.getAllByTestId(/^todo-item-/);
    expect(todoItems).toHaveLength(3);
  });

  test('renders correct text content for each todo', () => {
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(screen.getByText('Write Test Cases')).toBeInTheDocument();
    expect(screen.getByText('Test Component Rendering')).toBeInTheDocument();
  });

  test('displays correct status for each todo', () => {
    const todoStatuses = screen.getAllByTestId(/^todo-status-/);
    
    // Convert NodeList to array of text content
    const statusTexts = todoStatuses.map(status => status.textContent);
    
    // Verify the correct number of status indicators
    expect(todoStatuses).toHaveLength(3);
    
    // Verify specific status content
    expect(statusTexts).toContain('Pending');
    expect(statusTexts).toContain('Completed');
  });

  test('applies correct styling for completed and pending todos', () => {
    const completedTodo = screen.getByText('Write Test Cases');
    const pendingTodo = screen.getByText('Learn React Testing');
    
    // Check if completed todo has line-through style
    expect(completedTodo).toHaveClass('line-through');
    
    // Check if pending todo doesn't have line-through style
    expect(pendingTodo).not.toHaveClass('line-through');
  });

  test('does not show empty message when todos exist', () => {
    const emptyMessage = screen.queryByTestId('empty-message');
    expect(emptyMessage).not.toBeInTheDocument();
  });
});

// Additional test file for empty state
describe('TodoList Component - Empty State', () => {
  test('shows empty message when no todos exist', () => {
    // Mock the useState to return empty array
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [[], jest.fn()]);
    
    render(<TodoList />);
    
    const emptyMessage = screen.getByTestId('empty-message');
    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('No todos found');
  });
});















/*// Test case
test('renders demo todos', () => {
  render(<TodoList/>);
});

import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Test to check if the counter renders correctly
test('renders Counter component', () => {
    render(<Counter />);
    // Verify component initial render
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    expect(screen.getByText('Increment')).toBeInTheDocument();
    expect(screen.getByText('Decrement')).toBeInTheDocument();
});

// Test to check if the increment button works
test('increments counter', () => {
    render(<Counter />);
    // Simulate click event
    fireEvent.click(screen.getByText('Increment'));
    // Verify if the count is incremented
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

// Test to check if the decrement button works
test('decrements counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment')); // Increment to avoid negative counting scenario
    fireEvent.click(screen.getByText('Decrement'));
    // Verify if the count is decremented
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
});
*/