import React, { useEffect, useRef } from 'react';
import { useStore } from '../store/animationStore';
import { TrendingUp, Flag, Clock, Award } from 'lucide-react';

export default function ScrollContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { setScrollProgress } = useStore();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 1));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);
  
  return (
    <div ref={contentRef} className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
            Experience F1 Racing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Scroll down to follow the journey of an F1 car as it races through the virtual track.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-lg font-semibold transition-colors">
              Explore F1 Teams
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md text-lg font-semibold transition-colors">
              View Race Calendar
            </button>
          </div>
        </div>
      </section>
      
      <section className="min-h-screen bg-black/70 backdrop-blur-sm p-8 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">The Ultimate Racing Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard 
              icon={<TrendingUp size={36} className="text-red-500" />}
              title="Unmatched Performance"
              description="Modern F1 cars can accelerate from 0 to 100 km/h in about 2.6 seconds and reach top speeds of 360 km/h (224 mph)."
            />
            <FeatureCard 
              icon={<Flag size={36} className="text-red-500" />}
              title="Aerodynamic Design"
              description="Up to 1,600 kg of downforce allows F1 cars to take corners at incredible speeds, keeping the vehicle glued to the track."
            />
            <FeatureCard 
              icon={<Clock size={36} className="text-red-500" />}
              title="Split-Second Decisions"
              description="Drivers make countless decisions within milliseconds while experiencing forces up to 6G in corners."
            />
            <FeatureCard 
              icon={<Award size={36} className="text-red-500" />}
              title="Engineering Excellence"
              description="Each F1 car consists of over 14,000 components that must work in perfect harmony to achieve victory."
            />
          </div>
        </div>
      </section>
      
      <section className="min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Racing Into The Future</h2>
          <p className="text-xl text-gray-300 mb-12">
            Formula 1 continues to push the boundaries of what's possible in motorsport technology, 
            with innovations that eventually make their way into everyday vehicles.
          </p>
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">2025 Season Coming Soon</h3>
            <p className="mb-6">Be the first to experience the next generation of Formula 1 racing.</p>
            <button className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-semibold transition-colors">
              Sign Up For Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-[1.02] transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}