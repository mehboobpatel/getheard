"use client";

import React from 'react';

const quotes = [
  "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" - Nelson Mandela",
  "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
  "\"The only way to do great work is to love what you do.\" - Steve Jobs",
  "\"Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open.\" - Pete Walker",
  "\"You don't have to control your thoughts. You just have to stop letting them control you.\" - Dan Millman",
];

const Carousel: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-8 bg-secondary w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Inspirational Quote</h2>
        <p className="text-lg italic">{quotes[currentQuoteIndex]}</p>
      </div>
    </section>
  );
};

export default Carousel;
