'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AsgardWarpTransition } from '@/components/AsgardWarpTransition';
import { QuantumPortalSVG } from '@/components/QuantumPortal';
import {
  InfinityGauntletSVG,
  SpiderManFigureSVG,
  IronManFigureSVG,
  WolverineFigureSVG,
  CapFigureSVG,
  ThorFigureSVG,
  HulkFigureSVG,
  DaredevilFigureSVG,
  ScarletWitchFigureSVG,
  BlackPantherFigureSVG,
  DoctorStrangeFigureSVG,
  WebShooterSVG,
  ArcReactorSVG,
  WolverineClawsSVG,
  CapShieldSVG,
  StormbreakerSVG,
  GammaGauntletSVG,
  BillyClubsSVG,
  ChaosHexSVG,
  VibraniumNecklaceSVG,
  TaoMandalaSVG,
  CharacterMomentOverlay
} from '@/components/MarvelAssets';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    id: 'hero-spiderman',
    progress: 0.08,
    align: 'left' as const,
    timestamp: 'Work Experience',
    name: 'SPIDER-MAN',
    role: 'GAT Volvo Group, Bangalore',
    themeColor: '#f72585',
    glowColor: 'rgba(247, 37, 133, 0.65)',
    desc: 'Understanding Business building clean projects, increasing efficiency for the plant, cost saving with data, Automating Guest Flow.',
    tags: ['PowerAutomate', 'PowerBI', 'Python', 'Power Apps'],
    projectUrl: 'https://github.com/Vishal-Vishwakarma',
    Figure: SpiderManFigureSVG,
    Weapon: WebShooterSVG
  },
  {
    id: 'hero-ironman',
    progress: 0.16,
    align: 'right' as const,
    timestamp: 'Internship',
    name: 'IRON MAN',
    role: 'AI Intern at Futurense',
    themeColor: '#00f5d4',
    glowColor: 'rgba(0, 245, 212, 0.65)',
    desc: 'Built and orchestrated agentic workflows using LangChain for real-time data retrieval and business logic execution.',
    tags: ['Python', 'MySQL', 'NLP', 'LangChain'],
    projectUrl: 'https://github.com/Vishal-Vishwakarma',
    Figure: IronManFigureSVG,
    Weapon: ArcReactorSVG
  },
  {
    id: 'hero-wolverine',
    progress: 0.31,
    align: 'left' as const,
    timestamp: 'Project 1',
    name: 'WOLVERINE',
    role: 'IT Asset Management (Volvo)',
    themeColor: '#ffb703',
    glowColor: 'rgba(255, 183, 3, 0.65)',
    desc: 'Developed a hardware tracking application to manage IT inventory, employee allocations, and equipment transfers. Designed a PostgreSQL-based backend to improve data reliability and enable dynamic Excel report generation for efficient management reporting.',
    tags: ['React (Next.js)', 'FastAPI', 'Python', 'Supabase', 'Tailwind CSS', 'Pandas'],
    projectUrl: 'https://roova-platform-web-dusky.vercel.app/',
    Figure: WolverineFigureSVG,
    Weapon: WolverineClawsSVG
  },
  {
    id: 'hero-cap',
    progress: 0.40,
    align: 'right' as const,
    timestamp: 'Project 2',
    name: 'CAPTAIN AMERICA',
    role: 'Roova',
    themeColor: '#0077b6',
    glowColor: 'rgba(0, 119, 182, 0.65)',
    desc: 'Developed a SaaS platform for salons and spas with online booking, Google authentication, and admin/shop owner dashboards. Managed multiple shops through a centralized service platform.',
    tags: ['Python', 'Next.js', 'SWR', 'PostgreSQL', 'React'],
    projectUrl: 'https://roova-platform-web-dusky.vercel.app/',
    Figure: CapFigureSVG,
    Weapon: CapShieldSVG
  },
  {
    id: 'hero-thor',
    progress: 0.49,
    align: 'left' as const,
    timestamp: 'Project 3',
    name: 'THOR',
    role: 'Volvo Cafeteria',
    themeColor: '#4cc9f0',
    glowColor: 'rgba(76, 201, 240, 0.7)',
    desc: 'Developed a Cafeteria system in which employees use their Access card tap on machine and get the standard lunch. Works on tokens where every tap deducts 1 token from their balance.',
    tags: ['Python', 'PostgreSQL', 'Vercel', 'Node.js', 'TypeScript', 'Next.js', 'FastAPI'],
    projectUrl: 'https://cafeteria-eta-gilt.vercel.app/',
    Figure: ThorFigureSVG,
    Weapon: StormbreakerSVG
  },
  {
    id: 'hero-hulk',
    progress: 0.58,
    align: 'right' as const,
    timestamp: 'Project 4',
    name: 'HULK',
    role: 'Forklift Fleet Management System',
    themeColor: '#38b000',
    glowColor: 'rgba(56, 176, 0, 0.65)',
    desc: 'Developed a real-time tracking application where operators tap a digital factory blueprint to log precise forklift coordinates and task events (Start, Arrive, Load, Deliver), synchronizing data into a live dashboard.',
    tags: ['Python', 'Streamlit', 'Supabase', 'PostgreSQL', 'Pandas', 'Pillow'],
    projectUrl: 'https://forklift-optimization.streamlit.app/',
    Figure: HulkFigureSVG,
    Weapon: GammaGauntletSVG
  },
  {
    id: 'hero-daredevil',
    progress: 0.67,
    align: 'left' as const,
    timestamp: 'Project 5',
    name: 'DAREDEVIL',
    role: 'Logi-gen',
    themeColor: '#d90429',
    glowColor: 'rgba(217, 4, 41, 0.65)',
    desc: 'Developed an Agentic AI tool that allows users to query logistics and delivery data using natural language, directly addressing ecommerce and logistics challenges. Integrated LLMs to deconstruct complex queries into executable SQL.',
    tags: ['Python', 'SQL', 'Gemini Model', 'LangChain'],
    projectUrl: 'https://logi-gen-zkekgodblyh2hgyjcay3oj.streamlit.app/',
    Figure: DaredevilFigureSVG,
    Weapon: BillyClubsSVG
  },
  {
    id: 'hero-scarletwitch',
    progress: 0.76,
    align: 'right' as const,
    timestamp: 'Project 6',
    name: 'SCARLET WITCH',
    role: 'ARU Fish Stall | Full-Stack E-commerce Platform',
    themeColor: '#e01e37',
    glowColor: 'rgba(224, 30, 55, 0.7)',
    desc: 'Developed a localized e-commerce web application for real-time inventory management and secure ordering. Integrated live GPS capture and Google Maps API to calculate driving routes, enforcing strict 5 km delivery boundaries.',
    tags: ['Python', 'Streamlit', 'Supabase (PostgreSQL)', 'Google Maps API'],
    projectUrl: 'https://aru-fish-stall.streamlit.app/',
    Figure: ScarletWitchFigureSVG,
    Weapon: ChaosHexSVG
  },
  {
    id: 'hero-blackpanther',
    progress: 0.85,
    align: 'left' as const,
    timestamp: 'Project 7',
    name: 'BLACK PANTHER',
    role: 'Med-sim.ai',
    themeColor: '#9d4edd',
    glowColor: 'rgba(157, 78, 221, 0.65)',
    desc: 'Developed a virtual patient simulator using Python-based LLMs and ML to enable realistic medical training. Features AI-generated symptom profiles and differential diagnosis via decision trees.',
    tags: ['LLMs', 'ML', 'Python'],
    projectUrl: 'https://github.com/Abhigyan126/MedSim-AI',
    Figure: BlackPantherFigureSVG,
    Weapon: VibraniumNecklaceSVG
  },
  {
    id: 'hero-doctorstrange',
    progress: 0.93,
    align: 'right' as const,
    timestamp: 'Project 8',
    name: 'DOCTOR STRANGE',
    role: 'SafeSearch',
    themeColor: '#f77f00',
    glowColor: 'rgba(247, 127, 0, 0.7)',
    desc: 'SafeSearch is a mobile-first web app that lets users scan product ingredient lists using their phone camera. Uses AI to analyze the photo, identify chemicals, and provide an instant 1-10 safety rating.',
    tags: ['GenAI / LLMs', 'LangChain', 'Prompt Architecture'],
    projectUrl: 'https://safesearch-rose.vercel.app/',
    Figure: DoctorStrangeFigureSVG,
    Weapon: TaoMandalaSVG
  }
];

export default function MarvelBifrostPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [hasSnapped, setHasSnapped] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [activeHeroMoment, setActiveHeroMoment] = useState<string | null>(null);
  const [isWarpingToAsgard, setIsWarpingToAsgard] = useState(false);

  const triggerSnapSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(340, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + 0.6);

      gain.gain.setValueAtTime(0.85, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {}
  };

  const handleThanosSnap = () => {
    if (hasSnapped || isSnapping) return;
    setIsSnapping(true);
    triggerSnapSound();

    setTimeout(() => {
      setHasSnapped(true);
      setIsSnapping(false);
      window.scrollTo({ top: 160, behavior: 'smooth' });
    }, 850);
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02000a, 0.0055);

    const camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1600);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const bifrostCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 3, -120),
      new THREE.Vector3(-28, -2, -280),
      new THREE.Vector3(25, 4, -460),
      new THREE.Vector3(-22, -3, -640),
      new THREE.Vector3(26, 3, -820),
      new THREE.Vector3(-24, -2, -1000),
      new THREE.Vector3(20, 4, -1180),
      new THREE.Vector3(-14, 0, -1360),
      new THREE.Vector3(0, 0, -1500)
    ]);

    const strandCount = 64;
    const bridgeWidth = 8.5;
    const curveResolution = 450;
    const linesGroup = new THREE.Group();

    const colorCenter = new THREE.Color('#ff007f');
    const colorMid = new THREE.Color('#7928ca');
    const colorOuter = new THREE.Color('#240046');

    for (let i = 0; i < strandCount; i++) {
      const normalizedPos = (i / (strandCount - 1)) * 2 - 1;
      const absRatio = Math.abs(normalizedPos);
      const offsetX = normalizedPos * (bridgeWidth / 2);

      let lineColor = new THREE.Color();
      if (absRatio < 0.3) {
        lineColor.lerpColors(colorCenter, colorMid, absRatio / 0.3);
      } else {
        lineColor.lerpColors(colorMid, colorOuter, (absRatio - 0.3) / 0.7);
      }

      const offsetPoints = bifrostCurve.getPoints(curveResolution).map(p => {
        return new THREE.Vector3(p.x + offsetX, p.y - 1.8, p.z);
      });

      const strandGeo = new THREE.BufferGeometry().setFromPoints(offsetPoints);
      const strandMat = new THREE.LineBasicMaterial({
        color: lineColor,
        transparent: true,
        opacity: 0.9 - absRatio * 0.25
      });

      linesGroup.add(new THREE.Line(strandGeo, strandMat));
    }
    scene.add(linesGroup);

    const starCount = 2200;
    const starCoords = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starCoords[i * 3] = (Math.random() - 0.5) * 600;
      starCoords[i * 3 + 1] = (Math.random() - 0.5) * 500;
      starCoords[i * 3 + 2] = (Math.random() - 0.5) * 1650 - 150;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starCoords, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xe0c3fc, size: 0.8, transparent: true, opacity: 0.6 });
    scene.add(new THREE.Points(starGeo, starMat));

    const gantries = [
      { id: 'gantry-intro', progress: 0.02, height: 4.6 },
      { id: 'gantry-education', progress: 0.23, height: 4.8 },
      { id: 'gantry-mid', progress: 0.53, height: 4.6 },
      { id: 'gantry-final', progress: 0.98, height: 4.8 }
    ];

    const gantryAnchors = gantries.map(g => {
      const pt = bifrostCurve.getPointAt(g.progress);
      return {
        id: g.id,
        pos: new THREE.Vector3(pt.x, pt.y + g.height, pt.z)
      };
    });

    const poleMaterial = new THREE.LineBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.6 });

    const cardAnchors = MILESTONES.map(m => {
      const pt = bifrostCurve.getPointAt(m.progress);
      const xOffCard = m.align === 'left' ? -6.8 : 6.8;
      const xOffMon = m.align === 'left' ? 7.2 : -7.2;

      const cardPos = new THREE.Vector3(pt.x + xOffCard, pt.y + 2.2, pt.z);
      const monPos = new THREE.Vector3(pt.x + xOffMon, pt.y + 2.6, pt.z);

      const poleGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(cardPos.x, pt.y - 1.8, cardPos.z),
        cardPos
      ]);
      scene.add(new THREE.Line(poleGeo, poleMaterial));

      return {
        id: m.id,
        monumentId: `monument-${m.id}`,
        pos: cardPos,
        monumentPos: monPos
      };
    });

    const scrollTracker = { progress: 0.0 };

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollTracker.progress = self.progress * 0.985;
      }
    });

    const projVec = new THREE.Vector3();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const camPos = bifrostCurve.getPointAt(scrollTracker.progress);
      const lookPos = bifrostCurve.getPointAt(Math.min(scrollTracker.progress + 0.035, 1.0));

      camera.position.set(camPos.x, camPos.y + 0.85, camPos.z);
      camera.lookAt(lookPos);

      gantryAnchors.forEach(g => {
        const el = document.getElementById(g.id);
        if (!el) return;

        projVec.copy(g.pos);
        projVec.project(camera);
        const dist = camera.position.distanceTo(g.pos);
        const inFront = projVec.z < 1.0 && g.pos.z < camera.position.z;

        if (inFront && dist > 4 && dist < 190) {
          const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
          const scale = Math.max(0.3, Math.min(1.25, 36 / dist));

          let opacity = 1.0;
          if (dist < 10) opacity = (dist - 4) / 6;
          if (dist > 115) opacity = (190 - dist) / 75;

          el.style.display = 'block';
          el.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
          el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
        } else {
          el.style.display = 'none';
        }
      });

      cardAnchors.forEach(anchor => {
        const cardEl = document.getElementById(anchor.id);
        const monEl = document.getElementById(anchor.monumentId);

        if (cardEl) {
          projVec.copy(anchor.pos);
          projVec.project(camera);
          const dist = camera.position.distanceTo(anchor.pos);
          const inFront = projVec.z < 1.0 && anchor.pos.z < camera.position.z;

          if (inFront && dist > 3 && dist < 160) {
            const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
            const scale = Math.max(0.25, Math.min(1.2, 30 / dist));

            let opacity = 1.0;
            if (dist < 10) opacity = (dist - 3) / 7;
            if (dist > 100) opacity = (160 - dist) / 60;

            cardEl.style.display = 'block';
            cardEl.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            cardEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          } else {
            cardEl.style.display = 'none';
          }
        }

        if (monEl) {
          projVec.copy(anchor.monumentPos);
          projVec.project(camera);
          const dist = camera.position.distanceTo(anchor.monumentPos);
          const inFront = projVec.z < 1.0 && anchor.monumentPos.z < camera.position.z;

          if (inFront && dist > 4 && dist < 170) {
            const x = (projVec.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-(projVec.y * 0.5) + 0.5) * window.innerHeight;
            const scale = Math.max(0.3, Math.min(1.3, 38 / dist));

            let opacity = 1.0;
            if (dist < 10) opacity = (dist - 4) / 6;
            if (dist > 110) opacity = (170 - dist) / 60;

            monEl.style.display = 'block';
            monEl.style.opacity = Math.max(0, Math.min(1, opacity)).toString();
            monEl.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0px) scale(${scale})`;
          } else {
            monEl.style.display = 'none';
          }
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      st.kill();
      renderer.dispose();
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-[#02000a] text-white selection:bg-[#ff0055] font-sans overflow-x-hidden">
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />

      {/* Top Cockpit HUD */}
      <header className="fixed top-6 left-6 right-6 z-30 flex items-center justify-between border border-pink-500/30 bg-black/75 backdrop-blur-md px-6 py-3 rounded-md shadow-[0_0_25px_rgba(255,0,127,0.25)]">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-pink-500 animate-ping" />
          <span className="font-mono font-bold tracking-widest text-sm text-pink-400">
            Vishal Vishwakarma Portfolio
          </span>
        </div>
        <div className="text-xs font-mono tracking-widest text-purple-300/90 animate-pulse hidden md:block">
          {hasSnapped ? 'SCROLL DOWN TO WARP THROUGH THE TIMELINE ▼' : 'SNAP THE GAUNTLET TO COMMENCE ▼'}
        </div>
      </header>

      {/* THANOS INFINITY GAUNTLET LAUNCH GATE */}
      {!hasSnapped && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/85 backdrop-blur-xl px-4 text-center">
          <div className="max-w-xl flex flex-col items-center">
            <span className="text-xs font-mono tracking-[0.3em] text-yellow-400 uppercase mb-2 animate-pulse">
              [ REALITY MATRIX LOCKED ]
            </span>
            <h1 className="text-4xl md:text-5xl font-black font-mono tracking-wider text-white mb-6">
              A SINGLE SNAP RESHAPES THE UNIVERSE
            </h1>

            <InfinityGauntletSVG onClick={handleThanosSnap} className="w-48 h-48 cursor-pointer mb-6" />

            <button
              onClick={handleThanosSnap}
              className="px-8 py-3 rounded-full font-mono text-sm font-bold tracking-widest bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-black uppercase hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,215,0,0.6)] cursor-pointer"
            >
              ⚡ CLICK GAUNTLET TO SNAP & BEGIN
            </button>
            <p className="mt-3 text-xs text-gray-400 font-mono">
              Click anywhere on the Gauntlet to ignite the Thor: Ragnarok Bifrost highway.
            </p>
          </div>
        </div>
      )}

      {/* BLINDING COSMIC REALITY SNAP FLASH */}
      {isSnapping && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-white animate-ping">
          <div className="text-5xl font-mono font-black text-black tracking-widest">
            * SNAP *
          </div>
        </div>
      )}

      {/* SCREEN-SPACE 3D PROJECTION LAYER */}
      <div className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        {/* OVERHEAD ARCHWAY 1 (INTRO GANTRY) */}
        <div
          id="gantry-intro"
          className="absolute pointer-events-auto w-[90vw] max-w-[680px] p-6 text-center rounded-xl bg-purple-950/80 border-2 border-pink-500 shadow-[0_0_40px_rgba(255,0,127,0.6)] backdrop-blur-xl"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-pink-400 uppercase block mb-1">
            THEME MARVEL
          </span>
          <h2 className="text-3xl font-black font-mono tracking-wider text-white">
            WELCOME TO VISHAL'S PROFILE
          </h2>
          <p className="text-xs text-purple-200 mt-2 font-mono">
            Software Development Engineer | AIML Engineer
          </p>
        </div>

        {/* OVERHEAD ARCHWAY 2 (ACADEMICS & SKILLS) */}
        <div
          id="gantry-education"
          className="absolute pointer-events-auto w-[92vw] max-w-[720px] p-6 rounded-xl bg-indigo-950/85 border-2 border-cyan-400 shadow-[0_0_45px_rgba(0,245,212,0.65)] backdrop-blur-xl text-left"
        >
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              ACADEMIC FOUNDATION & CORE COMPETENCY
            </span>
            <span className="text-xs font-mono text-purple-200">2021 – 2025</span>
          </div>

          <h3 className="text-2xl font-black font-mono text-white mb-0.5">
            JAIN (DEEMED-TO-BE) UNIVERSITY
          </h3>
          <p className="text-sm font-mono text-cyan-300 font-bold mb-3">
            BTECH - CSE (ARTIFICIAL INTELLIGENCE & MACHINE LEARNING) • CGPA: 8.085
          </p>

          <div className="bg-black/50 p-3 rounded-lg border border-white/10 mb-2">
            <span className="text-[11px] font-mono font-bold text-pink-400 uppercase block mb-1">
              TECHNICAL EXPERTISE:
            </span>
            <p className="text-xs font-mono text-gray-200 leading-relaxed">
              Python, SQL (MySQL), Power BI, Machine Learning, Artificial Intelligence, Generative AI, LLMs, NLP, TensorFlow, FastAPI, Next.js.
            </p>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-purple-300">
            <span>Soft Skills: Leadership, Problem Solving, Work Ethic, Communication</span>
          </div>
        </div>

        {/* OVERHEAD ARCHWAY 3 (PROJECT HORIZON) */}
        <div
          id="gantry-mid"
          className="absolute pointer-events-auto w-[90vw] max-w-[680px] p-6 text-center rounded-xl bg-purple-950/80 border-2 border-green-500 shadow-[0_0_40px_rgba(56,176,0,0.6)] backdrop-blur-xl"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-green-400 uppercase block mb-1">
            PROJECT HORIZON
          </span>
          <h2 className="text-3xl font-black font-mono tracking-wider text-white">
            PRODUCTION SYSTEM BUILDS
          </h2>
          <p className="text-xs text-purple-200 mt-2 font-mono">
            Autonomous Agentic Tools, Geolocation Routing, Computer Vision & Fleet Tracking
          </p>
        </div>

        {/* OVERHEAD ARCHWAY 4 (DESTINATION REACHED & QUANTUM PORTAL) */}
        <div
          id="gantry-final"
          className="absolute pointer-events-auto flex flex-col items-center text-center p-6"
        >
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase block mb-2">
            DIMENSIONAL WARP // TERMINAL REACHED
          </span>
          <h2 className="text-3xl font-black font-mono tracking-wider text-white mb-4">
            ASGARD OBSERVATORY PORTAL
          </h2>

          {/* Clicking now launches the cinematic Asgard Warp Jump */}
          <QuantumPortalSVG
            onClick={() => setIsWarpingToAsgard(true)}
            label="ENTER ASGARD CONTACT VAULT"
          />
        </div>

        {/* 10 SIDE BILLBOARDS & 10 STANDING HERO PEDESTALS */}
        {MILESTONES.map((m) => {
          const Figure = m.Figure;
          const Weapon = m.Weapon;

          return (
            <React.Fragment key={m.id}>
              {/* SIDE STANDING STATUE / PEDESTAL */}
              <div
                id={`monument-${m.id}`}
                className="absolute pointer-events-auto cursor-pointer transition-transform hover:scale-115 duration-300 flex flex-col items-center"
                onClick={() => setActiveHeroMoment(m.name)}
              >
                <div
                  style={{ filter: `drop-shadow(0 0 25px ${m.glowColor})` }}
                  className="flex flex-col items-center p-3 rounded-2xl bg-black/60 border border-white/20 backdrop-blur-md"
                >
                  <Figure className="w-24 h-28 md:w-28 md:h-32 mb-2" />
                  <div className="p-2 rounded-full bg-white/10 border border-white/20">
                    <Weapon className="w-14 h-14" />
                  </div>
                </div>
              </div>

              {/* SIDE BILLBOARD */}
              <div
                id={m.id}
                style={{
                  borderColor: m.themeColor,
                  boxShadow: `0 0 35px ${m.glowColor}, inset 0 0 15px ${m.glowColor}`
                }}
                className="absolute pointer-events-auto rounded-xl p-6 backdrop-blur-2xl bg-black/90 border-2 w-[88vw] max-w-[460px]"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
                    {m.timestamp}
                  </span>
                  <button
                    onClick={() => setActiveHeroMoment(m.name)}
                    style={{ color: m.themeColor, borderColor: m.themeColor }}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-dashed hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    CHARGE ⚡
                  </button>
                </div>

                <h2 className="text-xl font-black font-mono text-white leading-tight mb-1">
                  {m.name}
                </h2>
                <h3 className="text-xs font-bold font-mono tracking-wide mb-2" style={{ color: m.themeColor }}>
                  {m.role}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {m.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {m.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href={m.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderColor: m.themeColor, color: m.themeColor }}
                    className="flex-1 py-2 rounded text-[11px] font-mono font-bold uppercase tracking-wider text-center border hover:bg-white/10 transition-all flex items-center justify-center space-x-1"
                  >
                    <span>VIEW PROJECT ↗</span>
                  </a>

                  <button
                    onClick={() => setActiveHeroMoment(m.name)}
                    style={{ backgroundColor: m.themeColor }}
                    className="flex-1 py-2 rounded text-[11px] font-mono font-bold text-black uppercase tracking-wider hover:brightness-125 transition-transform active:scale-95 shadow-md"
                  >
                    DISCHARGE ARTIFACT
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Hero Charge Modal VFX */}
      <CharacterMomentOverlay
        heroType={activeHeroMoment}
        onFinish={() => setActiveHeroMoment(null)}
      />

      {/* CINEMATIC ASGARD WORMHOLE WARP TRANSITION & CONTACT VAULT */}
      {isWarpingToAsgard && (
        <AsgardWarpTransition onClose={() => setIsWarpingToAsgard(false)} />
      )}

      {/* Virtual Scroll Height */}
      <div ref={containerRef} className="relative w-full h-[1200vh] pointer-events-none z-20" />
    </main>
  );
}