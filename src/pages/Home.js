import React from 'react';
import { Link } from 'react-router-dom';
import { CharacterCounter } from '../components/CharactorCounter';

function Home() {
  return (
    <div className="Home">
      <h1>Home page</h1>
      <Link to="/about">Go to About page</Link>
      <CharacterCounter />
    </div>
  )
}

export default Home;
