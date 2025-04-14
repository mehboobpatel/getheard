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
import BookingForm from './BookingForm';


const BookCallButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Book a Free Call</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw] xl:max-w-[50vw]">
        <DialogHeader>
          <DialogTitle>Book a Free Call</DialogTitle>
          <DialogDescription>
            Fill in the form to book a free call.
          </DialogDescription>
        </DialogHeader>
        <BookingForm />
      </DialogContent>
    </Dialog>
  );
};

export default BookCallButton;
