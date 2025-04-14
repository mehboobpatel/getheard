"use client";

import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 GetHeard. All rights reserved.
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
