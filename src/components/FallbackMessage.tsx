import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function FallbackMessage() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white p-8 text-center">
      <AlertTriangle className="text-yellow-500 mb-4" size={48} />
      <h2 className="text-2xl font-bold mb-4">3D Rendering Not Available</h2>
      <p className="max-w-md mb-6">
        Your browser doesn't support WebGL, which is required for the 3D F1 car animation.
        Try using a more modern browser or updating your current one.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
        <a 
          href="https://www.google.com/chrome/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
        >
          Get Chrome
        </a>
        <a 
          href="https://www.mozilla.org/firefox/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-gray-900 py-2 px-4 rounded hover:bg-gray-200 transition-colors"
        >
          Get Firefox
        </a>
      </div>
    </div>
  );
}