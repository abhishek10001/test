'use client';

import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Filter, 
  Award,
  Compass
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Portrait' | 'Street' | 'Abstract';
  location: string;
  year: string;
  imageUrl: string;
  aspectRatio: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'COMPOSITION IN RED & CONCRETE',
    category: 'Architecture',
    location: 'Rotterdam, NL',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'col-span-1 md:col-span-2 row-span-2',
    description: 'A study in stark vertical geometry, capturing brutalist structural frames against pure atmospheric gradients.'
  },
  {
    id: '2',
    title: 'PRIMARY PROFILE NO. 4',
    category: 'Portrait',
    location: 'Berlin, DE',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 row-span-1',
    description: 'High-contrast studio portrait utilizing primary color gels and uncompromising compositional asymmetry.'
  },
  {
    id: '3',
    title: 'STREET INTERSECTION IX',
    category: 'Street',
    location: 'Tokyo, JP',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 row-span-2',
    description: 'Pedestrian flow intersected by rigorous urban scaffolding and neon signage gridlines.'
  },
  {
    id: '4',
    title: 'NEO-PLASTIC LIGHT STUDY',
    category: 'Abstract',
    location: 'Amsterdam, NL',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 md:col-span-2 row-span-1',
    description: 'Interlocking planes of sunlight and shadow casting stark mathematical forms across gallery walls.'
  },
  {
    id: '5',
    title: 'THE DIAGONAL FACADE',
    category: 'Architecture',
    location: 'Chicago, US',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 row-span-1',
    description: 'Deconstructivist glass skyscraper slicing through overcast skies.'
  },
  {
    id: '6',
    title: 'SILHOUETTE IN YELLOW',
    category: 'Portrait',
    location: 'Paris, FR',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 row-span-1',
    description: 'Monochrome portrait framed against a cadmium yellow architectural divider.'
  },
  {
    id: '7',
    title: 'URBAN RHYTHM #2',
    category: 'Street',
    location: 'New York, US',
    year: '2025',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 md:col-span-2 row-span-1',
    description: 'Subway grid dynamics captured at 1/1000th second shutter speed.'
  },
  {
    id: '8',
    title: 'PURE PLANE & VOID',
    category: 'Abstract',
    location: 'Zurich, CH',
    year: '2024',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    aspectRatio: 'col-span-1 row-span-2',
    description: 'Minimalist shadow play on minimalist white stucco facades.'
  }
];

export default function DeStijlPortfolio() {
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Architecture',
    budget: '$5,000 - $10,000',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const filteredGallery = activeFilter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#000000] selection:bg-[#E43D30] selection:text-white">
      
      {/* TOP HEADER / TICKER BAR */}
      <header className="border-stijl-b bg-black text-white px-4 py-2 text-xs md:text-sm font-mono tracking-widest flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 bg-[#E43D30] inline-block"></span>
          <span className="w-3 h-3 bg-[#FFD13B] inline-block"></span>
          <span className="w-3 h-3 bg-[#0A58CA] inline-block"></span>
          <span className="font-bold">PIET FRAMEWORKS / DE STIJL EST. {currentYear}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-zinc-400">ARCHITECTURAL &amp; PORTRAIT LENS</span>
          <a href="#contact" className="bg-[#E43D30] text-white px-3 py-1 font-bold hover:bg-white hover:text-black transition-colors">
            COMMISSION
          </a>
        </div>
      </header>

      {/* HERO SECTION - ASYMMETRIC MONDRIAN GRID */}
      <section className="border-stijl-b grid grid-cols-1 lg:grid-cols-12 bg-white">
        
        {/* Left Title Box */}
        <div className="lg:col-span-8 p-6 md:p-12 lg:p-16 border-stijl-b lg:border-stijl-b-0 lg:border-stijl-r flex flex-col justify-between bg-[#F8F9FA]">
          <div className="flex items-center gap-2 mb-8">
            <span className="h-4 w-12 bg-[#E43D30]"></span>
            <span className="font-mono text-xs tracking-widest font-bold">VOL. 01 / NEO-PLASTIC VISION</span>
          </div>

          <div className="my-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6">
              DE STIJL <br />
              <span className="text-[#E43D30] underline decoration-[#0A58CA] decoration-4">PHOTOGRAPHY</span>
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-2xl leading-relaxed text-zinc-800">
              Reducing visual reality to the absolute essentials of verticality, horizontality, and primary color equilibrium. Capturing architectural form and human silhouette with uncompromising geometric rigor.
            </p>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 items-center">
            <a 
              href="#gallery" 
              className="px-8 py-4 bg-black text-white font-mono font-bold text-sm border-4 border-black hover:bg-[#E43D30] transition-colors flex items-center gap-2"
            >
              EXPLORE ARCHIVE <ChevronRight size={18} />
            </a>
            <a 
              href="#manifesto" 
              className="px-8 py-4 bg-white text-black font-mono font-bold text-sm border-4 border-black hover:bg-[#FFD13B] transition-colors"
            >
              READ MANIFESTO
            </a>
          </div>
        </div>

        {/* Right Primary Color Composition Blocks */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 h-full">
          <div className="bg-[#E43D30] p-8 text-white border-stijl-b flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start font-mono text-xs">
              <span>RED_01</span>
              <Camera size={24} />
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">100%</div>
              <div className="text-sm font-bold uppercase">Primary Geometry</div>
            </div>
          </div>

          <div className="bg-[#FFD13B] p-8 text-black border-stijl-b flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start font-mono text-xs">
              <span>YELLOW_02</span>
              <Award size={24} />
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">AWARDED</div>
              <div className="text-sm font-bold uppercase">ArchDaily Lens 2024</div>
            </div>
          </div>

          <div className="bg-[#0A58CA] p-8 text-white flex flex-col justify-between min-h-[220px]">
            <div className="flex justify-between items-start font-mono text-xs">
              <span>BLUE_03</span>
              <Compass size={24} />
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">GLOBAL</div>
              <div className="text-sm font-bold uppercase">Tokyo / Berlin / NY</div>
            </div>
          </div>
        </div>

      </section>

      {/* STATS / TICKER BANNER */}
      <div className="border-stijl-b bg-black text-white py-4 px-6 overflow-hidden">
        <div className="flex flex-wrap justify-around items-center gap-6 font-mono text-xs md:text-sm tracking-widest text-center">
          <div><span className="text-[#FFD13B] font-bold">12+</span> YEARS PRACTICE</div>
          <div className="hidden md:block w-2 h-2 bg-[#E43D30]"></div>
          <div><span className="text-[#E43D30] font-bold">45+</span> EXHIBITIONS</div>
          <div className="hidden md:block w-2 h-2 bg-[#FFD13B]"></div>
          <div><span className="text-[#0A58CA] font-bold">180+</span> ARCHITECTURAL COMMISSIONS</div>
          <div className="hidden md:block w-2 h-2 bg-white"></div>
          <div><span className="text-[#FFD13B] font-bold">3</span> MONOGRAPHS PUBLISHED</div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section id="gallery" className="border-stijl-b bg-[#F8F9FA]">
        
        {/* Gallery Header Bar */}
        <div className="border-stijl-b p-6 md:p-8 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 bg-[#0A58CA] inline-block"></span>
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-500">CURATED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">THE COMPOSITIONAL GRID</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <div className="flex items-center gap-1 mr-2 text-xs font-mono font-bold">
              <Filter size={14} /> FILTER:
            </div>
            {['All', 'Architecture', 'Portrait', 'Street', 'Abstract'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 font-mono text-xs font-bold border-2 border-black transition-all ${
                  activeFilter === cat 
                    ? 'bg-black text-white shadow-[4px_4px_0px_0px_#E43D30]' 
                    : 'bg-white text-black hover:bg-[#FFD13B]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Mondrian Modular Compartments) */}
        <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="border-stijl bg-white group cursor-pointer relative overflow-hidden flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#000000] transition-all duration-200"
            >
              {/* Image Frame Header */}
              <div className="border-stijl-b bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-xs">
                <span className="font-bold text-[#FFD13B]">{item.category.toUpperCase()}</span>
                <span className="text-zinc-400">{item.year} // {item.location}</span>
              </div>

              {/* Image Container with Hover Overlay */}
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-200">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                
                {/* Primary color corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-[#E43D30] border-l-4 border-b-4 border-black flex items-center justify-center text-white">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Image Footer / Details */}
              <div className="p-5 bg-white flex flex-col justify-between flex-1">
                <h3 className="text-lg font-black tracking-tight mb-2 group-hover:text-[#0A58CA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 font-sans line-clamp-2 mb-4">
                  {item.description}
                </p>
                
                <div className="pt-3 border-t-2 border-black flex justify-between items-center font-mono text-xs font-bold">
                  <span>VIEW COMPOSITION</span>
                  <span className="w-4 h-4 bg-[#FFD13B] border-2 border-black inline-flex items-center justify-center">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* MANIFESTO / ABOUT SECTION */}
      <section id="manifesto" className="border-stijl-b bg-white grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Manifesto Statement */}
        <div className="lg:col-span-7 p-8 md:p-16 border-stijl-b lg:border-stijl-b-0 lg:border-stijl-r flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#E43D30] inline-block"></span>
              <span className="font-mono text-xs font-bold tracking-widest">ARTIST MANIFESTO</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-8 leading-none">
              &ldquo;THE DESTRUCTION OF NATURAL FORM IN PURSUIT OF UNIVERSAL HARMONY.&rdquo;
            </h2>

            <div className="space-y-6 text-zinc-800 font-medium text-base leading-relaxed">
              <p>
                Founded on the principles of Neo-Plasticism established by Piet Mondrian and Theo van Doesburg, our photographic vision rejects sentimental ornamentation in favor of absolute clarity. Every frame is treated as a flat architectural plane where line, primary color, and negative space achieve equilibrium.
              </p>
              <p>
                Whether documenting brutalist architecture in Berlin or capturing sculptural portraits in Tokyo, our lens isolates the mathematical rhythm underpinning the chaotic physical world.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-4 border-black flex flex-wrap gap-6 items-center justify-between font-mono text-sm">
            <div>
              <div className="font-black">PIET_FRAMEWORKS</div>
              <div className="text-zinc-500 text-xs">LEAD PHOTOGRAPHER &amp; DIRECTOR</div>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-[#E43D30] border-2 border-black"></div>
              <div className="w-6 h-6 bg-[#FFD13B] border-2 border-black"></div>
              <div className="w-6 h-6 bg-[#0A58CA] border-2 border-black"></div>
            </div>
          </div>
        </div>

        {/* Right Info / Specifications Grid */}
        <div className="lg:col-span-5 grid grid-cols-1">
          <div className="p-8 border-stijl-b bg-[#FFD13B] flex flex-col justify-center">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-2">01 / EQUIPMENT SPECIFICATION</h3>
            <p className="text-lg font-black">Large Format Medium &amp; High-Resolution Sensor Arrays. Uncompromising optical sharpness.</p>
          </div>

          <div className="p-8 border-stijl-b bg-[#0A58CA] text-white flex flex-col justify-center">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-2">02 / ARCHITECTURAL APPROACH</h3>
            <p className="text-lg font-black">Orthographic perspective correction, strict vertical alignment, pure monochromatic tones.</p>
          </div>

          <div className="p-8 bg-[#E43D30] text-white flex flex-col justify-center">
            <h3 className="font-mono text-xs font-bold tracking-widest mb-2">03 / EXHIBITIONS &amp; CLIENTS</h3>
            <p className="text-lg font-black">Stedelijk Museum, Vitra Design Museum, Architectural Digest, Foster + Partners.</p>
          </div>
        </div>

      </section>

      {/* COMMISSION & BOOKING CONTACT FORM */}
      <section id="contact" className="border-stijl-b bg-[#F8F9FA] grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Contact Info */}
        <div className="lg:col-span-5 p-8 md:p-16 border-stijl-b lg:border-stijl-b-0 lg:border-stijl-r bg-black text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#FFD13B] inline-block"></span>
              <span className="font-mono text-xs font-bold tracking-widest text-zinc-400">COMMISSION INQUIRIES</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              INITIATE <br />
              <span className="text-[#FFD13B]">PROJECT</span>
            </h2>

            <p className="text-zinc-300 mb-12 leading-relaxed">
              Available for international architectural commissions, editorial features, fine art prints, and high-end portraiture sessions.
            </p>

            <div className="space-y-6 font-mono text-sm">
              <div className="flex items-center gap-4 p-4 border-2 border-white/20 bg-white/5">
                <Mail className="text-[#FFD13B]" size={20} />
                <div>
                  <div className="text-xs text-zinc-400">DIRECT EMAIL</div>
                  <div className="font-bold">studio@pietframeworks.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border-2 border-white/20 bg-white/5">
                <Phone className="text-[#E43D30]" size={20} />
                <div>
                  <div className="text-xs text-zinc-400">STUDIO DESK</div>
                  <div className="font-bold">+31 20 555 0194</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border-2 border-white/20 bg-white/5">
                <MapPin className="text-[#0A58CA]" size={20} />
                <div>
                  <div className="text-xs text-zinc-400">PRIMARY HEADQUARTERS</div>
                  <div className="font-bold">Prinsengracht 412, Amsterdam</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800 text-xs font-mono text-zinc-400">
            SECURE TRANSMISSION ENCRYPTED VIA DE STIJL PROTOCOL
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-7 p-8 md:p-16 bg-white flex flex-col justify-center">
          {formSubmitted ? (
            <div className="p-12 border-stijl bg-[#FFD13B] text-center flex flex-col items-center justify-center space-y-4">
              <CheckCircle size={64} className="text-black" />
              <h3 className="text-3xl font-black tracking-tight">TRANSMISSION RECEIVED</h3>
              <p className="font-mono text-sm max-w-md">
                Thank you, <span className="font-bold">{formData.name}</span>. Your commission request regarding <span className="font-bold">{formData.projectType}</span> has been logged. Our studio will respond within 24 hours.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)}
                className="mt-6 px-6 py-3 bg-black text-white font-mono font-bold text-xs border-2 border-black hover:bg-[#E43D30] transition-colors"
              >
                SEND ANOTHER INQUIRY
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-[#E43D30] inline-block"></span>
                <span className="font-mono text-xs font-bold tracking-widest text-zinc-500">BOOKING FORM</span>
              </div>
              <h3 className="text-2xl font-black tracking-tight mb-6">PROJECT SPECIFICATION</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs font-bold mb-2">YOUR NAME *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 border-4 border-black bg-[#F8F9FA] font-medium focus:outline-none focus:bg-white focus:border-[#0A58CA] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold mb-2">EMAIL ADDRESS *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="elena@studio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full p-4 border-4 border-black bg-[#F8F9FA] font-medium focus:outline-none focus:bg-white focus:border-[#0A58CA] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs font-bold mb-2">PROJECT CATEGORY</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full p-4 border-4 border-black bg-[#F8F9FA] font-medium focus:outline-none focus:bg-white focus:border-[#0A58CA] transition-colors cursor-pointer"
                  >
                    <option value="Architecture">Architectural Documentation</option>
                    <option value="Portrait">Fine Art Portraiture</option>
                    <option value="Commercial">Commercial / Brand</option>
                    <option value="Exhibition">Exhibition Print Licensing</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs font-bold mb-2">ESTIMATED BUDGET</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full p-4 border-4 border-black bg-[#F8F9FA] font-medium focus:outline-none focus:bg-white focus:border-[#0A58CA] transition-colors cursor-pointer"
                  >
                    <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+ (Global Commission)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold mb-2">PROJECT DETAILS &amp; TIMELINE</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Describe the architectural structure, location, or portrait requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 border-4 border-black bg-[#F8F9FA] font-medium focus:outline-none focus:bg-white focus:border-[#0A58CA] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-black text-white font-mono font-bold text-sm border-4 border-black hover:bg-[#E43D30] transition-colors flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_#FFD13B]"
              >
                SUBMIT COMMISSION INQUIRY <Send size={18} />
              </button>
            </form>
          )}
        </div>

      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="border-stijl-thick bg-white max-w-5xl w-full max-h-[90vh] flex flex-col relative shadow-[16px_16px_0px_0px_#E43D30]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-black text-white px-6 py-4 flex justify-between items-center border-b-4 border-black">
              <div className="flex items-center gap-3 font-mono text-xs md:text-sm">
                <span className="w-3 h-3 bg-[#FFD13B] inline-block"></span>
                <span className="font-bold text-[#FFD13B]">{selectedImage.category.toUpperCase()}</span>
                <span className="text-zinc-400">/ {selectedImage.location} ({selectedImage.year})</span>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-[#E43D30] text-white p-2 border-2 border-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
              <div className="lg:col-span-8 bg-black flex items-center justify-center p-4">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title}
                  className="max-h-[70vh] w-auto object-contain border-2 border-white"
                />
              </div>

              <div className="lg:col-span-4 p-6 md:p-8 bg-[#F8F9FA] flex flex-col justify-between border-t-4 lg:border-t-0 lg:border-l-4 border-black">
                <div>
                  <div className="font-mono text-xs text-zinc-500 mb-2">COMPOSITION FILE</div>
                  <h3 className="text-2xl font-black tracking-tight mb-4">{selectedImage.title}</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed mb-6">{selectedImage.description}</p>
                  
                  <div className="space-y-3 font-mono text-xs border-t-2 border-black pt-4">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">ASPECT RATIO:</span>
                      <span className="font-bold">GOLDEN RECTANGLE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">COLOR SPACE:</span>
                      <span className="font-bold">RGB / CMYK PRIME</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">EDITION:</span>
                      <span className="font-bold">1 of 5 + 2 AP</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-4 border-black">
                  <a 
                    href="#contact"
                    onClick={() => setSelectedImage(null)}
                    className="w-full block py-3 bg-[#0A58CA] text-white text-center font-mono font-bold text-xs border-2 border-black hover:bg-black transition-colors"
                  >
                    INQUIRE ABOUT PRINT
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-black text-white border-t-4 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black">
          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div className="font-mono text-xs text-[#E43D30] font-bold mb-2">01 / PHILOSOPHY</div>
            <p className="text-sm text-zinc-300">
              True composition is born from the tension between straight lines and pure chromatic forces.
            </p>
          </div>

          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div className="font-mono text-xs text-[#FFD13B] font-bold mb-2">02 / ARCHIVE</div>
            <p className="text-sm text-zinc-300">
              All prints are museum-grade archival pigment on Hahnemühle Photo Rag with certificate of authenticity.
            </p>
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div className="font-mono text-xs text-[#0A58CA] font-bold mb-2">03 / SOCIAL CHANNELS</div>
            <div className="flex gap-4 font-mono text-xs">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD13B] underline">INSTAGRAM</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E43D30] underline">X / TWITTER</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A58CA] underline">BEHANCE</a>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-zinc-400">
          <div>&copy; {currentYear} PIET FRAMEWORKS. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-2">
            <span>DE STIJL NEO-PLASTICISM</span>
            <span className="w-2 h-2 bg-[#E43D30] inline-block"></span>
            <span className="w-2 h-2 bg-[#FFD13B] inline-block"></span>
            <span className="w-2 h-2 bg-[#0A58CA] inline-block"></span>
          </div>
        </div>
      </footer>

    </div>
  );
}
