
import React from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const FloatingElement = ({ className }) => (
  <div 
    className={cn(
      "absolute w-16 h-16 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-50 blur-sm",
      className
    )}
  />
);

const LoadingScreen = () => {
  return (
    <Card className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Floating Elements */}
      <FloatingElement className="top-[20%] left-[20%] animate-[float_8s_infinite_alternate] motion-safe:animate-float" />
      <FloatingElement className="top-[60%] left-[70%] animate-[float_12s_infinite_alternate-reverse]" />
      <FloatingElement className="top-[30%] left-[60%] animate-[float_10s_infinite_alternate]" />
      <FloatingElement className="top-[70%] left-[30%] animate-[float_9s_infinite_alternate-reverse]" />

      {/* Main Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 
          className="text-white text-4xl font-bold tracking-widest opacity-0 animate-[fadeInOut_3s_infinite]"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell" }}
        >
          HR BOX AFRICA
        </h1>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-52 h-0.5 bg-white/10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-[progress_2s_ease-in-out_infinite]" />
      </div>

    
    </Card>
  );
};

export default LoadingScreen;