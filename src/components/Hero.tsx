"use client";

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="py-24 text-center w-full text-foreground"
      style={{
        backgroundImage: 'url("https://unsplash.com/photos/sea-waves-crashing-on-shore-during-daytime-9UD_79sR2JQ")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Opaque background
        backdropFilter: 'blur(5px)',
        padding: '5rem',
        borderRadius: '1rem',
      }}
    >
      <h1 className="text-5xl font-bold mb-4" style={{
          fontFamily: 'serif',
          color: '#ADD8E6'
        }}>GetHeard</h1>
      <p className="text-xl italic" style={{
          fontFamily: 'sans-serif',
          fontStyle: 'italic',
          color: 'white'
        }}>
        "Sometimes all we need is someone to listen."
      </p>
    </section>
  );
};

export default Hero;
