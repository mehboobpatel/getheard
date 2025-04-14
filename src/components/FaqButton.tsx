"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Faq from './Faq'; // Import the Faq component

const FaqButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" style={{ marginRight: '10px' }}>FAQ</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Frequently Asked Questions</DialogTitle>
          <DialogDescription>
            Find answers to common questions about GetHeard.
          </DialogDescription>
        </DialogHeader>
        <Faq />
      </DialogContent>
    </Dialog>
  );
};

export default FaqButton;
