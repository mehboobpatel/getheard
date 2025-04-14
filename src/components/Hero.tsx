"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="py-24 text-center w-full text-foreground"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/random/1920x1080/?ocean,sunset,person")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(5px)',
        padding: '5rem',
        borderRadius: '1rem',
      }}
    >
      <h1 className="text-5xl font-bold mb-4">GetHeard</h1>
      <p className="text-xl">Sometimes all we need is someone to listen.</p>
    </section>
  );
};

export default Hero;
