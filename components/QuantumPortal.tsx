'use client';

import React from 'react';

interface QuantumPortalProps {
  className?: string;
  onClick?: () => void;
  label?: string;
}

export function QuantumPortalSVG({
  className = "w-80 h-80 md:w-96 md:h-96",
  onClick,
  label = "CLICK TO ENTER CONTACT VAULT"
}: QuantumPortalProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      className={`relative group cursor-pointer flex flex-col items-center justify-center select-none ${className}`}
    >
      <style>{`
        /* Inward & Outward Breathing Bloom Animation */
        @keyframes portalBreath {
          0%, 100% {
            transform: scale(0.975);
            filter: drop-shadow(0 0 25px rgba(0, 229, 255, 0.45))
                    drop-shadow(0 0 50px rgba(0, 150, 255, 0.3));
          }
          50% {
            transform: scale(1.025);
            filter: drop-shadow(0 0 45px rgba(0, 245, 255, 0.9))
                    drop-shadow(0 0 90px rgba(0, 180, 255, 0.65))
                    drop-shadow(0 0 130px rgba(76, 201, 240, 0.4));
          }
        }

        /* Continuous Vortex Internal Swirl */
        @keyframes vortexRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes counterRotate {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        /* Lightning Electric Corona Pulse */
        @keyframes electricCoronaPulse {
          0%, 100% {
            opacity: 0.82;
            stroke-width: 3.5px;
          }
          50% {
            opacity: 1;
            stroke-width: 6.5px;
          }
        }

        /* Inner Ring Wave Ripple */
        @keyframes innerVortexPulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.06);
            opacity: 1;
          }
        }

        .anim-portal-breath {
          animation: portalBreath 3.6s ease-in-out infinite;
          transform-origin: center;
        }

        .anim-vortex-spin {
          animation: vortexRotate 22s linear infinite;
          transform-origin: 250px 210px;
        }

        .anim-vortex-counter {
          animation: counterRotate 15s linear infinite;
          transform-origin: 250px 210px;
        }

        .anim-corona-shimmer {
          animation: electricCoronaPulse 1.8s ease-in-out infinite;
        }

        .anim-inner-wave {
          animation: innerVortexPulse 3s ease-in-out infinite;
          transform-origin: 250px 210px;
        }
      `}</style>

      {/* Embedded High-Detail Vector Teleportation Gateway */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full anim-portal-breath transition-transform duration-300 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep Plasma Core Gradients */}
          <radialGradient id="portalCoreGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#155577" />
            <stop offset="45%" stopColor="#0b304c" />
            <stop offset="78%" stopColor="#061e31" />
            <stop offset="92%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.95" />
          </radialGradient>

          <radialGradient id="nebulaSwirlGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f2fe" stopOpacity="0" />
            <stop offset="65%" stopColor="#00c6ff" stopOpacity="0.35" />
            <stop offset="88%" stopColor="#38ef7d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.85" />
          </radialGradient>

          {/* Metallic Frame Linear Shading */}
          <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#487893" />
            <stop offset="35%" stopColor="#254d66" />
            <stop offset="70%" stopColor="#132c3c" />
            <stop offset="100%" stopColor="#081822" />
          </linearGradient>

          <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#24516d" />
            <stop offset="50%" stopColor="#133346" />
            <stop offset="100%" stopColor="#081720" />
          </linearGradient>

          {/* Searing Neon Bloom Filter */}
          <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ========================================================
            1. BASE AMBIENT FLOOR RING & MULTI-TIER DAIS (BOTTOM)
        ======================================================== */}
        {/* Floor Neon Boundary Ring */}
        <ellipse
          cx="250"
          cy="462"
          rx="185"
          ry="32"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="3.5"
          filter="url(#hyperGlow)"
          opacity="0.85"
        />

        {/* Lower Stepped Tier */}
        <path
          d="M86 430 
             C86 414 160 402 250 402 
             C340 402 414 414 414 430 
             L414 452 
             C414 468 340 480 250 480 
             C160 480 86 468 86 452 
             Z"
          fill="url(#pedestalGrad)"
          stroke="#0f3246"
          strokeWidth="2"
        />
        {/* Lower Tier Facet Lines */}
        <line x1="168" y1="422" x2="168" y2="469" stroke="#081b26" strokeWidth="2.5" />
        <line x1="250" y1="425" x2="250" y2="479" stroke="#081b26" strokeWidth="2.5" />
        <line x1="332" y1="422" x2="332" y2="469" stroke="#081b26" strokeWidth="2.5" />

        {/* Upper Circular Dias Step */}
        <path
          d="M108 376 
             C108 360 172 348 250 348 
             C328 348 392 360 392 376 
             L392 410 
             C392 426 328 438 250 438 
             C172 438 108 426 108 410 
             Z"
          fill="url(#pedestalGrad)"
          stroke="#2d6482"
          strokeWidth="2.5"
        />
        {/* Upper Step Neon Rim Light */}
        <ellipse
          cx="250"
          cy="376"
          rx="142"
          ry="28"
          fill="#102f43"
          stroke="#00e5ff"
          strokeWidth="2.5"
          opacity="0.75"
        />

        {/* ========================================================
            2. LEFT & RIGHT STRUCTURAL TECH TOWERS (PYLONS)
        ======================================================== */}
        {/* Left Pylon */}
        <g id="leftPylon">
          {/* Main Tower Column */}
          <rect x="88" y="148" width="30" height="230" rx="4" fill="url(#chassisGrad)" stroke="#113144" strokeWidth="2" />
          {/* Accent Cap & Panels */}
          <rect x="84" y="136" width="38" height="18" rx="3" fill="#325d76" stroke="#0b1e2a" strokeWidth="2" />
          <rect x="94" y="142" width="18" height="6" rx="2" fill="#00e5ff" opacity="0.8" />
          <line x1="103" y1="165" x2="103" y2="360" stroke="#071b26" strokeWidth="3" />
          {/* Pylon Connecting Strut to Ring */}
          <rect x="118" y="196" width="22" height="34" rx="3" fill="#1b4157" stroke="#0b1e2a" strokeWidth="2" />
          <line x1="120" y1="213" x2="140" y2="213" stroke="#00e5ff" strokeWidth="3" filter="url(#hyperGlow)" />
        </g>

        {/* Right Pylon */}
        <g id="rightPylon">
          {/* Main Tower Column */}
          <rect x="382" y="148" width="30" height="230" rx="4" fill="url(#chassisGrad)" stroke="#113144" strokeWidth="2" />
          {/* Accent Cap & Panels */}
          <rect x="378" y="136" width="38" height="18" rx="3" fill="#325d76" stroke="#0b1e2a" strokeWidth="2" />
          <rect x="388" y="142" width="18" height="6" rx="2" fill="#00e5ff" opacity="0.8" />
          <line x1="397" y1="165" x2="397" y2="360" stroke="#071b26" strokeWidth="3" />
          {/* Pylon Connecting Strut to Ring */}
          <rect x="360" y="196" width="22" height="34" rx="3" fill="#1b4157" stroke="#0b1e2a" strokeWidth="2" />
          <line x1="360" y1="213" x2="380" y2="213" stroke="#00e5ff" strokeWidth="3" filter="url(#hyperGlow)" />
        </g>

        {/* ========================================================
            3. MASSIVE NOTCHED ARCH RING (CIRCULAR CHASSIS)
        ======================================================== */}
        {/* Outer Heavy Beveled Casing (cx: 250, cy: 210, r: 154) */}
        <circle
          cx="250"
          cy="210"
          r="154"
          fill="url(#chassisGrad)"
          stroke="#091b24"
          strokeWidth="5"
        />

        {/* 4 Cardinal Notch Keyplates (Top, Bottom, Left, Right) */}
        {/* Top Notch Plate */}
        <rect x="232" y="50" width="36" height="24" rx="3" fill="#366580" stroke="#0b1e29" strokeWidth="2.5" />
        <line x1="250" y1="52" x2="250" y2="70" stroke="#00e5ff" strokeWidth="3" filter="url(#hyperGlow)" />
        {/* Bottom Notch Plate */}
        <rect x="232" y="346" width="36" height="24" rx="3" fill="#366580" stroke="#0b1e29" strokeWidth="2.5" />
        <line x1="250" y1="348" x2="250" y2="366" stroke="#00e5ff" strokeWidth="3" filter="url(#hyperGlow)" />
        {/* Left Notch Plate */}
        <rect x="90" y="194" width="24" height="32" rx="3" fill="#366580" stroke="#0b1e29" strokeWidth="2.5" />
        {/* Right Notch Plate */}
        <rect x="386" y="194" width="24" height="32" rx="3" fill="#366580" stroke="#0b1e29" strokeWidth="2.5" />

        {/* Inner Frame Groove Track */}
        <circle
          cx="250"
          cy="210"
          r="138"
          fill="#0c2331"
          stroke="#163e54"
          strokeWidth="3.5"
        />

        {/* 4 Segmented Neon Curved Conduits inside Outer Casing */}
        <path
          d="M170 94 A140 140 0 0 1 228 73"
          stroke="#00e5ff"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#hyperGlow)"
        />
        <path
          d="M272 73 A140 140 0 0 1 330 94"
          stroke="#00e5ff"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#hyperGlow)"
        />
        <path
          d="M168 326 A140 140 0 0 0 228 347"
          stroke="#00e5ff"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#hyperGlow)"
        />
        <path
          d="M272 347 A140 140 0 0 0 332 326"
          stroke="#00e5ff"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#hyperGlow)"
        />

        {/* ========================================================
            4. VORTEX ATMOSPHERE & SWIRL LAYERS (INTERIOR)
        ======================================================== */}
        {/* Deep Horizon Backdrop Core */}
        <circle
          cx="250"
          cy="210"
          r="115"
          fill="url(#portalCoreGrad)"
        />

        {/* Rotating Energy Nebula Rings */}
        <g className="anim-vortex-spin">
          <circle
            cx="250"
            cy="210"
            r="110"
            fill="none"
            stroke="url(#nebulaSwirlGrad)"
            strokeWidth="16"
            strokeDasharray="60 30 90 25"
            opacity="0.8"
          />
        </g>

        <g className="anim-vortex-counter">
          <circle
            cx="250"
            cy="210"
            r="95"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="8"
            strokeDasharray="40 50 80 40"
            opacity="0.65"
            filter="url(#hyperGlow)"
          />
        </g>

        {/* Inner Wave Expanding/Compressing Breathing Aura */}
        <circle
          cx="250"
          cy="210"
          r="86"
          fill="#00f2fe"
          className="anim-inner-wave"
          opacity="0.12"
          filter="url(#hyperGlow)"
        />

        {/* ========================================================
            5. SEARING SEETHING ELECTRIC LIGHTNING CORONA (RIM)
        ======================================================== */}
        {/* Core Electric Arc Ring (High-Frequency Shimmer) */}
        <circle
          cx="250"
          cy="210"
          r="116"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          className="anim-corona-shimmer"
          filter="url(#hyperGlow)"
        />

        {/* Crackling Perimeter Lightning Filament Arcs */}
        <g className="anim-vortex-spin">
          <path
            d="M136 210 Q144 198 140 180 Q150 160 162 142 Q176 130 198 116 Q220 102 250 96 Q280 102 302 116 Q324 130 338 142 Q350 160 360 180 Q356 198 364 210 Q356 222 360 240 Q350 260 338 278 Q324 290 302 304 Q280 318 250 324 Q220 318 198 304 Q176 290 162 278 Q150 260 140 240 Q144 222 136 210 Z"
            fill="none"
            stroke="#00ffff"
            strokeWidth="3"
            strokeDasharray="14 10 28 8"
            opacity="0.9"
            filter="url(#hyperGlow)"
          />
        </g>

        <g className="anim-vortex-counter">
          <path
            d="M142 210 Q148 192 152 176 Q168 150 186 130 Q212 110 250 102 Q288 110 314 130 Q332 150 348 176 Q352 192 358 210 Q352 228 348 244 Q332 270 314 290 Q288 310 250 318 Q212 310 186 290 Q168 270 152 244 Q148 228 142 210 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeDasharray="8 12 32 10"
            filter="url(#hyperGlow)"
          />
        </g>
      </svg>

      {/* Interactive Label Banner underneath */}
      {label && (
        <div className="mt-3 flex items-center space-x-2 px-5 py-2 rounded-full border border-cyan-400/40 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:border-cyan-300 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.8)] transition-all">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-cyan-300 group-hover:text-white uppercase transition-colors">
            {label} ⚡
          </span>
        </div>
      )}
    </div>
  );
}