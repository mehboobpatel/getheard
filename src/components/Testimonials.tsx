import React from 'react';

interface Testimonial {
  name: string;
  review: string;
  photo: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'User 1',
    review: 'GetHeard helped me through a tough time. I felt truly heard and supported.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
  {
    name: 'User 2',
    review: 'The support I received was invaluable. I highly recommend GetHeard to anyone in need.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
  {
    name: 'User 3',
    review: 'Finally a platform that truly listens. The support I received was invaluable.',
    photo: 'https://picsum.photos/100/100', // Placeholder image
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-A0E9FF w-full">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <div className="flex justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="text-center w-1/4">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 object-cover mx-auto mb-2"
            />
            <h3 className="text-xl font-medium">{testimonial.name}</h3>
            <p className="text-gray-700">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
