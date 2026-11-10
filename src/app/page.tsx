'use client';

import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  Send, 
  CheckCircle2, 
  Menu, 
  ExternalLink,
  BookOpen,
  Award,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Abstract' | 'Portrait' | 'Street';
  year: string;
  location: string;
  image: string;
  description: string;
  span: string; // Tailwind grid span
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'STRUCTURAL RHYTHM NO. 4',
    category: 'Architecture',
    year: '2024',
    location: 'Rotterdam, NL',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    description: 'A study in stark geometric intersection, capturing the brutalist cantilever of the Erasmus extension under stark noon light.',
    span: 'col-span-12 md:col-span-8 row-span-2'
  },
  {
    id: '2',
    title: 'PRIMARY CHROMATIC FIELD',
    category: 'Abstract',
    year: '2024',
    location: 'Berlin, DE',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop',
    description: 'Reduced color palette exploration focusing on primary wavelengths intersecting against concrete planes.',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: '3',
    title: 'THE ARCHITECTURAL GAZE',
    category: 'Portrait',
    year: '2023',
    location: 'Zurich, CH',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    description: 'Portrait of master structuralist Dr. Elena Rostova framed by her monumental glass atrium.',
    span: 'col-span-12 md:col-span-4 row-span-1'
  },
  {
    id: '4',
    title: 'VERTICAL AXIS & VOID',
    category: 'Architecture',
    year: '2024',
    location: 'Vienna, AT',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    description: 'The interplay of vertical stairwells creating infinite optical loops within minimalist residential blocks.',
    span: 'col-span-12 md:col-span-6 row-span-2'
  },
  {
    id: '5',
    title: 'URBAN GRID INTERSECTION',
    category: 'Street',
    year: '2023',
    location: 'Tokyo, JP',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
    description: 'Shinjuku pedestrian overpass reduced to strict orthogonal lines and monochrome shadows.',
    span: 'col-span-12 md:col-span-6 row-span-1'
  },
  {
    id: '6',
    title: 'SURFACE TENSION #9',
    category: 'Abstract',
    year: '2024',
    location: 'Amsterdam, NL',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a8ab73?q=80&w=800&auto=format&fit=crop',
    description: 'Macro photography of oxidized industrial steel plates mapped into abstract composition.',
    span: 'col-span-12 md:col-span-6 row-span-1'
  },
  {
    id: '7',
    title: 'MONOLITHIC HORIZON',
    category: 'Architecture',
    year: '2023',
    location: 'Copenhagen, DK',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    description: 'Harbor front cultural center contrasting sharp metallic facades against gray North Sea skies.',
    span: 'col-span-12 md:col-span-6 row-span-2'
  }
];

const EXHIBITIONS = [
  {
    year: '2025',
    title: 'NEO-PLASTIC VISIONS',
    venue: 'Stedelijk Museum of Modern Art',
    location: 'Amsterdam, Netherlands',
    type: 'Solo Exhibition'
  },
  {
    year: '2024',
    title: 'STRUCTURE & VOID',
    venue: 'Bauhaus Archive Museum',
    location: 'Berlin, Germany',
    type: 'Group Retrospective'
  },
  {
    year: '2024',
    title: 'THE ASYMMETRIC LENS',
    venue: 'Design Museum',
    location: 'London, United Kingdom',
    type: 'Solo Exhibition'
  },
  {
    year: '2023',
    title: 'ELEMENTARY FORMS',
    venue: 'MOMA Architecture Wing',
    location: 'New York, USA',
    type: 'International Showcase'
  }
];

const PUBLICATIONS = [
  {
    title: 'DE STIJL IN MODERN CONCRETE',
    publisher: 'Thames & Hudson',
    year: '2024',
    isbn: '978-0-500-29512-1'
  },
  {
    title: 'THE ORTHOGONAL GAZE',
    publisher: 'Lars Müller Publishers',
    year: '2022',
    isbn: '978-3-03778-654-2'
  }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architectural Commission',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredGallery = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const currentYear = 2025;

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#E5383B] selection:text-white border-8 border-black">
      
      {/* Top Banner / Ticker */}
      <div className="bg-black text-white px-4 py-2 text-xs font-mono tracking-widest uppercase flex justify-between items-center border-b-4 border-black overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#E5383B] font-bold">
            <span className="w-2.5 h-2.5 bg-[#E5383B] inline-block animate-pulse"></span>
            STATUS: AVAILABLE FOR 2025/2026 COMMISSIONS
          </span>
          <span className="hidden md:inline text-zinc-400">|</span>
          <span className="hidden md:inline text-zinc-300">ROTTERDAM &mdash; AMSTERDAM &mdash; ZURICH &mdash; TOKYO</span>
        </div>
        <div className="flex items-center gap-4 text-[#FACC15] font-bold">
          <span>NEO-PLASTICISM PORTFOLIO V2.5</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b-4 border-black">
        <div className="grid grid-cols-12 items-stretch">
          {/* Logo Box */}
          <div className="col-span-8 md:col-span-4 p-4 md:p-6 border-r-4 border-black bg-white flex items-center justify-between">
            <a href="#" className="group">
              <span className="text-xl md:text-2xl font-black tracking-tighter block text-black group-hover:text-[#E5383B] transition-colors">
                HENDRIK VANDERBILT
              </span>
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-[#1D4ED8] block">
                STRUCTURAL PHOTOGRAPHY
              </span>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex col-span-8 items-stretch font-mono text-sm font-bold">
            <a href="#gallery" className="flex-1 px-6 border-r-4 border-black flex items-center justify-center hover:bg-[#E5383B] hover:text-white transition-colors">
              01 {'//'} GALLERY
            </a>
            <a href="#statement" className="flex-1 px-6 border-r-4 border-black flex items-center justify-center hover:bg-[#1D4ED8] hover:text-white transition-colors">
              02 {'//'} PHILOSOPHY
            </a>
            <a href="#exhibitions" className="flex-1 px-6 border-r-4 border-black flex items-center justify-center hover:bg-[#FACC15] hover:text-black transition-colors">
              03 {'//'} EXHIBITIONS
            </a>
            <a href="#contact" className="flex-1 px-6 flex items-center justify-center bg-black text-white hover:bg-zinc-800 transition-colors">
              04 {'//'} INQUIRE
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="col-span-4 md:hidden flex items-center justify-center bg-[#FACC15] border-l-4 border-black">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full h-full p-4 flex items-center justify-center font-bold text-black"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-4 border-black font-mono font-bold">
            <a 
              href="#gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-4 border-b-2 border-black hover:bg-[#E5383B] hover:text-white"
            >
              01 {'//'} GALLERY
            </a>
            <a 
              href="#statement" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-4 border-b-2 border-black hover:bg-[#1D4ED8] hover:text-white"
            >
              02 {'//'} PHILOSOPHY
            </a>
            <a 
              href="#exhibitions" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-4 border-b-2 border-black hover:bg-[#FACC15] hover:text-black"
            >
              03 {'//'} EXHIBITIONS
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block p-4 bg-black text-white"
            >
              04 {'//'} INQUIRE
            </a>
          </div>
        )}
      </header>

      {/* Hero Section (De Stijl Grid Masterpiece) */}
      <section className="grid grid-cols-12 border-b-4 border-black">
        {/* Left Column - Hero Typography & Statement */}
        <div className="col-span-12 lg:col-span-7 p-6 md:p-12 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-between bg-white">
          <div className="space-y-6">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold tracking-widest">
              PORTFOLIO ARCHIVE {'//'} 2018&ndash;2025
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
              STRUCTURAL <br />
              <span className="text-[#E5383B] underline decoration-black decoration-4">VISIONARY</span> & <br />
              ARCHITECTURAL <br />
              <span className="text-[#1D4ED8]">PHOTOGRAPHER</span>
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-zinc-800">
              Transforming brutalist architecture and urban geometry into pristine Neo-Plastic compositions. Every frame is a study in primary color contrast, verticality, and raw structural tension.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t-4 border-black grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs font-bold">
            <div>
              <span className="text-zinc-500 block mb-1">LOCATION</span>
              <span>ROTTERDAM / WORLDWIDE</span>
            </div>
            <div>
              <span className="text-zinc-500 block mb-1">SPECIALTY</span>
              <span>BRUTALISM & ABSTRACT</span>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-zinc-500 block mb-1">RECOGNITION</span>
              <span>MOMA / STEDELIJK</span>
            </div>
          </div>
        </div>

        {/* Right Column - Mondrian Primary Color Blocks & Featured Preview */}
        <div className="col-span-12 lg:col-span-5 grid grid-rows-3 bg-white">
          {/* Row 1: Red Block */}
          <div className="bg-[#E5383B] p-8 text-white border-b-4 border-black flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-20 text-white font-black text-9xl select-none pointer-events-none">
              RED
            </div>
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-xs bg-black text-white px-2 py-0.5 font-bold">FOCUS 01</span>
              <Camera size={28} />
            </div>
            <div className="z-10">
              <h3 className="text-2xl font-black tracking-tight">PRIMARY CHROMATIC TENSION</h3>
              <p className="text-sm font-mono mt-1 opacity-90">Exploring color fields against concrete voids.</p>
            </div>
          </div>

          {/* Row 2: Yellow / Blue Split Block */}
          <div className="grid grid-cols-2 border-b-4 border-black">
            <div className="bg-[#FACC15] p-6 text-black border-r-4 border-black flex flex-col justify-between">
              <span className="font-mono text-xs bg-black text-[#FACC15] px-2 py-0.5 font-bold inline-block w-max">GEOMETRY</span>
              <div>
                <span className="text-3xl font-black block">100+</span>
                <span className="text-xs font-mono font-bold">EXHIBITED WORKS</span>
              </div>
            </div>
            <div className="bg-[#1D4ED8] p-6 text-white flex flex-col justify-between">
              <span className="font-mono text-xs bg-white text-[#1D4ED8] px-2 py-0.5 font-bold inline-block w-max">MONOGRAPH</span>
              <div>
                <span className="text-3xl font-black block">02</span>
                <span className="text-xs font-mono font-bold">PUBLISHED BOOKS</span>
              </div>
            </div>
          </div>

          {/* Row 3: Call to Action Box */}
          <div className="p-6 bg-white flex items-center justify-between">
            <div className="font-mono font-bold text-sm">
              READY TO COLLABORATE ON YOUR NEXT STRUCTURAL MONUMENT?
            </div>
            <a 
              href="#contact"
              className="bg-black text-white px-6 py-3 font-mono font-bold text-sm hover:bg-[#E5383B] transition-colors flex items-center gap-2"
            >
              <span>INQUIRE</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="border-b-4 border-black">
        {/* Gallery Header Bar */}
        <div className="bg-black text-white p-6 border-b-4 border-black flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[#FACC15] font-mono text-xs font-bold tracking-widest block mb-1">SECTION 01</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter">CURATED PORTFOLIO GALLERY</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs font-bold">
            {['All', 'Architecture', 'Abstract', 'Portrait', 'Street'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border-2 border-white transition-colors ${
                  activeCategory === cat 
                    ? 'bg-[#E5383B] text-white border-[#E5383B]' 
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-12 p-4 md:p-6 lg:p-8 gap-6 bg-zinc-50">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative bg-white border-4 border-black cursor-pointer overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all ${item.span}`}
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-96 w-full overflow-hidden bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                
                {/* De Stijl Corner Overlay Badge */}
                <div className="absolute top-0 right-0 bg-[#E5383B] text-white font-mono text-xs font-bold px-3 py-1.5 border-l-4 border-b-4 border-black">
                  {item.category.toUpperCase()}
                </div>

                <div className="absolute bottom-0 left-0 bg-black text-white font-mono text-xs px-3 py-1.5 border-r-4 border-t-4 border-black">
                  {item.year} {'//'} {item.location}
                </div>
              </div>

              {/* Caption Box */}
              <div className="p-5 bg-white border-t-4 border-black flex justify-between items-center">
                <div>
                  <h3 className="font-black text-lg tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-600 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
                <div className="bg-[#FACC15] p-2 border-2 border-black group-hover:bg-[#E5383B] group-hover:text-white transition-colors">
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist Statement & Philosophy Section */}
      <section id="statement" className="grid grid-cols-12 border-b-4 border-black bg-white">
        <div className="col-span-12 lg:col-span-5 bg-[#1D4ED8] text-white p-8 md:p-12 lg:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs bg-white text-[#1D4ED8] px-2.5 py-1 font-bold inline-block mb-6">
              SECTION 02 {'//'} ARTIST MANIFESTO
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6">
              &quot;THE CAMERA IS AN INSTRUMENT OF ORTHOGONAL TRUTH.&quot;
            </h2>
          </div>
          <div className="font-mono text-sm leading-relaxed space-y-4 opacity-95">
            <p>
              Inspired by the rigorous philosophies of Piet Mondrian and Gerrit Rietveld, my work strips away superfluous ornamentation to reveal the pure tectonic geometry underlying modern architecture.
            </p>
            <p className="font-bold text-[#FACC15]">
              &mdash; HENDRIK VANDERBILT, ROTTERDAM 2024
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-4 border-black p-6 bg-zinc-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-10 h-10 bg-[#E5383B] border-2 border-black flex items-center justify-center text-white mb-4 font-bold font-mono">
                01
              </div>
              <h3 className="font-black text-xl mb-2">RIGID COMPOSITION</h3>
              <p className="text-sm font-mono text-zinc-700">
                Every frame is structured on a strict grid, balancing asymmetric voids against heavy concrete masses.
              </p>
            </div>

            <div className="border-4 border-black p-6 bg-zinc-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="w-10 h-10 bg-[#FACC15] border-2 border-black flex items-center justify-center text-black mb-4 font-bold font-mono">
                02
              </div>
              <h3 className="font-black text-xl mb-2">CHROMATIC REDUCTION</h3>
              <p className="text-sm font-mono text-zinc-700">
                Monochrome foundations juxtaposed with precise primary red, blue, and yellow interventions.
              </p>
            </div>
          </div>

          <div className="border-4 border-black p-6 bg-black text-white">
            <h4 className="font-mono text-xs text-[#FACC15] font-bold mb-2">EQUIPMENT & METHODOLOGY</h4>
            <p className="text-sm font-mono text-zinc-300 leading-relaxed">
              Medium format digital sensors paired with ultra-low distortion tilt-shift optical glass. Developed with custom monochrome profiles calibrated for absolute tonal separation.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibitions & Publications Section */}
      <section id="exhibitions" className="grid grid-cols-12 border-b-4 border-black bg-zinc-50">
        {/* Left: Exhibitions */}
        <div className="col-span-12 lg:col-span-7 p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-black">
            <div>
              <span className="font-mono text-xs bg-[#E5383B] text-white px-2 py-0.5 font-bold">SECTION 03</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-1">EXHIBITIONS & SHOWCASES</h2>
            </div>
            <Award className="text-[#E5383B]" size={32} />
          </div>

          <div className="space-y-6">
            {EXHIBITIONS.map((ex, idx) => (
              <div key={idx} className="border-4 border-black p-5 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs bg-black text-white px-2 py-0.5 font-bold w-max">
                    {ex.year} {'//'} {ex.type.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-[#1D4ED8] font-bold flex items-center gap-1">
                    <MapPin size={14} /> {ex.location}
                  </span>
                </div>
                <h3 className="text-xl font-black">{ex.title}</h3>
                <p className="font-mono text-xs text-zinc-600 mt-1">{ex.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Publications */}
        <div className="col-span-12 lg:col-span-5 p-8 md:p-12 bg-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b-4 border-black">
              <div>
                <span className="font-mono text-xs bg-[#FACC15] text-black px-2 py-0.5 font-bold">MONOGRAPHS</span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-1">PUBLICATIONS</h2>
              </div>
              <BookOpen className="text-black" size={32} />
            </div>

            <div className="space-y-6">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="border-4 border-black p-5 bg-zinc-50">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-xs bg-black text-white px-2 py-0.5 font-bold">
                      {pub.year}
                    </span>
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      ISBN: {pub.isbn}
                    </span>
                  </div>
                  <h3 className="text-lg font-black">{pub.title}</h3>
                  <p className="font-mono text-xs text-[#E5383B] font-bold mt-1">
                    PUBLISHED BY {pub.publisher.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#FACC15] border-4 border-black">
            <h4 className="font-black text-lg mb-2">ACADEMIC & PRESS INQUIRIES</h4>
            <p className="font-mono text-xs text-zinc-900 leading-relaxed mb-4">
              For museum loan agreements, high-res press kits, or lecture bookings, please contact studio management directly.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-black text-white font-mono text-xs font-bold px-4 py-2 hover:bg-[#E5383B] transition-colors"
            >
              CONTACT MANAGEMENT &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Contact / Commission Form Section */}
      <section id="contact" className="grid grid-cols-12 border-b-4 border-black bg-white">
        <div className="col-span-12 lg:col-span-5 bg-black text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <div>
            <span className="font-mono text-xs bg-[#E5383B] text-white px-2.5 py-1 font-bold inline-block mb-6">
              SECTION 04 {'//'} COMMISSION DESK
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6">
              INITIATE A <br />
              <span className="text-[#FACC15]">COMMISSION</span> OR INQUIRY.
            </h2>
            <p className="font-mono text-sm text-zinc-300 leading-relaxed">
              Available for architectural documentation, corporate headquarters portfolio capture, museum exhibitions, and fine art print acquisitions.
            </p>
          </div>

          <div className="mt-12 space-y-4 font-mono text-xs">
            <div className="p-4 border-2 border-zinc-800 bg-zinc-900">
              <span className="text-[#FACC15] block font-bold mb-1">STUDIO LOCATION</span>
              <span>WILLEMSPLEIN 42, 3016 DR ROTTERDAM</span>
            </div>
            <div className="p-4 border-2 border-zinc-800 bg-zinc-900">
              <span className="text-[#1D4ED8] block font-bold mb-1">DIRECT CONTACT</span>
              <span>STUDIO@HENDRIKVANDERBILT.COM</span>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 p-8 md:p-12 lg:p-16 bg-white">
          {formSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 border-4 border-black bg-zinc-50 min-h-[400px]">
              <div className="w-16 h-16 bg-[#E5383B] text-white border-4 border-black flex items-center justify-center mb-6">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-3xl font-black mb-2">TRANSMISSION RECEIVED</h3>
              <p className="font-mono text-sm text-zinc-700 max-w-md mb-6">
                Thank you, {formData.name}. Your inquiry regarding &quot;{formData.projectType}&quot; has been logged into the studio queue. We will review and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Architectural Commission', message: '' });
                }}
                className="bg-black text-white font-mono text-xs font-bold px-6 py-3 hover:bg-[#E5383B] transition-colors"
              >
                SEND ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <h3 className="text-2xl font-black mb-6 pb-2 border-b-4 border-black">PROJECT SPECIFICATION FORM</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs font-bold mb-2">FULL NAME / ORGANIZATION *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. OMA Architects / M. Rem"
                    className="w-full p-4 border-4 border-black font-mono text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs font-bold mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@firm.com"
                    className="w-full p-4 border-4 border-black font-mono text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold mb-2">PROJECT CATEGORY</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full p-4 border-4 border-black font-mono text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                >
                  <option value="Architectural Commission">Architectural Commission</option>
                  <option value="Fine Art Print Acquisition">Fine Art Print Acquisition</option>
                  <option value="Museum / Exhibition Loan">Museum / Exhibition Loan</option>
                  <option value="Editorial & Monograph">Editorial & Monograph</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold mb-2">PROJECT DETAILS & TIMELINE *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe building scope, location, and desired completion window..."
                  className="w-full p-4 border-4 border-black font-mono text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#E5383B] text-white p-5 font-mono font-bold text-base border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all flex items-center justify-center gap-3"
              >
                <Send size={18} />
                <span>TRANSMIT COMMISSION INQUIRY</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8">
          <div className="bg-white border-8 border-black max-w-5xl w-full max-h-[90vh] flex flex-col shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] overflow-hidden">
            {/* Modal Header Bar */}
            <div className="bg-black text-white p-4 flex justify-between items-center border-b-4 border-black">
              <span className="font-mono text-xs font-bold text-[#FACC15]">
                ARCHIVE ITEM {'//'} {selectedImage.id} [{selectedImage.category.toUpperCase()}]
              </span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-[#E5383B] text-white p-1 border-2 border-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
              <div className="lg:col-span-8 bg-black flex items-center justify-center p-4 border-b-4 lg:border-b-0 lg:border-r-4 border-black min-h-[350px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="max-h-[60vh] w-full object-contain"
                />
              </div>

              <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between bg-white space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#1D4ED8] mb-2">
                    <MapPin size={14} /> {selectedImage.location} ({selectedImage.year})
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">{selectedImage.title}</h3>
                  <p className="font-mono text-sm text-zinc-700 leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t-4 border-black">
                  <div className="font-mono text-xs flex justify-between">
                    <span className="text-zinc-500 font-bold">EDITION:</span>
                    <span className="font-bold">AP 1/3 + 2 AP</span>
                  </div>
                  <div className="font-mono text-xs flex justify-between">
                    <span className="text-zinc-500 font-bold">MEDIUM:</span>
                    <span className="font-bold">Archival Pigment Print on Hahnem&uuml;hle</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      const contactSec = document.getElementById('contact');
                      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full bg-[#FACC15] text-black font-mono font-bold text-xs p-3 border-2 border-black hover:bg-[#E5383B] hover:text-white transition-colors"
                  >
                    INQUIRE ABOUT THIS PRINT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-black">
        <div className="grid grid-cols-12 border-b-4 border-black">
          <div className="col-span-12 md:col-span-4 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <span className="text-xl font-black tracking-tighter block mb-2">HENDRIK VANDERBILT</span>
            <p className="font-mono text-xs text-zinc-400">
              Structural vision & Neo-Plastic photography studio. Registered in Rotterdam, Netherlands.
            </p>
          </div>

          <div className="col-span-6 md:col-span-4 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black font-mono text-xs space-y-2">
            <span className="text-[#FACC15] font-bold block mb-3">QUICK NAVIGATION</span>
            <a href="#gallery" className="block hover:text-[#E5383B] transition-colors">01 {'//'} Gallery Archive</a>
            <a href="#statement" className="block hover:text-[#1D4ED8] transition-colors">02 {'//'} Artist Philosophy</a>
            <a href="#exhibitions" className="block hover:text-[#FACC15] transition-colors">03 {'//'} Exhibitions & Books</a>
            <a href="#contact" className="block text-[#E5383B] font-bold hover:underline">04 {'//'} Commission Desk</a>
          </div>

          <div className="col-span-6 md:col-span-4 p-8 font-mono text-xs space-y-2">
            <span className="text-[#1D4ED8] font-bold block mb-3">EXTERNAL ARCHIVES</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FACC15] transition-colors">
              <span>Instagram @vanderbilt_structure</span>
              <ExternalLink size={12} />
            </a>
            <a href="https://archdaily.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FACC15] transition-colors">
              <span>ArchDaily Feature 2024</span>
              <ExternalLink size={12} />
            </a>
            <a href="https://stedelijk.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FACC15] transition-colors">
              <span>Stedelijk Museum Permanent Collection</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        <div className="p-6 text-center font-mono text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            &copy; {currentYear} HENDRIK VANDERBILT PHOTOGRAPHY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-4 text-[#FACC15]">
            <span>DE STIJL GRID SYSTEM</span>
            <span>{'//'}</span>
            <span>PURE NEO-PLASTICISM</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
