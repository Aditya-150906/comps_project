import React from 'react';
import Hero from '../components/Hero';
import CycleGrid from '../components/CycleGrid';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <CycleGrid />
    </div>
  );
};

export default Home;
