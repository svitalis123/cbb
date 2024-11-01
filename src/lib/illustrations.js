// illustrations.jsx
import React from 'react';

export const CoreHRIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#EBF5FF" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2" rx="10" />
    <g transform="translate(190, 140)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 40})`}>
          <rect width="220" height="30" fill="#FFFFFF" rx="5" />
          <circle cx="15" cy="15" r="10" fill="#BFDBFE" />
          <rect x="35" y="10" width="140" height="10" fill="#E5E7EB" rx="2" />
        </g>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="#93C5FD" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#93C5FD" opacity="0.3" />
  </svg>
);

export const PayrollIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#F0FDF4" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2" rx="10" />
    <g transform="translate(190, 140)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 40})`}>
          <rect width="220" height="30" fill="#FFFFFF" rx="5" />
          <text x="15" y="20" fill="#22C55E" fontSize="16">$</text>
          <rect x="35" y="10" width={140 - i * 20} height="10" fill="#DCF5E3" rx="2" />
        </g>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="#86EFAC" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#86EFAC" opacity="0.3" />
  </svg>
);

export const ATSIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#F0F9FF" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#0EA5E9" strokeWidth="2" rx="10" />
    <g transform="translate(190, 140)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 40})`}>
          <rect width="220" height="30" fill="#FFFFFF" rx="5" />
          <circle cx="15" cy="15" r="10" fill="#BAE6FD" />
          <rect x="35" y="10" width="140" height="10" fill="#E0F2FE" rx="2" />
        </g>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="#7DD3FC" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#7DD3FC" opacity="0.3" />
  </svg>
);

export const TimeAttendanceIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#F5F3FF" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" rx="10" />
    <g transform="translate(190, 140)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 40})`}>
          <rect width="220" height="30" fill="#FFFFFF" rx="5" />
          <circle cx="15" cy="15" r="10" fill="#DDD6FE" />
          <rect x="35" y="10" width="140" height="10" fill="#EDE9FE" rx="2" />
        </g>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="#A78BFA" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#A78BFA" opacity="0.3" />
  </svg>
);

export const PerformanceIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#ECFDF5" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" rx="10" />
    <g transform="translate(190, 140)">
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(0, ${i * 40})`}>
          <rect width="220" height="30" fill="#FFFFFF" rx="5" />
          <circle cx="15" cy="15" r="10" fill="#A7F3D0" />
          <rect x="35" y="10" width="140" height="10" fill="#D1FAE5" rx="2" />
        </g>
      ))}
    </g>
    <circle cx="100" cy="80" r="30" fill="#6EE7B7" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#6EE7B7" opacity="0.3" />
  </svg>
);

export const TimeOffIllustration = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <rect x="0" y="0" width="600" height="400" fill="#FDF2F8" rx="20" />
    <rect x="150" y="100" width="300" height="200" fill="#FFFFFF" stroke="#EC4899" strokeWidth="2" rx="10" />
    
    {/* Calendar Grid */}
    <g transform="translate(190, 140)">
      {/* Calendar Header */}
      <rect width="220" height="30" fill="#FBCFE8" rx="5" />
      <text x="110" y="20" fill="#BE185D" fontSize="14" textAnchor="middle">JULY 2024</text>
      
      {/* Calendar Days */}
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0, ${row * 40 + 40})`}>
          {[0, 1, 2, 3, 4].map((col) => (
            <g key={`${row}-${col}`} transform={`translate(${col * 44}, 0)`}>
              <rect width="40" height="35" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="1" rx="4" />
              <text 
                x="20" 
                y="20" 
                fill="#831843" 
                fontSize="12" 
                textAnchor="middle"
              >
                {row * 5 + col + 1}
              </text>
            </g>
          ))}
        </g>
      ))}
    </g>
    
    {/* Decorative Elements */}
    <circle cx="100" cy="80" r="30" fill="#F9A8D4" opacity="0.5" />
    <circle cx="500" cy="320" r="40" fill="#F9A8D4" opacity="0.3" />
  </svg>
);