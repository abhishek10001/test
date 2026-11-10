'use client';

import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  Calendar, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  Menu, 
  Sparkles
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Portraits' | 'Architecture' | 'Abstract' | 'Mono';
  year: string;
  location: string;
  image: string;
  aspect: string;
  colorBlock: 'red' | 'yellow' | 'blue' | 'white' | 'black';
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Composition in Vertical Rhythm #1',
    category: 'Architecture',
    year: '2025',
    location: 'Rotterdam, NL',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2 row-span-2',
    colorBlock: 'red'
  },
  {
    id: '2',
    title: 'The Static Gaze',
    category: 'Portraits',
    year: '2025',
    location: 'Amsterdam Studio',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1',
    colorBlock: 'yellow'
  },
  {
    id: '3',
    title: 'Neo-Plastic Prism IX',
    category: 'Abstract',
    year: '2024',
    location: 'Berlin, DE',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-2',
    colorBlock: 'blue'
  },
  {
    id: '4',
    title: 'Monochrome Facade Balance',
    category: 'Mono',
    year: '2025',
    location: 'Utrecht, NL',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1',
    colorBlock: 'white'
  },
  {
    id: '5',
    title: 'Spatial Intersect III',
    category: 'Architecture',
    year: '2024',
    location: 'Basel, CH',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 md:col-span-2 row-span-1',
    colorBlock: 'black'
  },
  {
    id: '6',
    title: 'Diagonal Equilibrium',
    category: 'Abstract',
    year: '2025',
    location: 'The Hague, NL',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1',
    colorBlock: 'red'
  },
  {
    id: '7',
    title: 'Persona in Primary Tones',
    category: 'Portraits',
    year: '2024',
    location: 'Paris, FR',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-2',
    colorBlock: 'yellow'
  },
  {
    id: '8',
    title: 'Concrete Symphony (Mono)',
    category: 'Mono',
    year: '2025',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop',
    aspect: 'col-span-1 row-span-1',
    colorBlock: 'blue'
  }
];

const EXHIBITIONS = [
  {
    date: 'OCT 12 — NOV 24, 2025',
    title: 'THE ABSOLUTE PLANE',
    venue: 'Stedelijk Museum Voor Beeldende Kunsten',
    city: 'Amsterdam, Netherlands',
    status: 'Upcoming'
  },
  {
    date: 'JUN 04 — AUG 18, 2025',
    title: 'NEO-PLASTIC ARCHITECTURES',
    venue: 'Kunsthalle Basel',
    city: 'Basel, Switzerland',
    status: 'Current'
  },
  {
    date: 'JAN 15 — MAR 30, 2025',
    title: 'VERTICAL & HORIZONTAL RHYTHM',
    venue: 'Bauhaus Dessau Foundation',
    city: 'Dessau, Germany',
    status: 'Completed'
  }
];

export default function DeStijlPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2025);
  
  // Booking Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Editorial Assignment',
    date: '',
    message: ''
  });

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col selection:bg-[#DC2626] selection:text-white">
      
      {/* TOP DE STIJL COLOR BAR */}
      <div className="w-full h-3 grid grid-cols-12 border-b-3 border-[#111111]">
        <div className="col-span-3 bg-[#DC2626]"></div>
        <div className="col-span-2 bg-[#EAB308]"></div>
        <div className="col-span-3 bg-[#2563EB]"></div>
        <div className="col-span-2 bg-[#111111]"></div>
        <div className="col-span-2 bg-white"></div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA] border-b-3 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#DC2626] border-3 border-[#111111] flex items-center justify-center text-white font-black text-xl destijl-shadow-sm group-hover:bg-[#111111] transition-colors">
              M
            </div>
            <div>
              <span className="font-black text-lg tracking-wider block leading-tight">MAARTEN VAN DOESBURG</span>
              <span className="text-xs font-bold tracking-widest text-[#2563EB] uppercase block">NEO-PLASTIC PHOTOGRAPHY</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider">
            <a href="#gallery" className="hover:text-[#DC2626] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] hover:after:w-full after:transition-all">Gallery</a>
            <a href="#spotlight" className="hover:text-[#2563EB] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2563EB] hover:after:w-full after:transition-all">Spotlight</a>
            <a href="#manifesto" className="hover:text-[#EAB308] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EAB308] hover:after:w-full after:transition-all">Manifesto</a>
            <a href="#exhibitions" className="hover:text-[#DC2626] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DC2626] hover:after:w-full after:transition-all">Exhibitions</a>
            <a href="#booking" className="bg-[#111111] text-white px-5 py-2.5 border-3 border-[#111111] destijl-shadow-sm hover:bg-[#DC2626] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
              Inquire
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white border-3 border-[#111111] destijl-shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b-3 border-[#111111] px-6 py-6 flex flex-col gap-4 font-bold uppercase tracking-wider">
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-200 hover:text-[#DC2626]"
            >
              Gallery
            </a>
            <a 
              href="#spotlight" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-200 hover:text-[#2563EB]"
            >
              Spotlight
            </a>
            <a 
              href="#manifesto" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-200 hover:text-[#EAB308]"
            >
              Manifesto
            </a>
            <a 
              href="#exhibitions" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-zinc-200 hover:text-[#DC2626]"
            >
              Exhibitions
            </a>
            <a 
              href="#booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#DC2626] text-white py-3 text-center border-3 border-[#111111] destijl-shadow-sm mt-2"
            >
              Inquire &amp; Booking
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION - ASYMMETRICAL DE STIJL COMPOSITION */}
      <section className="relative border-b-3 border-[#111111] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          
          {/* Left Hero Text Block */}
          <div className="lg:col-span-7 p-8 sm:p-16 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-[#111111]">
            <div className="inline-flex items-center gap-2 bg-[#EAB308] border-3 border-[#111111] px-4 py-1.5 text-xs font-black uppercase tracking-widest self-start destijl-shadow-sm mb-6">
              <Sparkles size={14} /> Pure Plasticism in Photography
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase mb-6">
                Redefining Space Through <span className="text-[#DC2626] bg-[#EAB308] px-2 py-0.5">Primary</span> Form &amp; Light.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-700 max-w-xl leading-relaxed mb-8">
                Eliminating the accidental. Embracing strict verticality, absolute horizontality, and the uncompromising dialogue of primary planes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href="#gallery" 
                className="bg-[#DC2626] text-white font-black uppercase px-8 py-4 border-3 border-[#111111] destijl-shadow hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 text-sm tracking-wider"
              >
                <Camera size={18} /> Explore Works
              </a>
              <a 
                href="#manifesto" 
                className="bg-[#2563EB] text-white font-black uppercase px-8 py-4 border-3 border-[#111111] destijl-shadow hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 text-sm tracking-wider"
              >
                Read Manifesto <ArrowUpRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Hero Composition Grid */}
          <div className="lg:col-span-5 grid grid-rows-3 bg-[#111111]">
            
            {/* Top Red Block */}
            <div className="bg-[#DC2626] border-b-3 border-[#111111] p-6 flex items-center justify-between text-white">
              <div>
                <span className="text-xs font-black uppercase tracking-widest opacity-80 block">Aesthetic Principle</span>
                <span className="text-2xl font-black tracking-tight">VERTICAL TENSION</span>
              </div>
              <div className="w-12 h-12 bg-white border-3 border-[#111111] flex items-center justify-center text-[#DC2626] font-black">
                I
              </div>
            </div>

            {/* Middle Yellow Block */}
            <div className="bg-[#EAB308] border-b-3 border-[#111111] p-6 flex items-center justify-between text-[#111111]">
              <div>
                <span className="text-xs font-black uppercase tracking-widest opacity-80 block">Spatial Harmony</span>
                <span className="text-2xl font-black tracking-tight">HORIZONTAL PLANE</span>
              </div>
              <div className="w-12 h-12 bg-[#111111] border-3 border-[#111111] flex items-center justify-center text-[#EAB308] font-black">
                II
              </div>
            </div>

            {/* Bottom Blue Block */}
            <div className="bg-[#2563EB] p-6 flex items-center justify-between text-white">
              <div>
                <span className="text-xs font-black uppercase tracking-widest opacity-80 block">Chromatic Purity</span>
                <span className="text-2xl font-black tracking-tight">ABSOLUTE BLUE</span>
              </div>
              <div className="w-12 h-12 bg-white border-3 border-[#111111] flex items-center justify-center text-[#2563EB] font-black">
                III
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* METRICS & PHILOSOPHY STRIP */}
      <div className="border-b-3 border-[#111111] bg-white grid grid-cols-2 md:grid-cols-4">
        <div className="p-6 sm:p-8 border-b-3 md:border-b-0 md:border-r-3 border-[#111111] text-center">
          <span className="text-4xl sm:text-5xl font-black block mb-1 text-[#DC2626]">14+</span>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Global Exhibitions</span>
        </div>
        <div className="p-6 sm:p-8 border-b-3 md:border-b-0 md:border-r-3 border-[#111111] text-center">
          <span className="text-4xl sm:text-5xl font-black block mb-1 text-[#2563EB]">120+</span>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Curated Series</span>
        </div>
        <div className="p-6 sm:p-8 border-r-3 border-[#111111] text-center">
          <span className="text-4xl sm:text-5xl font-black block mb-1 text-[#EAB308]">100%</span>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Orthogonal Framing</span>
        </div>
        <div className="p-6 sm:p-8 text-center bg-[#111111] text-white">
          <span className="text-4xl sm:text-5xl font-black block mb-1 text-white">1917</span>
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">De Stijl Origin</span>
        </div>
      </div>

      {/* FILTERABLE PHOTOGRAPHY GALLERY */}
      <section id="gallery" className="py-20 bg-[#FAFAFA] border-b-3 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block bg-[#DC2626] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] mb-3">
                Exhibition Archive
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                The Neo-Plastic Gallery
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Portraits', 'Architecture', 'Abstract', 'Mono'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider border-3 border-[#111111] transition-all destijl-shadow-sm ${
                    activeCategory === cat
                      ? 'bg-[#111111] text-white translate-x-0.5 translate-y-0.5'
                      : 'bg-white text-[#111111] hover:bg-zinc-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const badgeColor = 
                item.colorBlock === 'red' ? 'bg-[#DC2626] text-white' :
                item.colorBlock === 'yellow' ? 'bg-[#EAB308] text-[#111111]' :
                item.colorBlock === 'blue' ? 'bg-[#2563EB] text-white' : 'bg-[#111111] text-white';

              return (
                <div 
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="group bg-white border-3 border-[#111111] destijl-shadow destijl-shadow-hover cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  {/* Image container */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden border-b-3 border-[#111111] bg-zinc-200">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[15%] group-hover:grayscale-0"
                    />
                    
                    {/* Top Tag */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`text-xs font-black uppercase px-3 py-1 border-2 border-[#111111] ${badgeColor} destijl-shadow-sm`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Hover expand overlay */}
                    <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white border-3 border-[#111111] px-4 py-2 font-black text-xs uppercase tracking-widest flex items-center gap-2 destijl-shadow-sm">
                        <Maximize2 size={16} /> View Frame
                      </div>
                    </div>
                  </div>

                  {/* Info footer */}
                  <div className="p-5 flex items-center justify-between bg-white">
                    <div>
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-1">{item.year} — {item.location}</span>
                      <h3 className="font-black text-lg tracking-tight uppercase group-hover:text-[#DC2626] transition-colors">{item.title}</h3>
                    </div>
                    <div className="w-10 h-10 border-3 border-[#111111] bg-[#FAFAFA] flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="bg-white border-4 border-[#111111] destijl-shadow max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="bg-[#111111] text-white p-4 flex items-center justify-between border-b-3 border-[#111111]">
              <div className="flex items-center gap-3">
                <span className="bg-[#DC2626] text-white text-xs font-black uppercase px-2.5 py-1 border border-white">
                  {selectedImage.category}
                </span>
                <span className="font-black text-sm uppercase tracking-wider">{selectedImage.title}</span>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="w-8 h-8 bg-white text-[#111111] border-2 border-[#111111] flex items-center justify-center font-black hover:bg-[#DC2626] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
              <div className="md:col-span-8 bg-zinc-900 border-b-3 md:border-b-0 md:border-r-3 border-[#111111] flex items-center justify-center p-4">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="max-h-[60vh] w-auto object-contain border-2 border-white/20"
                />
              </div>

              <div className="md:col-span-4 p-6 flex flex-col justify-between bg-white">
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">Location &amp; Year</span>
                    <span className="font-black text-lg block">{selectedImage.location} ({selectedImage.year})</span>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 block mb-1">Compositional Rule</span>
                    <p className="text-sm font-medium text-zinc-700 leading-relaxed">
                      Executed according to Neo-Plastic tenets. The intersection of horizontal light axes and vertical subject planes yields supreme spatial equilibrium.
                    </p>
                  </div>
                </div>

                <div className="border-t-3 border-[#111111] pt-4">
                  <a 
                    href="#booking" 
                    onClick={() => setSelectedImage(null)}
                    className="w-full bg-[#DC2626] text-white font-black uppercase py-3 text-center block border-3 border-[#111111] destijl-shadow-sm hover:bg-[#111111] transition-colors text-xs tracking-wider"
                  >
                    Commission Similar Work
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* FEATURED PROJECT SPOTLIGHT */}
      <section id="spotlight" className="py-20 bg-white border-b-3 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="inline-block bg-[#2563EB] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] mb-3">
            Spotlight Composition
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-12">
            Series: The Primary Metropolis
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 border-3 border-[#111111] destijl-shadow bg-[#FAFAFA]">
            
            {/* Spotlight Image Composition */}
            <div className="lg:col-span-7 relative min-h-[450px] border-b-3 lg:border-b-0 lg:border-r-3 border-[#111111]">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" 
                alt="Spotlight Project" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#EAB308] border-3 border-[#111111] px-4 py-2 font-black text-xs uppercase tracking-wider destijl-shadow-sm">
                Featured Monograph 2025
              </div>
            </div>

            {/* Spotlight Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-4 bg-[#DC2626] border-2 border-[#111111]"></span>
                  <span className="w-4 h-4 bg-[#EAB308] border-2 border-[#111111]"></span>
                  <span className="w-4 h-4 bg-[#2563EB] border-2 border-[#111111]"></span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                  Architecture of the Absolute Plane
                </h3>

                <p className="text-zinc-700 font-medium leading-relaxed mb-6">
                  A 3-year photographic exploration across Rotterdam, Berlin, and Zurich. By stripping away extraneous ornamentation, this monograph investigates how modern urban structures unconsciously mirror Piet Mondrian&apos;s grid equations.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 border-2 border-[#111111]">
                    <span className="text-xs font-bold text-zinc-500 uppercase block">Medium</span>
                    <span className="font-black text-sm uppercase">Large Format Film</span>
                  </div>
                  <div className="bg-white p-4 border-2 border-[#111111]">
                    <span className="text-xs font-bold text-zinc-500 uppercase block">Prints Available</span>
                    <span className="font-black text-sm uppercase">Limited Edition of 25</span>
                  </div>
                </div>
              </div>

              <div>
                <a 
                  href="#booking" 
                  className="w-full bg-[#111111] text-white font-black uppercase py-4 text-center block border-3 border-[#111111] destijl-shadow-sm hover:bg-[#DC2626] transition-colors text-xs tracking-wider"
                >
                  Request Monograph Portfolio PDF
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DE STIJL MANIFESTO QUOTE SECTION */}
      <section id="manifesto" className="py-24 bg-[#EAB308] border-b-3 border-[#111111] relative overflow-hidden">
        
        {/* Geometric accent blocks in background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626] border-b-3 border-l-3 border-[#111111] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-48 bg-[#2563EB] border-t-3 border-r-3 border-[#111111] opacity-20 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <div className="inline-block bg-[#111111] text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 border-2 border-[#111111] mb-8 destijl-shadow-sm">
            De Stijl Manifesto VII
          </div>

          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-8">
            &quot;The reduction of form and color to the universal: straight lines and primary rectangles acting in absolute equilibrium.&quot;
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-[#DC2626] border-2 border-[#111111]"></div>
            <span className="font-black uppercase tracking-widest text-sm">&mdash; Theo van Doesburg &amp; Maarten van Doesburg</span>
            <div className="w-8 h-8 bg-[#2563EB] border-2 border-[#111111]"></div>
          </div>
        </div>
      </section>

      {/* EXHIBITION SCHEDULE & TIMELINE */}
      <section id="exhibitions" className="py-20 bg-[#FAFAFA] border-b-3 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-block bg-[#DC2626] text-white text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-[#111111] mb-3">
                Calendar 2025 — 2026
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
                Exhibition Schedule
              </h2>
            </div>
            <p className="text-zinc-600 font-medium max-w-md text-sm">
              Upcoming gallery retrospectives and permanent collection installations across Europe.
            </p>
          </div>

          <div className="space-y-4">
            {EXHIBITIONS.map((ex, idx) => {
              const statusBg = 
                ex.status === 'Current' ? 'bg-[#DC2626] text-white' :
                ex.status === 'Upcoming' ? 'bg-[#EAB308] text-[#111111]' : 'bg-zinc-200 text-zinc-700';

              return (
                <div 
                  key={idx}
                  className="bg-white border-3 border-[#111111] destijl-shadow p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:translate-x-1 transition-transform"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <div className="w-14 h-14 bg-[#111111] text-white font-black text-xl flex items-center justify-center border-2 border-[#111111] shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                          <Calendar size={14} /> {ex.date}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 border border-[#111111] ${statusBg}`}>
                          {ex.status}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-1">{ex.title}</h3>
                      <p className="text-sm font-semibold text-zinc-700 flex items-center gap-1">
                        <MapPin size={14} className="text-[#DC2626]" /> {ex.venue}, {ex.city}
                      </p>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="#booking" 
                      className="bg-[#FAFAFA] text-[#111111] font-black uppercase text-xs tracking-wider px-6 py-3 border-3 border-[#111111] destijl-shadow-sm hover:bg-[#111111] hover:text-white transition-colors block text-center"
                    >
                      Request Pass
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOOKING & COMMISSION INQUIRY FORM */}
      <section id="booking" className="py-20 bg-white border-b-3 border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 border-3 border-[#111111] destijl-shadow bg-[#FAFAFA]">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-[#111111] text-white flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-[#111111]">
              <div>
                <div className="inline-block bg-[#EAB308] text-[#111111] text-xs font-black uppercase tracking-widest px-3 py-1 border-2 border-white mb-6">
                  Direct Commission
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 leading-tight">
                  Initiate an Assignment or Acquisition.
                </h2>
                <p className="text-zinc-300 font-medium text-sm leading-relaxed mb-8">
                  Available for architectural commissions, editorial spreads, gallery prints acquisition, and spatial art direction world-wide.
                </p>

                <div className="space-y-4 font-bold text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#DC2626] border-2 border-white flex items-center justify-center">
                      <Mail size={16} />
                    </div>
                    <span>studio@vandoesburg-photo.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2563EB] border-2 border-white flex items-center justify-center">
                      <Phone size={16} />
                    </div>
                    <span>+31 (0) 20 491 8820</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#EAB308] text-[#111111] border-2 border-white flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <span>Keizersgracht 412, Amsterdam</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t-2 border-zinc-800">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Response time</span>
                <span className="font-black text-sm uppercase text-white">Within 24 business hours</span>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 bg-[#2563EB] text-white border-3 border-[#111111] flex items-center justify-center mb-6 destijl-shadow-sm">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-3">Inquiry Received</h3>
                  <p className="text-zinc-600 font-medium max-w-md text-sm mb-8">
                    Thank you, {formData.name}. Your inquiry regarding <span className="font-bold text-[#111111]">{formData.service}</span> has been logged into the studio schedule. We will contact you at <span className="font-bold text-[#111111]">{formData.email}</span> shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', service: 'Editorial Assignment', date: '', message: '' });
                    }}
                    className="bg-[#111111] text-white font-black uppercase text-xs tracking-wider px-8 py-3 border-3 border-[#111111] destijl-shadow-sm hover:bg-[#DC2626] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6">Commission / Booking Form</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-2">Your Name *</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Elena Rostova"
                        className="w-full bg-[#FAFAFA] border-3 border-[#111111] px-4 py-3 font-medium text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#DC2626]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="elena@architecture.org"
                        className="w-full bg-[#FAFAFA] border-3 border-[#111111] px-4 py-3 font-medium text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#DC2626]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-2">Service Type</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-[#FAFAFA] border-3 border-[#111111] px-4 py-3 font-medium text-sm focus:outline-none focus:bg-white"
                      >
                        <option>Editorial Assignment</option>
                        <option>Architectural Documentation</option>
                        <option>Limited Print Acquisition</option>
                        <option>Exhibition Collaboration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider mb-2">Target Date / Window</label>
                      <input 
                        type="text" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        placeholder="e.g. November 2025"
                        className="w-full bg-[#FAFAFA] border-3 border-[#111111] px-4 py-3 font-medium text-sm focus:outline-none focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider mb-2">Project Brief / Message</label>
                    <textarea 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe scope, spatial dimensions, or print preferences..."
                      className="w-full bg-[#FAFAFA] border-3 border-[#111111] px-4 py-3 font-medium text-sm focus:outline-none focus:bg-white"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#DC2626] text-white font-black uppercase py-4 border-3 border-[#111111] destijl-shadow hover:bg-[#111111] transition-colors text-sm tracking-wider flex items-center justify-center gap-2"
                  >
                    Transmit Inquiry <ArrowUpRight size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-white border-t-3 border-[#111111] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#DC2626] border-3 border-white flex items-center justify-center text-white font-black text-xl">
                M
              </div>
              <span className="font-black text-lg tracking-wider">MAARTEN VAN DOESBURG</span>
            </div>
            <p className="text-zinc-400 font-medium text-sm max-w-sm mb-6 leading-relaxed">
              Practicing uncompromising Neo-Plasticist photography in strict adherence to the horizontal and vertical grid principles established in 1917.
            </p>
            <div className="flex gap-3">
              {/* Custom SVG Social Icons */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-white text-[#111111] border-2 border-white flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-white text-[#111111] border-2 border-white flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 bg-white text-[#111111] border-2 border-white flex items-center justify-center hover:bg-[#EAB308] hover:text-[#111111] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wider text-sm mb-4 text-[#EAB308]">Navigation</h4>
            <ul className="space-y-2 font-medium text-sm text-zinc-300">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery Archive</a></li>
              <li><a href="#spotlight" className="hover:text-white transition-colors">Spotlight Series</a></li>
              <li><a href="#manifesto" className="hover:text-white transition-colors">De Stijl Manifesto</a></li>
              <li><a href="#exhibitions" className="hover:text-white transition-colors">Exhibition Schedule</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Commission Inquiry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-wider text-sm mb-4 text-[#DC2626]">Gallery Space</h4>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed mb-4">
              Keizersgracht 412<br />
              1016 GC Amsterdam<br />
              Netherlands
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] block">Visits by appointment only</span>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
          <div>&copy; {currentYear} Maarten van Doesburg. All rights reserved.</div>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <span className="text-[#DC2626]">■ Red</span>
            <span className="text-[#EAB308]">■ Yellow</span>
            <span className="text-[#2563EB]">■ Blue</span>
            <span className="text-white">■ White &amp; Black</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
