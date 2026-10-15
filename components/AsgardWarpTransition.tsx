'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AsgardWarpTransitionProps {
  onClose: () => void;
}

export function AsgardWarpTransition({ onClose }: AsgardWarpTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'suckIn' | 'wormhole' | 'shatter' | 'vault'>('suckIn');

  // Multi-Layer Synthesized Audio Engine (Gravitational Suck -> Thunderclap Warp -> Celestial Hum)
  useEffect(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();

      // 1. Singularity Whine & Suction (0.0s - 0.8s)
      const suctionOsc = ctx.createOscillator();
      const suctionGain = ctx.createGain();
      suctionOsc.type = 'sawtooth';
      suctionOsc.frequency.setValueAtTime(80, ctx.currentTime);
      suctionOsc.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.8);
      suctionGain.gain.setValueAtTime(0.1, ctx.currentTime);
      suctionGain.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.75);
      suctionGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.85);
      suctionOsc.connect(suctionGain);
      suctionGain.connect(ctx.destination);
      suctionOsc.start();
      suctionOsc.stop(ctx.currentTime + 0.85);

      // 2. Heavy Sub-Bass Dimension Break Boom (at 0.8s)
      setTimeout(() => {
        const boomOsc = ctx.createOscillator();
        const boomGain = ctx.createGain();
        boomOsc.type = 'triangle';
        boomOsc.frequency.setValueAtTime(180, ctx.currentTime);
        boomOsc.frequency.exponentialRampToValueAtTime(28, ctx.currentTime + 1.2);
        boomGain.gain.setValueAtTime(0.9, ctx.currentTime);
        boomGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
        boomOsc.connect(boomGain);
        boomGain.connect(ctx.destination);
        boomOsc.start();
        boomOsc.stop(ctx.currentTime + 1.2);
      }, 780);

      // 3. Electric Warp Rush Drone (0.8s - 2.4s)
      setTimeout(() => {
        const droneOsc = ctx.createOscillator();
        const droneGain = ctx.createGain();
        droneOsc.type = 'sine';
        droneOsc.frequency.setValueAtTime(440, ctx.currentTime);
        droneOsc.frequency.linearRampToValueAtTime(880, ctx.currentTime + 1.4);
        droneGain.gain.setValueAtTime(0.2, ctx.currentTime);
        droneGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
        droneOsc.connect(droneGain);
        droneGain.connect(ctx.destination);
        droneOsc.start();
        droneOsc.stop(ctx.currentTime + 1.5);
      }, 820);
    } catch {}
  }, []);

  // Visual Phase Orchestration
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('wormhole'), 750);
    const t2 = setTimeout(() => setPhase('shatter'), 2200);
    const t3 = setTimeout(() => setPhase('vault'), 2750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // 60 FPS Hyperspace Warp Tunnel Particle Engine
  useEffect(() => {
    if (phase !== 'wormhole' && phase !== 'suckIn') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const streakCount = 380;
    const streaks = Array.from({ length: streakCount }, () => ({
      x: (Math.random() - 0.5) * canvas.width * 2,
      y: (Math.random() - 0.5) * canvas.height * 2,
      z: Math.random() * 1000 + 100,
      prevZ: 1000,
      hue: Math.random() > 0.4 ? (Math.random() * 60 + 170) : (Math.random() * 50 + 310), // Cyan to Magenta
      size: Math.random() * 2.5 + 1.5
    }));

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.fillStyle = 'rgba(2, 0, 10, 0.28)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      streaks.forEach((s) => {
        s.prevZ = s.z;
        s.z -= 42; // Hyperspace speed forward
        if (s.z <= 10) {
          s.z = 1000;
          s.prevZ = 1000;
          s.x = (Math.random() - 0.5) * canvas.width * 2;
          s.y = (Math.random() - 0.5) * canvas.height * 2;
        }

        const k = 320 / s.z;
        const px = s.x * k + cx;
        const py = s.y * k + cy;

        const pk = 320 / s.prevZ;
        const prevPx = s.x * pk + cx;
        const prevPy = s.y * pk + cy;

        ctx.strokeStyle = `hsla(${s.hue}, 100%, 75%, ${Math.min(1, (1000 - s.z) / 400)})`;
        ctx.lineWidth = s.size * k;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(prevPx, prevPy);
        ctx.lineTo(px, py);
        ctx.stroke();
      });
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [phase]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#02000a] select-none">
      <style>{`
        @keyframes singularityPinch {
          0% {
            transform: scale(1) rotate(0deg);
            filter: brightness(1) blur(0px);
          }
          60% {
            transform: scale(1.12) rotate(3deg);
            filter: brightness(1.6) blur(2px);
          }
          100% {
            transform: scale(3.5) rotate(15deg);
            filter: brightness(3.5) blur(8px);
          }
        }

        @keyframes intenseRumble {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-14px, 12px) rotate(-1.5deg); }
          40% { transform: translate(14px, -12px) rotate(1.5deg); }
          60% { transform: translate(-10px, 8px) rotate(-0.8deg); }
          80% { transform: translate(12px, -8px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }

        @keyframes runicBurst {
          0% {
            transform: scale(0.3) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(2.8) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes vaultAscend {
          0% {
            transform: translateY(50px) scale(0.85);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .anim-singularity {
          animation: singularityPinch 0.75s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }

        .anim-screen-rumble {
          animation: intenseRumble 0.08s infinite;
        }

        .anim-runic-burst {
          animation: runicBurst 0.65s ease-out forwards;
        }

        .anim-vault-reveal {
          animation: vaultAscend 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ========================================================
          PHASE 1 & 2: WORMHOLE CANVAS & SINGULARITY SUCK-IN
      ======================================================== */}
      {(phase === 'suckIn' || phase === 'wormhole') && (
        <div className={`absolute inset-0 w-full h-full ${phase === 'suckIn' ? 'anim-singularity' : 'anim-screen-rumble'}`}>
          <canvas ref={canvasRef} className="w-full h-full block" />

          {/* Central Searing Event Horizon Swirl */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border-4 border-cyan-300 shadow-[0_0_120px_#00f5d4] animate-ping" />
            <div className="absolute font-mono text-xl md:text-3xl font-black text-white tracking-[0.4em] uppercase drop-shadow-[0_0_30px_#00f5d4] animate-pulse">
              ⚡ QUANTUM JUMP ENGAGED ⚡
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          PHASE 3: DIMENSIONAL SHATTER & RUNIC FLASH
      ======================================================== */}
      {phase === 'shatter' && (
        <div className="absolute inset-0 z-40 bg-white flex items-center justify-center">
          {/* Asgardian Runic Portal Rings Expanding */}
          <svg viewBox="0 0 200 200" className="w-96 h-96 anim-runic-burst drop-shadow-[0_0_50px_#ffd700]">
            <circle cx="100" cy="100" r="90" stroke="#ffd700" strokeWidth="4" strokeDasharray="16 8" fill="none" />
            <circle cx="100" cy="100" r="68" stroke="#00f5d4" strokeWidth="3" fill="none" />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={100 + 75 * Math.cos((i * Math.PI) / 6)}
                y2={100 + 75 * Math.sin((i * Math.PI) / 6)}
                stroke="#ffaa00"
                strokeWidth="2.5"
              />
            ))}
            <polygon points="100,35 120,85 165,100 120,115 100,165 80,115 35,100 80,85" fill="#ffffff" />
          </svg>
        </div>
      )}

      {/* ========================================================
          PHASE 4: ASGARD OBSERVATORY CONTACT VAULT REVEAL
      ======================================================== */}
      {phase === 'vault' && (
        <div className="relative z-30 max-w-xl w-[92vw] p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#1b0833]/95 to-[#0b0217]/95 border-2 border-yellow-400 shadow-[0_0_90px_rgba(255,215,0,0.65)] text-center backdrop-blur-3xl anim-vault-reveal">
          {/* Top Asgard Status Badge */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-yellow-400 uppercase">
              BIFROST TERMINAL CONFIRMED // REALM 10
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black font-mono tracking-wider text-white mb-2">
            ASGARD OBSERVATORY
          </h2>
          <p className="text-sm font-mono text-purple-200 mb-6">
            Dimensional coordinate reached. Connect directly with Vishal Vishwakarma for Engineering & AI/ML initiatives.
          </p>

          {/* Action Grid with Verified Direct Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
            <a
              href="https://www.linkedin.com/in/vishal-vishwakarma-001163235/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-[#0077b6] text-white hover:brightness-125 transition-all shadow-[0_0_20px_rgba(0,119,182,0.6)] flex items-center justify-center space-x-2"
            >
              <span>🔗 LINKEDIN PROFILE</span>
            </a>

            <a
              href="https://github.com/Vishalromansv"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-black/80 border border-white/20 text-white hover:bg-gray-900 transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>💻 GITHUB REPOSITORY</span>
            </a>

            <a
              href="https://vishal-portfolio.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:brightness-125 transition-all shadow-[0_0_25px_rgba(247,37,133,0.6)] flex items-center justify-center space-x-2"
            >
              <span>🚀 STREAMLIT PORTFOLIO</span>
            </a>

            <a
              href="mailto:vishalsv944@gmail.com"
              className="py-3.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-yellow-400 text-black hover:bg-yellow-300 transition-all shadow-[0_0_25px_rgba(255,215,0,0.65)] flex items-center justify-center space-x-2"
            >
              <span>✉️ SEND DIRECT EMAIL</span>
            </a>
          </div>

          {/* Footer Controls */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://drive.google.com/drive/folders/1qUR9JeWbeSFcpFwJae3WrjTaRUEXT-rS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
            >
              View Verified Certifications 🧧
            </a>

            <button
              onClick={onClose}
              className="text-xs font-mono px-4 py-1.5 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              Close Portal ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}