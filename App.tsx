import React, { useState, useEffect } from 'react';
import { ChevronUp, ArrowRight, BookOpen, Shield, Download, Mail, Terminal, Database, Key } from 'lucide-react';
import { BOOKS, LORE_ITEMS, CHARACTERS, STARTER_PACK, BIO_TEXT, BIO_QUOTE, DOWNLOADS } from './constants';
import { Timeline } from './components/Timeline';
import { GrimoireModal } from './components/GrimoireModal';
import { Book as BookType } from './types';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLoreTab, setActiveLoreTab] = useState(LORE_ITEMS[0]?.id || 'memory');
  const [activeBook, setActiveBook] = useState<BookType | null>(null);
  const [showStarterPack, setShowStarterPack] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#131314] text-[#e5e2e3] font-body selection:bg-[#2ddbde] selection:text-[#003738] antialiased overflow-x-hidden">
      
      {/* --- NAVIGATION --- */}
      <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-[#131314]/90 backdrop-blur-xl border-b border-[#353436]/50 py-4 shadow-2xl' : 'bg-transparent border-b border-transparent py-6'}`}>
        <nav className="flex justify-between items-center px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
          <div className="text-2xl font-headline italic tracking-wider text-[#e5e2e3] flex items-center gap-3">
            <div className="w-2 h-2 bg-[#2ddbde] rotate-45 animate-pulse"></div>
            Imperial X
          </div>
          <div className="hidden lg:flex items-center space-x-10">
            <button onClick={() => scrollTo('hero')} className="text-[#cabeff] border-b border-[#2ddbde] pb-1 font-bold font-label text-xs uppercase tracking-[0.2em]">The Hub</button>
            <button onClick={() => scrollTo('preface')} className="text-[#e5e2e3]/60 hover:text-[#e5e2e3] transition-colors font-label text-xs uppercase tracking-[0.2em] hover:bg-[#201f20] px-3 py-1.5">Preface</button>
            <button onClick={() => scrollTo('catalog')} className="text-[#e5e2e3]/60 hover:text-[#e5e2e3] transition-colors font-label text-xs uppercase tracking-[0.2em] hover:bg-[#201f20] px-3 py-1.5">Catalog</button>
            <button onClick={() => scrollTo('lore')} className="text-[#e5e2e3]/60 hover:text-[#e5e2e3] transition-colors font-label text-xs uppercase tracking-[0.2em] hover:bg-[#201f20] px-3 py-1.5">Lore</button>
            <button onClick={() => scrollTo('dossiers')} className="text-[#e5e2e3]/60 hover:text-[#e5e2e3] transition-colors font-label text-xs uppercase tracking-[0.2em] hover:bg-[#201f20] px-3 py-1.5">Dossiers</button>
            <button onClick={() => scrollTo('vault')} className="text-[#e5e2e3]/60 hover:text-[#e5e2e3] transition-colors font-label text-xs uppercase tracking-[0.2em] hover:bg-[#201f20] px-3 py-1.5">Vault</button>
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={() => scrollTo('newsletter')} className="hidden md:flex items-center gap-2 text-xs font-label uppercase tracking-widest text-[#131314] bg-[#cabeff] px-5 py-2.5 hover:bg-[#e6deff] transition-colors">
              <Terminal size={14} /> Establish Uplink
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* --- 1. HERO SECTION --- */}
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30 grayscale contrast-150 mix-blend-luminosity" alt="Abstract cinematic background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyVJ4nhNF4OTb2dVsZMq3mnTJy0vgWfsKQBjQJH3JDpjYMpB7QvDUa4gDFTXwCybXcNSZx8vLgtuAA1y-zqiKEwYrmXFmb2MbOb8FERfsu-198kRgonCjYbOb1cPCt-fWRJI9Nd1LpdfZgtaClmdw1kbR_s6dryuOA8qpZng6oq9X-6-66RLZUxiUVkzhrwa8OX-sEb2iHm0WvDBEEKs1_3TCzdcagQuTllzBZgFP5Jlfuv5gZyjsTEskGiSn8YgdZOEnLDnglhx9"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-[#131314]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#131314_100%)] opacity-80"></div>
          </div>
          
          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8 w-full">
            <div className="col-span-12 lg:col-span-8">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#31009d]/20 border-l-2 border-[#2ddbde] mb-8 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#2ddbde] rounded-full animate-ping"></span>
                <span className="font-label text-[10px] tracking-[0.3em] text-[#2ddbde] uppercase">Project: Veiled Realm // Status: Unsealed</span>
              </div>
              <h1 className="font-headline italic text-7xl md:text-8xl lg:text-[140px] leading-[0.85] mb-8 text-[#e5e2e3] drop-shadow-2xl">
                The Veiled <br/> <span className="text-[#cabeff]">Realm.</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-[#cec3d3] max-w-2xl mb-12 leading-relaxed border-l border-[#353436] pl-6">
                A story of rebellion, of love sharpened into a weapon, and of worlds rebuilt by choice instead of destiny. The archive is now open.
              </p>
              <div className="flex flex-wrap gap-6">
                <button onClick={() => scrollTo('vault')} className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-[#cabeff] to-[#9c88ff] text-[#1c0062] font-bold font-label tracking-widest uppercase text-xs hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(202,190,255,0.2)] flex items-center gap-3">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  <Database size={16} className="relative z-10" /> <span className="relative z-10">Access Starter Pack</span>
                </button>
                <button onClick={() => scrollTo('catalog')} className="px-8 py-4 border border-[#4c4451] hover:bg-[#2a2a2b] transition-colors font-bold font-label tracking-widest uppercase text-xs flex items-center gap-3">
                  <BookOpen size={16} /> View Catalog
                </button>
              </div>
            </div>
            
            <div className="hidden lg:flex col-span-4 flex-col justify-end items-end space-y-8 pb-12">
              <div className="text-right border-r-2 border-[#353436] pr-6">
                <span className="block font-label text-[10px] text-[#978d9d] tracking-[0.2em] uppercase mb-2">Author_ID</span>
                <span className="block font-headline italic text-3xl text-[#2ddbde]">Likhith C K</span>
              </div>
              <div className="text-right border-r-2 border-[#353436] pr-6">
                <span className="block font-label text-[10px] text-[#978d9d] tracking-[0.2em] uppercase mb-2">System_Integrity</span>
                <span className="block font-body text-xl text-[#cabeff]">99.9% // Stable</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. PREFACE / ABOUT SECTION --- */}
        <section id="preface" className="py-32 bg-[#1c1b1c] relative border-y border-[#353436]">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <span className="material-symbols-outlined text-5xl text-[#4c4451] mb-8 block">format_quote</span>
            <h2 className="font-headline italic text-4xl md:text-5xl text-[#e5e2e3] mb-10 leading-tight">
              "We were not born into the shadows. We were pushed into them by architects who feared the light of our memories."
            </h2>
            <div className="w-px h-24 bg-gradient-to-b from-[#2ddbde] to-transparent mx-auto mb-10"></div>
            <p className="font-body text-lg text-[#cec3d3] leading-relaxed mb-6 text-justify md:text-center">
              Welcome to the Veiled Archive. This repository contains the fragmented history of a world that was systematically erased. Here, memory is not just a record of the past—it is a weapon, a currency, and the ultimate threat to the established order. 
            </p>
            <p className="font-body text-lg text-[#cec3d3] leading-relaxed text-justify md:text-center">
              Imperial X presents a dark fantasy trilogy that explores the architecture of power, the cost of rebellion, and the intricate alliances forged in the darkest corners of the realm. Proceed with caution. The knowledge contained within these files is highly classified.
            </p>
          </div>
        </section>

        {/* --- 3. THE CATALOG (BOOKS) --- */}
        <section id="catalog" className="py-32 bg-[#131314]">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#353436] pb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2 h-2 bg-[#cabeff]"></span>
                  <span className="font-label text-xs tracking-[0.2em] text-[#cabeff] uppercase">The Trilogy</span>
                </div>
                <h2 className="font-headline italic text-5xl md:text-6xl text-[#e5e2e3]">The Catalog</h2>
              </div>
              <p className="font-body text-[#cec3d3] max-w-md text-lg border-l border-[#4c4451] pl-6">
                Three movements of power. From the first spark of discovery to the final architecture of absolute dominance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BOOKS.map((book, idx) => (
                <div key={book.id} onClick={() => setActiveBook(book)} className="group relative aspect-[3/4] overflow-hidden bg-[#201f20] border border-[#353436] cursor-pointer">
                  <img className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 ease-out" alt={`${book.title} cover`} src={book.coverUrl}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131314] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start">
                      <span className="font-headline italic text-7xl text-[#e5e2e3]/10 font-bold group-hover:text-[#cabeff]/20 transition-colors">0{idx + 1}</span>
                      <span className="px-3 py-1 bg-[#131314]/80 border border-[#4c4451] font-label text-[10px] uppercase tracking-widest text-[#2ddbde]">{book.subtitle}</span>
                    </div>
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-headline italic text-3xl mb-4 text-[#cabeff] group-hover:text-white transition-colors">{book.title}</h3>
                      <p className="text-[#cec3d3] font-body text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {book.description}
                      </p>
                      <button className="flex items-center gap-2 text-[#2ddbde] font-label text-xs uppercase tracking-[0.2em] group/btn">
                        Access File <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. LORE & WORLD BUILDING --- */}
        <section id="lore" className="py-32 bg-[#1c1b1c] border-y border-[#353436]">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-headline italic text-5xl text-[#e5e2e3] mb-8">The Archive</h2>
                <p className="font-body text-[#cec3d3] mb-10">
                  Classified intelligence regarding the fundamental laws, magic systems, and historical truths of the Veiled Realm. Select a node to decrypt.
                </p>
                <div className="flex flex-col space-y-2 h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  {LORE_ITEMS.map((item, idx) => (
                    <button 
                      key={item.id}
                      onClick={() => setActiveLoreTab(item.id)}
                      className={`text-left px-6 py-4 font-label text-xs tracking-widest uppercase transition-all border-l-2 ${activeLoreTab === item.id ? 'border-[#2ddbde] bg-[#2ddbde]/10 text-[#2ddbde]' : 'border-transparent text-[#978d9d] hover:bg-[#2a2a2b] hover:text-[#e5e2e3]'}`}
                    >
                      {String(idx + 1).padStart(2, '0')}. {item.term}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-8 bg-[#131314] border border-[#353436] p-8 md:p-12 relative overflow-hidden min-h-[400px]">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <Database size={120} />
                </div>
                
                {LORE_ITEMS.map((item) => (
                  activeLoreTab === item.id && (
                    <div key={item.id} className="relative z-10 animate-fade-in-up">
                      <span className="inline-block px-2 py-1 bg-[#93000a]/20 text-[#ffb4ab] font-label text-[10px] tracking-widest uppercase mb-6 border border-[#93000a]">
                        Universe: {item.universe.replace('-', ' ')}
                      </span>
                      <h3 className="font-headline italic text-4xl text-[#cabeff] mb-6">{item.term}</h3>
                      <p className="font-body text-[#cec3d3] text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                        {item.definition}
                      </p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. DOSSIERS (CHARACTERS) --- */}
        <section id="dossiers" className="py-32 bg-[#131314]">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="text-center mb-20">
              <h2 className="font-headline italic text-5xl text-[#e5e2e3] mb-4">Target Dossiers</h2>
              <div className="w-16 h-px bg-[#2ddbde] mx-auto mb-6"></div>
              <p className="font-body text-[#cec3d3] max-w-2xl mx-auto">Key figures identified within the current cycle of rebellion.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CHARACTERS.map((char) => (
                <div key={char.id} className="bg-[#1c1b1c] border border-[#353436] p-6 hover:border-[#cabeff] transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-headline italic text-2xl text-[#e5e2e3] group-hover:text-[#cabeff] transition-colors">{char.name}</span>
                    <span className="material-symbols-outlined text-[#4c4451] group-hover:text-[#2ddbde] transition-colors">fingerprint</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between border-b border-[#353436] pb-2">
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#978d9d]">Designation</span>
                      <span className="font-body text-sm text-[#e5e2e3]">{char.role}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#353436] pb-2">
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#978d9d]">Origin</span>
                      <span className="font-body text-sm text-[#2ddbde] truncate max-w-[120px]" title={char.bookTitle}>{char.bookTitle}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#353436] pb-2">
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#978d9d]">Series</span>
                      <span className="font-body text-sm text-[#cabeff] capitalize">{char.series.replace('-', ' ')}</span>
                    </div>
                  </div>
                  <p className="font-body text-sm text-[#cec3d3] leading-relaxed italic">
                    "{char.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 6. TIMELINE --- */}
        <Timeline />

        {/* --- 7. THE VAULT (BENTO GRID) --- */}
        <section id="vault" className="py-32 bg-[#131314]">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="mb-16">
              <h2 className="font-headline italic text-5xl text-[#e5e2e3] mb-4">The Vault</h2>
              <p className="font-body text-[#cec3d3] max-w-xl">Restricted access area. Download classified starter packs, high-resolution maps, and encrypted author notes.</p>
            </div>

            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-auto lg:h-[500px]">
              
              {/* Main Vault Item */}
              <div className="col-span-12 lg:col-span-8 row-span-2 bg-[#1c1b1c] border border-[#353436] p-10 flex flex-col justify-between hover:border-[#cabeff] transition-colors group relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Shield size={300} />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#31009d]/20 text-[#cabeff] font-label text-[10px] tracking-widest uppercase mb-6 border border-[#31009d]">
                    <Key size={12} /> Clearance Granted
                  </div>
                  <h4 className="font-headline italic text-5xl text-[#e5e2e3] mb-4">{STARTER_PACK.title}</h4>
                  <p className="font-body text-[#cec3d3] max-w-md text-lg leading-relaxed mb-8">
                    {STARTER_PACK.description}
                  </p>
                </div>
                <button onClick={() => setShowStarterPack(true)} className="relative z-10 self-start overflow-hidden group px-8 py-4 bg-[#e5e2e3] text-[#131314] font-bold font-label tracking-widest uppercase text-xs hover:bg-[#cabeff] transition-colors flex items-center gap-3">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  <Download size={16} className="relative z-10" /> <span className="relative z-10">Access Files</span>
                </button>
              </div>
              
              {/* Secondary Vault Items */}
              <div className="col-span-12 lg:col-span-4 row-span-2 flex flex-col gap-4">
                {DOWNLOADS.map((download) => (
                  <div key={download.id} className="flex-1 bg-[#201f20] border border-[#353436] p-6 flex flex-col justify-center hover:bg-[#2a2a2b] transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-headline italic text-xl text-[#cabeff]">{download.title}</h4>
                      <span className="material-symbols-outlined text-[#4c4451] group-hover:text-[#cabeff] transition-colors">
                        {download.type === 'PDF' ? 'picture_as_pdf' : 'image'}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#978d9d]">{download.type}</span>
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#2ddbde]">{download.size}</span>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </section>

        {/* --- 8. NEWSLETTER & AUTHOR NOTE --- */}
        <section id="newsletter" className="py-32 bg-[#1c1b1c] border-t border-[#353436]">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Newsletter */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-[#2ddbde]" size={24} />
                <h2 className="font-headline italic text-4xl text-[#e5e2e3]">Establish Uplink</h2>
              </div>
              <p className="font-body text-[#cec3d3] text-lg mb-8 leading-relaxed">
                The Architects monitor all standard channels. Join the encrypted mailing list to receive classified transmissions, release dates, and exclusive lore directly to your terminal.
              </p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your designation (email)..." 
                  className="flex-1 bg-[#131314] border border-[#4c4451] px-6 py-4 text-[#e5e2e3] font-body focus:outline-none focus:border-[#cabeff] transition-colors placeholder:text-[#4c4451]"
                  required
                />
                <button type="submit" className="relative overflow-hidden group px-8 py-4 bg-[#cabeff] text-[#1c0062] font-bold font-label tracking-widest uppercase text-xs hover:bg-[#e6deff] transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  <Mail size={16} className="relative z-10" /> <span className="relative z-10">Subscribe</span>
                </button>
              </form>
              <p className="font-label text-[10px] text-[#978d9d] mt-4 uppercase tracking-widest">
                * Zero spam. Unsubscribe at any time. Data encrypted.
              </p>
            </div>

            {/* Author Note */}
            <div className="bg-[#131314] border border-[#353436] p-10 relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4c4451] m-4"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#4c4451] m-4"></div>
              
              <div>
                <h3 className="font-label text-xs tracking-[0.3em] text-[#978d9d] uppercase mb-6">Author's Directive</h3>
                <p className="font-body text-[#cec3d3] leading-relaxed mb-6 italic">
                  "{BIO_QUOTE}"
                </p>
                <p className="font-body text-sm text-[#978d9d] leading-relaxed mb-8 line-clamp-4">
                  {BIO_TEXT}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2a2a2b] rounded-full flex items-center justify-center border border-[#4c4451]">
                  <span className="font-headline italic text-[#cabeff] text-xl">IX</span>
                </div>
                <div>
                  <h4 className="font-headline italic text-xl text-[#e5e2e3]">Imperial X</h4>
                  <span className="font-label text-[10px] uppercase tracking-widest text-[#2ddbde]">Creator & Architect</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* --- 9. FOOTER --- */}
      <footer className="bg-[#131314] border-t border-[#201f20]">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 w-full max-w-screen-2xl mx-auto gap-6">
          <div className="text-center md:text-left">
            <div className="font-headline italic text-2xl text-[#e5e2e3] mb-2">Imperial X</div>
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e5e2e3]/40">
              © 2026 IMPERIALX — ALL SECRETS RESERVED
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e5e2e3]/60 hover:text-[#cabeff] transition-colors duration-300" href="#">Twitter / X</a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e5e2e3]/60 hover:text-[#cabeff] transition-colors duration-300" href="#">Instagram</a>
            <a className="font-label text-[10px] uppercase tracking-[0.2em] text-[#e5e2e3]/60 hover:text-[#cabeff] transition-colors duration-300" href="mailto:reach@imperialxfiction.com">Contact</a>
          </div>

          <button 
            onClick={() => scrollTo('hero')}
            className="w-10 h-10 border border-[#353436] flex items-center justify-center text-[#978d9d] hover:text-[#cabeff] hover:border-[#cabeff] transition-colors rounded-full"
            aria-label="Scroll to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </footer>

      {/* --- MODALS --- */}
      {activeBook && (
        <GrimoireModal book={activeBook} onClose={() => setActiveBook(null)} />
      )}

      {showStarterPack && (
        <GrimoireModal book={STARTER_PACK} onClose={() => setShowStarterPack(false)} />
      )}
    </div>
  );
}
