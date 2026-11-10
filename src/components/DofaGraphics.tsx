import React from 'react';

// Comfama signature logo reproduction using precise SVG typography & delta glyphs
export const ComfamaLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => {
  return (
    <svg viewBox="0 0 170 36" fill="currentColor" className={className} aria-label="Comfama Logo">
      {/* c */}
      <path d="M19 19c0-6-4-10-10-10S0 13 0 19s4 10 10 10c4 0 7.5-2 9-5.5h-5C13 25 11.5 25.5 9 25.5c-3.5 0-6-2.5-6-6.5s2.5-6.5 6-6.5c2.5 0 4 1 5 2.5h5z" />
      {/* o */}
      <path d="M41 19c0-6-4.5-10-10.5-10S20 13 20 19s4.5 10 10.5 10S41 25 41 19zm-16 0c0-4 2.5-6.5 5.5-6.5s5.5 2.5 5.5 6.5-2.5 6.5-5.5 6.5-5.5-2.5-5.5-6.5z" />
      {/* m */}
      <path d="M43 9.5h4.5v2.8c1.5-2 3.8-3.3 6.5-3.3 2.8 0 5 1.2 6.2 3.2 1.5-2 3.8-3.2 6.5-3.2 4.2 0 7.3 2.8 7.3 7.5V28.5H69.5V17c0-2.8-1.5-4.2-3.8-4.2-2.2 0-4.2 1.5-4.2 4.2v11.5H57V17c0-2.8-1.5-4.2-3.8-4.2-2.2 0-4.2 1.5-4.2 4.2v11.5H43V9.5z" />
      {/* f */}
      <path d="M82.5 9.5H86V6c0-4 2.5-6 6.5-6 2 0 3.8.5 4.8 1.2l-1.2 3.5c-.8-.5-1.8-.7-2.6-.7-1.8 0-2.5.8-2.5 2.5v3h5.5v3.5H91V28.5H86.5V13h-4V9.5z" />
      {/* Characteristic delta / triangle 'A' */}
      <polygon points="108,28.5 116,9.5 124,28.5" fill="currentColor" />
      <polygon points="116,14.5 111.5,25.5 120.5,25.5" fill="#ffffff" />
      {/* m */}
      <path d="M127 9.5h4.5v2.8c1.5-2 3.8-3.3 6.5-3.3 2.8 0 5 1.2 6.2 3.2 1.5-2 3.8-3.2 6.5-3.2 4.2 0 7.3 2.8 7.3 7.5V28.5h-4.5V17c0-2.8-1.5-4.2-3.8-4.2-2.2 0-4.2 1.5-4.2 4.2v11.5H141V17c0-2.8-1.5-4.2-3.8-4.2-2.2 0-4.2 1.5-4.2 4.2v11.5H127V9.5z" />
      {/* Characteristic delta / triangle 'A' */}
      <polygon points="156,28.5 164,9.5 172,28.5" fill="currentColor" />
      <polygon points="164,14.5 159.5,25.5 168.5,25.5" fill="#ffffff" />
    </svg>
  );
};

// Top-left cyan artistic splash texture
export const TopLeftBrush: React.FC<{ className?: string }> = ({ className = 'w-48 h-32' }) => {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cyanBrushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00b4d8" />
          <stop offset="60%" stopColor="#0096c7" />
          <stop offset="100%" stopColor="#0077b6" />
        </linearGradient>
      </defs>
      <path
        d="M-20 -20 C 40 -10, 80 15, 120 10 C 160 5, 190 -10, 210 -20 C 220 20, 180 50, 140 65 C 100 80, 50 70, -20 90 Z"
        fill="url(#cyanBrushGrad)"
        opacity="0.9"
      />
      <path
        d="M-10 10 C 30 35, 90 40, 145 35 C 120 60, 70 85, 10 95 C -15 98, -25 70, -10 10 Z"
        fill="#00c0db"
        opacity="0.75"
      />
      {/* Dry brush bristle strokes */}
      <path d="M-5 -10 L195 2" stroke="#009db3" strokeWidth="3" strokeDasharray="18 8 12 5" strokeLinecap="round" opacity="0.8" />
      <path d="M-10 8 L170 32" stroke="#48cae4" strokeWidth="4" strokeDasharray="25 6 15 4" strokeLinecap="round" opacity="0.9" />
      <path d="M-5 25 L135 60" stroke="#009db3" strokeWidth="3.5" strokeDasharray="30 10 12 6" strokeLinecap="round" opacity="0.85" />
      <path d="M-15 42 L110 75" stroke="#0077b6" strokeWidth="2.5" strokeDasharray="20 8" strokeLinecap="round" opacity="0.7" />
      <path d="M-10 60 L80 90" stroke="#48cae4" strokeWidth="3" strokeDasharray="15 6 8 3" strokeLinecap="round" opacity="0.6" />
      {/* Paint splatter droplets */}
      <circle cx="155" cy="45" r="2.5" fill="#00b4d8" />
      <circle cx="180" cy="22" r="3" fill="#0096c7" />
      <circle cx="125" cy="80" r="2" fill="#0077b6" />
      <circle cx="95" cy="100" r="3.5" fill="#00b4d8" />
      <circle cx="65" cy="115" r="2" fill="#009db3" />
      <circle cx="215" cy="8" r="1.8" fill="#48cae4" />
    </svg>
  );
};

// Top-right magenta artistic splash texture
export const TopRightBrush: React.FC<{ className?: string }> = ({ className = 'w-48 h-32' }) => {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pinkBrushGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e60067" />
          <stop offset="60%" stopColor="#d80064" />
          <stop offset="100%" stopColor="#b50053" />
        </linearGradient>
      </defs>
      <path
        d="M260 -20 C 200 -10, 160 15, 120 10 C 80 5, 50 -10, 30 -20 C 20 20, 60 50, 100 65 C 140 80, 190 70, 260 90 Z"
        fill="url(#pinkBrushGrad)"
        opacity="0.9"
      />
      <path
        d="M250 10 C 210 35, 150 40, 95 35 C 120 60, 170 85, 230 95 C 255 98, 265 70, 250 10 Z"
        fill="#ff1493"
        opacity="0.75"
      />
      {/* Bristle strokes */}
      <path d="M245 -10 L45 2" stroke="#d80064" strokeWidth="3" strokeDasharray="18 8 12 5" strokeLinecap="round" opacity="0.8" />
      <path d="M250 8 L70 32" stroke="#ff4d94" strokeWidth="4" strokeDasharray="25 6 15 4" strokeLinecap="round" opacity="0.9" />
      <path d="M245 25 L105 60" stroke="#d80064" strokeWidth="3.5" strokeDasharray="30 10 12 6" strokeLinecap="round" opacity="0.85" />
      <path d="M255 42 L130 75" stroke="#b50053" strokeWidth="2.5" strokeDasharray="20 8" strokeLinecap="round" opacity="0.7" />
      <path d="M250 60 L160 90" stroke="#ff4d94" strokeWidth="3" strokeDasharray="15 6 8 3" strokeLinecap="round" opacity="0.6" />
      {/* Paint splatter droplets */}
      <circle cx="85" cy="45" r="2.5" fill="#e60067" />
      <circle cx="60" cy="22" r="3" fill="#ff4d94" />
      <circle cx="115" cy="80" r="2" fill="#d80064" />
      <circle cx="145" cy="100" r="3.5" fill="#e60067" />
      <circle cx="175" cy="115" r="2" fill="#ff1493" />
      <circle cx="25" cy="8" r="1.8" fill="#ff80b3" />
    </svg>
  );
};

// Bottom-right halftone pattern with golden yellow & orange dots
export const BottomRightHalftone: React.FC<{ className?: string }> = ({ className = 'w-48 h-36' }) => {
  // Generate dot grid dynamically with radiating size to mimic the workshop template
  const rows = 9;
  const cols = 12;
  const dots: { x: number; y: number; r: number; color: string; opacity: number }[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Distance from bottom-right (r = rows-1, c = cols-1)
      const distFromCorner = Math.sqrt(
        Math.pow(cols - 1 - c, 2) + Math.pow(rows - 1 - r, 2)
      );
      if (distFromCorner < 12) {
        const radius = Math.max(0.8, 5.2 - distFromCorner * 0.38);
        const isWarmYellow = (r + c) % 2 === 0;
        const color = isWarmYellow ? '#f59e0b' : '#f39200';
        const opacity = Math.min(0.95, Math.max(0.15, 1 - distFromCorner * 0.08));
        dots.push({
          x: 20 + c * 16 + (r % 2 === 1 ? 8 : 0),
          y: 15 + r * 14,
          r: radius,
          color,
          opacity
        });
      }
    }
  }

  return (
    <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.color} opacity={d.opacity} />
      ))}
    </svg>
  );
};

// Dumbbell icon for Fortalezas
export const DumbbellIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 5v14" />
      <path d="M18 5v14" />
      <path d="M2 9v6" />
      <path d="M22 9v6" />
      <path d="M6 12h12" />
      <rect x="5" y="8" width="2" height="8" rx="1" fill={color} />
      <rect x="17" y="8" width="2" height="8" rx="1" fill={color} />
      <rect x="1" y="10" width="2" height="4" rx="0.8" fill={color} />
      <rect x="21" y="10" width="2" height="4" rx="0.8" fill={color} />
    </svg>
  );
};

// Broken chain link icon for Debilidades
export const BrokenChainIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Top link */}
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      {/* Bottom link */}
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      {/* Break sparks / crack lines */}
      <line x1="8" y1="8" x2="6" y2="6" strokeWidth="2" />
      <line x1="16" y1="16" x2="18" y2="18" strokeWidth="2" />
    </svg>
  );
};

// Target with arrow icon for Oportunidades
export const TargetIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill={color} />
      {/* Arrow hitting bullseye */}
      <path d="M12 2v3" strokeWidth="2" />
      <path d="M12 19v3" strokeWidth="2" />
      <path d="M2 12h3" strokeWidth="2" />
      <path d="M19 12h3" strokeWidth="2" />
    </svg>
  );
};

// Warning / Alert triangle icon for Amenazas
export const AlertTriangleIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="3" />
    </svg>
  );
};

// Clipboard checklist icon for PLAN CAME header badge
export const ClipboardCheckIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M9 11l2 2 4-4" />
      <path d="M9 17h6" />
    </svg>
  );
};

// Wrench tool icon for C - Corregir
export const WrenchIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
};

// Shield icon for M - Mantener
export const ShieldIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 22V2" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
};

// Growth chart / trend icon for E - Explotar
export const TrendingUpIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = 'currentColor' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Bar heights */}
      <rect x="3" y="14" width="3.5" height="7" rx="0.8" fill={color} stroke="none" />
      <rect x="8.5" y="10" width="3.5" height="11" rx="0.8" fill={color} stroke="none" />
      <rect x="14" y="6" width="3.5" height="15" rx="0.8" fill={color} stroke="none" />
      {/* Arrow line */}
      <polyline points="4 9 10 3 17 6 22 1" strokeWidth="2.5" />
      <polyline points="17 1 22 1 22 6" strokeWidth="2.5" />
    </svg>
  );
};

// UPB (Universidad Pontificia Bolivariana) top right header mark
export const UPBHeaderLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => {
  return (
    <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Red cross emblem */}
      <rect x="0" y="4" width="22" height="28" rx="2" fill="#c41230" />
      <path d="M11 7v22M4 14h14" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="square" />
      {/* U */}
      <path d="M32 8v14c0 4 2.5 6 6 6s6-2 6-6V8h-3.5v14c0 2-1 3-2.5 3s-2.5-1-2.5-3V8H32z" fill="#2d1b69" />
      {/* P */}
      <path d="M49 8v20h3.5v-7h5.5c4 0 6.5-2.5 6.5-6.5S62 8 58 8H49zm3.5 3.2h5c2.2 0 3.5 1.2 3.5 3.3s-1.3 3.3-3.5 3.3h-5v-6.6z" fill="#2d1b69" />
      {/* B */}
      <path d="M70 8v20h8.5c3.5 0 5.8-1.8 5.8-5 0-2.2-1.2-3.6-3.2-4.2 1.6-.6 2.6-2 2.6-4 0-3.2-2.2-4.8-5.7-4.8H70zm3.5 3.2h4.5c1.8 0 2.8 1 2.8 2.5s-1 2.5-2.8 2.5h-4.5v-5zm0 8.2h5c2 0 3 1 3 2.6s-1 2.6-3 2.6h-5v-5.2z" fill="#2d1b69" />
    </svg>
  );
};

// Bottom-left watercolor wash with "Sin límites"
export const BottomLeftWash: React.FC<{ className?: string }> = ({ className = 'w-48 h-24' }) => {
  return (
    <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="pinkWashGrad" cx="15%" cy="85%" r="75%">
          <stop offset="0%" stopColor="#ffb3d1" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#ffa0c6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M-20 120 C 10 70, 70 60, 110 75 C 150 90, 180 60, 210 110 L-20 120 Z" fill="url(#pinkWashGrad)" />
      <circle cx="25" cy="80" r="35" fill="#ffccd5" opacity="0.6" filter="blur(6px)" />
      <circle cx="70" cy="85" r="28" fill="#ffa8c5" opacity="0.45" filter="blur(8px)" />
    </svg>
  );
};

// Bottom-right CAME Halftone spray (magenta & crimson dots)
export const BottomRightCameHalftone: React.FC<{ className?: string }> = ({ className = 'w-44 h-32' }) => {
  const dots: { x: number; y: number; r: number; color: string; opacity: number }[] = [];
  const rows = 8;
  const cols = 10;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const distFromCorner = Math.sqrt(Math.pow(cols - 1 - c, 2) + Math.pow(rows - 1 - r, 2));
      if (distFromCorner < 11) {
        const radius = Math.max(0.7, 4.5 - distFromCorner * 0.38);
        const color = (r + c) % 3 === 0 ? '#b50053' : (r + c) % 2 === 0 ? '#d80064' : '#e60067';
        const opacity = Math.min(0.9, Math.max(0.12, 1 - distFromCorner * 0.09));
        dots.push({
          x: 25 + c * 17 + (r % 2 === 1 ? 8 : 0),
          y: 15 + r * 13,
          r: radius,
          color,
          opacity
        });
      }
    }
  }

  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.color} opacity={d.opacity} />
      ))}
    </svg>
  );
};

// Arm flexing / muscle icon for 1. Fortaleza (Mi Carrera)
export const FlexArmIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bicep muscle and flexing forearm */}
      <path
        d="M6 21c1-4 3-7 6-7 2.5 0 3.5 1.5 5 1 1.5-.5 3-3 4-2.5 1 .5 1 2.5 0 4-1 1.5-2.5 2-4.5 2.5-3 .5-5 3-7.5 4.5L6 21z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14c-1.5-3 0-6.5 3-7.5 2.5-.8 4 .5 5 2.5.8 1.6 1.5 3 2.5 4"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Radiating sparks */}
      <line x1="22" y1="5" x2="25" y2="4" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="24" y1="9" x2="27" y2="9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="21" y1="13" x2="24" y2="14.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

// Shield with checkmark icon for 2. Mantener (Mi Carrera)
export const CheckShieldIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M14 24s7-3.5 7-9V7l-7-3-7 3v8c0 5.5 7 9 7 9z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 13.5l2.5 2.5 5-5"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Radiating sparks */}
      <line x1="23" y1="6" x2="25" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="24" y1="11" x2="27" y2="11.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

// Bullseye Target with arrow for 3. Objetivo SMART (Mi Carrera)
export const TargetBullseyeIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-6 h-6', color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2.2" />
      <circle cx="14" cy="14" r="6" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="14" r="2" fill={color} />
      {/* Arrow */}
      <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Radiating sparks */}
      <line x1="23" y1="6" x2="25" y2="5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="24" y1="11" x2="27" y2="11.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

// Flow arrow pointing right between cards
export const FlowRightArrow: React.FC<{ className?: string }> = ({ className = 'w-10 h-6' }) => {
  return (
    <svg viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M4 12h34M30 5l9 7-9 7"
        stroke="#0d1b3e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Diploma Certificate with PMP and ribbon medal illustration
export const DiplomaIllustration: React.FC<{ className?: string }> = ({ className = 'w-24 h-28' }) => {
  return (
    <svg viewBox="0 0 110 130" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Certificate Page */}
      <rect x="8" y="8" width="94" height="114" rx="4" fill="#ffffff" stroke="#1d4ed8" strokeWidth="2.5" />
      <rect x="13" y="13" width="84" height="104" rx="2" fill="none" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* PMP Title */}
      <text x="55" y="42" textAnchor="middle" fill="#1e3a8a" fontFamily="Outfit, sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
        PMP
      </text>
      
      {/* Divider line under PMP */}
      <line x1="30" y1="48" x2="80" y2="48" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" />
      
      {/* Simulated certificate text lines */}
      <line x1="24" y1="60" x2="86" y2="60" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="70" x2="82" y2="70" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="32" y1="80" x2="55" y2="80" stroke="#cbd5e1" strokeWidth="1.8" strokeLinecap="round" />
      
      {/* Ribbon Medal */}
      <g transform="translate(68, 86)">
        {/* Ribbon tails */}
        <polygon points="6,18 2,34 10,28 18,34 14,18" fill="#1d4ed8" />
        <polygon points="12,18 8,36 17,29 25,36 21,18" fill="#2563eb" />
        {/* Ribbon rosette circle */}
        <circle cx="12" cy="14" r="11" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
        <circle cx="12" cy="14" r="7" fill="#ffffff" />
        <circle cx="12" cy="14" r="5" fill="#1d4ed8" />
      </g>
      
      {/* Sparkles around diploma */}
      <line x1="2" y1="20" x2="6" y2="24" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="28" x2="4" y2="28" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="104" y1="95" x2="108" y2="98" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      <line x1="105" y1="105" x2="109" y2="103" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// Trophy icon for 2. KPI DE RESULTADO
export const TrophyKpiIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-10 h-10', color = '#d80064' }) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Cup bowl */}
      <path
        d="M10 8h20v10c0 5.5-4.5 10-10 10s-10-4.5-10-10V8z"
        fill={color}
      />
      {/* Rim top */}
      <path d="M8 8h24v3H8V8z" fill={color} />
      {/* Handles */}
      <path
        d="M10 11H6c-1.5 0-3 1.5-3 3v2c0 3 2.5 5 5.5 5h1.5M30 11h4c1.5 0 3 1.5 3 3v2c0 3-2.5 5-5.5 5h-1.5"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Stem */}
      <path d="M18 28h4v5h-4z" fill={color} />
      {/* Base */}
      <path d="M12 33h16v3H12z" rx="1.5" fill={color} />
      {/* Inner highlight */}
      <path d="M14 12h3v10c-1 0-2-.5-3-1V12z" fill="#ffffff" opacity="0.3" />
    </svg>
  );
};

// Gear icon for 3. IMPULSORES
export const GearKpiIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

// User avatar silhouette circle for 4. RESPONSABLE
export const UserAvatarKpiIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-14 h-14', color = '#7c3aed' }) => {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="30" cy="30" r="28" fill="#ede9fe" />
      {/* Head */}
      <circle cx="30" cy="22" r="10" fill={color} />
      {/* Shoulders */}
      <path d="M14 48c0-8.8 7.2-16 16-16s16 7.2 16 16" fill={color} />
    </svg>
  );
};

// Calendar with clock icon for 5. FRECUENCIA
export const CalendarClockKpiIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#ffffff' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      {/* Little clock / tick mark inside */}
      <circle cx="15.5" cy="15.5" r="3.5" fill="#f97316" stroke="#ffffff" strokeWidth="1.5" />
      <polyline points="15.5 14 15.5 15.5 16.5 15.5" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  );
};

// Plus circle connector (+)
export const PlusCircleConnector: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="12" cy="12" r="10" fill="#0d1b3e" />
      <path d="M12 7v10M7 12h10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
};

// Target with Dart Header Illustration for top-right of KPI
export const TargetDartHeaderIllustration: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Outer Cyan Ring */}
      <circle cx="50" cy="50" r="38" stroke="#009cb4" strokeWidth="6" />
      {/* Middle White Ring */}
      <circle cx="50" cy="50" r="26" stroke="#009cb4" strokeWidth="6" />
      {/* Bullseye Center */}
      <circle cx="50" cy="50" r="14" fill="#009cb4" />
      <circle cx="50" cy="50" r="6" fill="#e11d48" />

      {/* Red Dart hitting bullseye */}
      <g transform="translate(48, 12)">
        {/* Shaft */}
        <line x1="2" y1="36" x2="32" y2="6" stroke="#0d1b3e" strokeWidth="3" strokeLinecap="round" />
        {/* Flights */}
        <polygon points="32,6 42,0 36,12" fill="#e11d48" />
        <polygon points="32,6 26,0 38,4" fill="#f43f5e" />
        <polygon points="32,6 38,16 28,12" fill="#be123c" />
      </g>
    </svg>
  );
};

// Rocket Doodle for bottom-right
export const RocketIllustration: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform="rotate(45 32 32)">
        {/* Rocket Body */}
        <path
          d="M32 6 C 24 16, 22 28, 22 40 L 42 40 C 42 28, 40 16, 32 6 Z"
          fill="#6d28d9"
        />
        {/* Nose Cone */}
        <path d="M32 6 C 28 13, 26 20, 25 24 L 39 24 C 38 20, 36 13, 32 6 Z" fill="#e11d48" />
        {/* Porthole */}
        <circle cx="32" cy="28" r="4.5" fill="#ffffff" stroke="#0d1b3e" strokeWidth="1.5" />
        {/* Left Fin */}
        <path d="M22 36 L 14 44 L 22 42 Z" fill="#e11d48" />
        {/* Right Fin */}
        <path d="M42 36 L 50 44 L 42 42 Z" fill="#e11d48" />
        {/* Flame Thruster */}
        <path d="M26 40 L 32 54 L 38 40 Z" fill="#f59e0b" />
        <path d="M28 40 L 32 48 L 36 40 Z" fill="#ef4444" />
      </g>
      {/* Thrust sparks */}
      <circle cx="12" cy="52" r="1.5" fill="#e11d48" />
      <circle cx="18" cy="56" r="2" fill="#f59e0b" />
      <circle cx="8" cy="46" r="1.5" fill="#f43f5e" />
    </svg>
  );
};

// Lightbulb Doodle for bottom-left
export const LightbulbDoodle: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bulb glass */}
      <path
        d="M24 6 C 16 6, 11 12, 11 19 C 11 24, 15 28, 17 31 L 31 31 C 33 28, 37 24, 37 19 C 37 12, 32 6, 24 6 Z"
        stroke="#f59e0b"
        strokeWidth="2.5"
        fill="#fef3c7"
      />
      {/* Filament */}
      <path d="M20 20 L 22 14 L 26 14 L 28 20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      {/* Base screw */}
      <path d="M19 33 h10 M19 36 h10 M21 39 h6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      {/* Rays */}
      <line x1="8" y1="12" x2="4" y2="10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      <line x1="6" y1="22" x2="2" y2="22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="32" x2="4" y2="34" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

// 3 Connected People (Networking) icon (Pink)
export const NetworkPeopleIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-8 h-8', color = '#d80064' }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Top person */}
      <circle cx="18" cy="8" r="3.5" fill={color} />
      <path d="M14 17c0-2.5 2-4 4-4s4 1.5 4 4" fill={color} />
      {/* Bottom left person */}
      <circle cx="9" cy="24" r="3.5" fill={color} />
      <path d="M5 33c0-2.5 2-4 4-4s4 1.5 4 4" fill={color} />
      {/* Bottom right person */}
      <circle cx="27" cy="24" r="3.5" fill={color} />
      <path d="M23 33c0-2.5 2-4 4-4s4 1.5 4 4" fill={color} />
      {/* Connector lines */}
      <line x1="15" y1="14" x2="11" y2="21" stroke={color} strokeWidth="1.8" strokeDasharray="2 2" />
      <line x1="21" y1="14" x2="25" y2="21" stroke={color} strokeWidth="1.8" strokeDasharray="2 2" />
      <line x1="13" y1="28" x2="23" y2="28" stroke={color} strokeWidth="1.8" strokeDasharray="2 2" />
    </svg>
  );
};

// LinkedIn "in" logo icon (Orange)
export const LinkedInSquareIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="2" y="2" width="32" height="32" rx="7" fill="#f97316" />
      {/* i */}
      <circle cx="11" cy="11.5" r="2.2" fill="#ffffff" />
      <rect x="9" y="15.5" width="4" height="11" rx="1" fill="#ffffff" />
      {/* n */}
      <path
        d="M17 15.5h3.8v1.8h.1c.6-1.1 2-2.2 4-2.2 4.2 0 5 2.8 5 6.4v5h-4v-4.5c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4v4.6H17v-11z"
        fill="#ffffff"
      />
    </svg>
  );
};

// Certificate with Ribbon Medal icon (Teal)
export const CertificateBadgeIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-8 h-8', color = '#009cb4' }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Diploma page */}
      <rect x="5" y="4" width="20" height="24" rx="2" fill="none" stroke={color} strokeWidth="2.2" />
      <line x1="9" y1="9" x2="21" y2="9" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="14" x2="19" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="9" y1="19" x2="15" y2="19" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Ribbon medal bottom right */}
      <g transform="translate(19, 16)">
        <polygon points="5,10 2,18 7,15 12,18 9,10" fill={color} />
        <circle cx="7" cy="8" r="5.5" fill="#ffffff" stroke={color} strokeWidth="2" />
        <circle cx="7" cy="8" r="2.5" fill={color} />
      </g>
    </svg>
  );
};

// Interview / Chat Meeting icon (Gold/Yellow)
export const InterviewChatIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-8 h-8', color = '#f59e0b' }) => {
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Person 1 (left) */}
      <circle cx="10" cy="18" r="3.5" fill={color} />
      <path d="M5 28c0-2.8 2.2-5 5-5s5 2.2 5 5" fill={color} />
      {/* Person 2 (right) */}
      <circle cx="26" cy="18" r="3.5" fill={color} />
      <path d="M21 28c0-2.8 2.2-5 5-5s5 2.2 5 5" fill={color} />
      {/* Speech bubble center top */}
      <path
        d="M14 7h8a4 4 0 0 1 4 4c0 2.2-1.8 4-4 4h-2l-3 3v-3h-3a4 4 0 0 1-4-4c0-2.2 1.8-4 4-4z"
        fill={color}
      />
      <circle cx="16" cy="11" r="0.8" fill="#ffffff" />
      <circle cx="18" cy="11" r="0.8" fill="#ffffff" />
      <circle cx="20" cy="11" r="0.8" fill="#ffffff" />
    </svg>
  );
};

// Monitor with Profile & Pen (Action 1)
export const ProfileCvIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#009cb4' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="3" width="16" height="12" rx="2" />
      <circle cx="7" cy="8" r="2" />
      <path d="M4 13c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
      <line x1="12" y1="7" x2="15" y2="7" />
      <line x1="12" y1="10" x2="15" y2="10" />
      {/* Pen */}
      <path d="M19 19l3-3-1.5-1.5-3 3v1.5H19z" fill={color} stroke="none" />
      <path d="M16 21h4" />
    </svg>
  );
};

// Document & Pen (Action 2)
export const ContentPencilIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#e11d48' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
};

// Meeting Table (Action 3)
export const MeetingTableIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#f97316' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Table */}
      <line x1="6" y1="14" x2="18" y2="14" strokeWidth="2.5" />
      <line x1="9" y1="14" x2="9" y2="21" />
      <line x1="15" y1="14" x2="15" y2="21" />
      {/* Person 1 */}
      <circle cx="5" cy="8" r="2" />
      <path d="M2 17c0-2 1.5-3 3-3h1" />
      {/* Person 2 */}
      <circle cx="19" cy="8" r="2" />
      <path d="M22 17c0-2-1.5-3-3-3h-1" />
    </svg>
  );
};

// Graduation Cap (Action 4)
export const GraduationCapIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#009cb4' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
};

// Checklist Weekly (Action 5)
export const ChecklistWeeklyIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-5 h-5', color = '#f59e0b' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="7" x2="10" y2="7" />
      <line x1="12" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="10" y2="11" />
      <line x1="12" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="10" y2="15" />
      <line x1="12" y1="15" x2="16" y2="15" />
      <rect x="8" y="1" width="8" height="3" rx="1" fill={color} stroke="none" />
    </svg>
  );
};

// Camera icon for Photo Placeholder
export const CameraPlaceholderIcon: React.FC<{ className?: string; color?: string }> = ({ className = 'w-8 h-8', color = '#94a3b8' }) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
};




