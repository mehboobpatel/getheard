import React from 'react';

interface Founder {
  name: string;
  bio: string;
  photo: string;
}

const foundersData: Founder[] = [
  {
    name: 'Founder 1',
    bio: 'Software Engineer from Mumbai. Passionate about emotional support.',
    photo: 'https://picsum.photos/150/150', // Placeholder image
  },
  {
    name: 'Founder 2',
    bio: 'Software Engineer from Mumbai. Experienced in building supportive communities.',
    photo: 'https://picsum.photos/150/150', // Placeholder image
  },
];

const Founders: React.FC = () => {
  return (
    <section className="py-12 bg-BFFCC6 w-full">
      <h2 className="text-3xl font-semibold text-center mb-8">Who We Are</h2>
      <div className="flex justify-center gap-8">
        {foundersData.map((founder, index) => (
          <div key={index} className="text-center">
            <img
              src={founder.photo}
              alt={founder.name}
              className="rounded-full w-32 h-32 object-cover mx-auto mb-2"
            />
            <h3 className="text-xl font-medium">{founder.name}</h3>
            <p className="text-gray-700">{founder.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
