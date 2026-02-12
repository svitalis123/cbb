'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-lg border-gray-700">
        <CardContent className="p-8">
          {/* Animated 404 Text */}
          <div className="relative h-32 mb-8">
            <h1 className="absolute inset-0 text-[120px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 text-[120px] font-bold text-center text-gray-800 blur-2xl animate-pulse">
              404
            </div>
          </div>

          {/* Main Message */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Oops! Page Not Found
            </h2>
            
            <p className="text-gray-300 max-w-md mx-auto">
              The page you&apos;re looking for seems to have wandered off into the digital wilderness.
              Don&apos;t worry though - we&apos;re here to help you find your way back!
            </p>

            {/* Suggestions Section */}
            <div className="bg-gray-900/50 rounded-lg p-6 mt-8">
              <h3 className="text-white font-medium mb-4">Here&apos;s what you can do:</h3>
              <ul className="text-gray-300 text-left space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 text-purple-400" />
                  Go back to the previous page
                </li>
                <li className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-purple-400" />
                  Return to our homepage
                </li>
                <li className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-purple-400" />
                  Try searching for what you need
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                variant="secondary"
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
              
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400/10"
                onClick={() => window.location.href = '/'}
              >
                <Home className="mr-2 h-4 w-4" />
                Homepage
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;