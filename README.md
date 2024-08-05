# Todo List Application

## Description

This is a Todo List application built with React. The application allows users to manage their to-do items with features to add, edit, delete, and toggle the completion status of tasks. It provides an interactive and user-friendly experience with controlled forms, conditional rendering, and styling.

## Features

- **Add Todo**: Create new todo items and add them to the list.
- **Edit Todo**: Edit the text of existing todos.
- **Delete Todo**: Remove todos from the list (delete button is enabled only if the todo is completed).
- **Toggle Completion**: Mark todos as completed or not completed.
- **Controlled Forms**: Input fields are controlled by state to ensure accurate data handling.

## Technologies Used

- React
- React Hooks (`useState`, `useReducer`)
- Conditional Rendering
- Controlled Forms

## Getting Started

To get started with the Todo List application, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
2. **Install Dependencies**

Run the following command to install all required npm packages:
  npm install
3. **Start the Development Server**

Start the React development server by running:
    npm start
This will launch the app in your default web browser at http://localhost:3000.

## Usage
**Add a Todo**

- Enter a description in the input field and click the "Add" button. The new todo will appear at the top of the list.
**Edit a Todo**

- Click the "Edit" button next to a todo item. The todo item will turn into an input field where you can modify the text.
- Click the "Save" button to apply changes or click outside the input to cancel.
**Toggle Todo Completion**

- Click the checkbox next to a todo to mark it as complete or incomplete.
**Delete a Todo**

- Click the "Delete" button next to a todo. The button is only enabled if the todo is marked as complete.
**Components**
- App.jsx: Contains the main state management logic and renders the Main and TodoList components.

- Main.jsx: Provides a form for users to add new todos.

- TodoList.jsx: Renders the list of todos by mapping over the array of todo items and displaying each Todo component.

- Todo.jsx: Displays individual todo items with options to edit, delete, or toggle completion.

