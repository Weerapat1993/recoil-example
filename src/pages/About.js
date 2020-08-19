import React from 'react';
import { Link } from 'react-router-dom';
import { TodoList } from '../features/todo/TodoList';

function About() {
  return (
    <div className="About">
      <h1>About page</h1>
      <Link to="/">Go to Home page</Link>
      <TodoList />
    </div>
  )
}

export default About;
