"use client";

import Hero from '@/components/Hero';
import Founders from '@/components/Founders';
import Testimonials from '@/components/Testimonials';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import CardsSection from '@/components/CardsSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground">
      <Hero />
      <CardsSection />
      <Carousel />
      <Founders />
      <Testimonials />
      <Footer />
    </main>
  );
}
