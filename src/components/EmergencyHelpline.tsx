"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button";
import {Alert} from "@/components/ui/alert"
import { AlertDescription, AlertTitle } from "@/components/ui/alert"
import {  Warning } from "lucide-react"

const EmergencyHelpline: React.FC = () => {
  const router = useRouter();

  const navigateToHelpline = () => {
    router.push('/helpline');
  };

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
          <Alert variant="destructive">
        {/*<div className="card bg-destructive text-destructive-foreground shadow-md rounded-lg p-6 text-center">*/}
            <Warning className="h-4 w-4" />
          <AlertTitle>
            Emergency: If you or any other person are feeling suicidal or are in immediate crisis - don't use this site.
          </AlertTitle>
          <AlertDescription>
           <Button variant="link" onClick={navigateToHelpline}>
           These resources can provide you with immediate help worldwide.
            </Button>
            </AlertDescription>
        {/*</div>*/}
         </Alert>
      </div>
    </section>
  );
};

export default EmergencyHelpline;
