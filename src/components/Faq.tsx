"use client";

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

const Faq: React.FC = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is GetHeard?</AccordionTrigger>
        <AccordionContent>
          GetHeard is a platform designed to provide emotional support through peer-to-peer conversations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Who’s it for, is GetHeard for me?</AccordionTrigger>
        <AccordionContent>
          GetHeard is for anyone who needs someone to listen without judgment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What GetHeardis not:</AccordionTrigger>
        <AccordionContent>
          GetHeard is not a replacement for professional therapy or counseling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>When should I choose therapy over peer support?</AccordionTrigger>
        <AccordionContent>
          If you’re experiencing a mental health crisis, or have been diagnosed with a mental health condition.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Do you also provide therapy?</AccordionTrigger>
        <AccordionContent>
          No, we currently only offer peer support.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Can I become a listener?</AccordionTrigger>
        <AccordionContent>
          Yes, we are always looking for empathetic individuals to join our team of listeners.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>I would like to donate to GetHeard. How can I do that?</AccordionTrigger>
        <AccordionContent>
          Thank you for your generosity! You can donate through our website.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
