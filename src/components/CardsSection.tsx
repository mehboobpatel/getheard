"use client";

import React from 'react';

interface CardData {
  title: string;
  statLine: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    title: "Breakups hurt, deeply.",
    statLine: "📊 Over 50% of romantic relationships end within the first year, and 11% end even after 10+ years.",
    description: "🔹 Studies show heartbreak activates the same part of the brain as physical pain.",
  },
  {
    title: "Burnout is real and rising.",
    statLine: "📊 Nearly 77% of professionals report feeling burnout at some point in their careers (Deloitte 2022).",
    description: "🔹 1 in 3 people leave jobs due to mental health struggles.",
  },
  {
    title: "Even families have friction.",
    statLine: "📊 60% of people say they experience frequent tension with at least one close family member.",
    description: "🔹 Unresolved family stress can double anxiety risks.",
  },
  {
    title: "Feeling alone in a connected world.",
    statLine: "📊 More than 1 in 3 adults feel lonely regularly (CDC 2023).",
    description: "🔹 Chronic loneliness is as harmful as smoking 15 cigarettes a day.",
  },
   {
    title: "Experiencing One-Sided Emotional Investment?",
    statLine: "📊 Approximately 64% of individuals in non-committed or early-stage relationships report experiencing disproportionate emotional involvement.",
    description: "🔹 Unreciprocated emotional investment can lead to cognitive dissonance, lowered self-worth, and prolonged emotional distress.",
  },
  {
    title: "You are more than your failures.",
    statLine: "📊 85% of people say fear of failure holds them back from trying new things.",
    description: "🔹 Rejection activates the same areas of the brain as physical pain.",
  },
  {
    title: "Your thoughts feel louder at 2 AM.",
    statLine: "📊 Over 73% of young adults report excessive overthinking or spiraling thoughts.",
    description: "🔹 Rumination is linked to depression, anxiety, and insomnia.",
  },
  {
    title: "Struggling silently shouldn’t be the norm.",
    statLine: "📊 1 in 4 people globally will experience a mental health issue in their lifetime (WHO).",
    description: "🔹 Yet, over 60% never seek help.",
  },
];

const CardsSection: React.FC = () => {
  return (
    <section className="py-12 bg-background w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{card.statLine}</p>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
