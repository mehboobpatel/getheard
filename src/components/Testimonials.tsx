
"use client";

import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  review: string;
  photo: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'User 1',
    review: 'GetHeard helped me through a tough time. I felt truly heard and supported. I was able to express my feelings without judgment, and the advice I received was invaluable. I am grateful for the platform and the compassionate individuals who make it possible.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
  {
    name: 'User 2',
    review: 'The support I received was invaluable. I highly recommend GetHeard to anyone in need. The peer supporters are empathetic and understanding, and they create a safe space for sharing personal struggles. Thanks to GetHeard, I feel more resilient and equipped to face life\'s challenges.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
  {
    name: 'User 3',
    review: 'Finally a platform that truly listens. The support I received was invaluable. I was able to connect with someone who understood what I was going through, and their support made a significant difference in my life. I am thankful for GetHeard and the positive impact it has had on my well-being.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
  {
    name: 'User 4',
    review: 'I was hesitant to reach out for help, but GetHeard made it easy to connect with a supportive peer. The conversations were confidential and non-judgmental, and I felt comfortable sharing my thoughts and feelings. GetHeard has been a lifeline for me, and I highly recommend it to anyone seeking emotional support.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
];

const Testimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <section className="py-12 w-full">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <div className="flex justify-center items-center gap-8">
        <img
          src={currentTestimonial.photo}
          alt={currentTestimonial.name}
          className="rounded-full w-24 h-24 object-cover"
        />
        <div className="w-1/3">
          <h3 className="text-xl font-medium">{currentTestimonial.name}</h3>
          <p className="text-gray-700">{currentTestimonial.review}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
