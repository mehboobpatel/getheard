"use client";

import Hero from '@/components/Hero';
import Founders from '@/components/Founders';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground">
      <Hero />
      <Founders />
      <Testimonials />
    </main>
  );
}
