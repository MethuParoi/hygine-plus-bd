import React from 'react'
import Hero from '../components/home/Hero';
import NewArrival from '../components/home/NewArrival';

const Home = () => {
  return <div className='overflow-x-hidden'>
    <Hero></Hero>
    <NewArrival></NewArrival>
  </div>;
}

export default Home