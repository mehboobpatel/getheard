"use client";

import React from 'react';

const HelplinePage: React.FC = () => {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Helpline Resources - India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">AASRA</h3>
            <p>24x7 Helpline: +91-9820466726</p>
            <p>Description: Provides support to individuals in distress and those at risk of suicide.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Vandrevala Foundation for Mental Health</h3>
            <p>Helpline: 1860-2662-345 / 1800-2333-330</p>
            <p>Description: Offers counseling and support for individuals with mental health concerns.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">iCALL</h3>
            <p>Helpline: +91-22-25521111 (Monday to Saturday, 8 AM to 10 PM)</p>
            <p>Description: A telephone helpline providing psychosocial support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sneha India Foundation</h3>
            <p>Helpline: +91-44-24640050</p>
            <p>Description: Suicide prevention helpline.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelplinePage;
