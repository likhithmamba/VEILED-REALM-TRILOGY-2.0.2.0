import React, { useRef, useState, useEffect } from 'react';
import { TIMELINE_EPOCHS } from '../constants';
import { History, ArrowRight, Circle, Disc } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEpochClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full relative py-24 bg-[#131314] border-t border-[#353436] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2ddbde]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#cabeff]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline italic text-[#e5e2e3] mb-3 tracking-tight">THE AGES OF THE REALM</h2>
          <p className="text-[#978d9d] font-label text-[10px] uppercase tracking-widest font-bold">A History of Silence and Truth</p>
        </div>

        {/* Desktop Layout (Horizontal Carousel) */}
        <div className="hidden md:flex flex-col">
          {/* Timeline Bar */}
          <div className="relative h-[2px] w-full bg-[#353436] mb-16 flex justify-between items-center px-12">
            <div 
              className="absolute left-0 top-0 h-full bg-[#2ddbde] transition-all duration-500 shadow-[0_0_10px_#2ddbde]"
              style={{ width: `${(activeIndex / (TIMELINE_EPOCHS.length - 1)) * 100}%` }}
            />
            {TIMELINE_EPOCHS.map((epoch, idx) => (
              <button
                key={epoch.id}
                onClick={() => handleEpochClick(idx)}
                className={`relative z-10 w-4 h-4 rotate-45 transition-all duration-300 transform ${activeIndex === idx ? 'scale-150 bg-[#2ddbde] shadow-[0_0_15px_#2ddbde]' : 'bg-[#1c1b1c] border border-[#4c4451] hover:border-[#2ddbde]'} ${idx <= activeIndex ? 'bg-[#2ddbde]' : ''}`}
              >
                {activeIndex === idx && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-label text-[#2ddbde] whitespace-nowrap opacity-0 animate-fade-in-up tracking-widest uppercase">
                    {epoch.year}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Active Content Card */}
          <div className="relative h-[400px] w-full">
            {TIMELINE_EPOCHS.map((epoch, idx) => (
              <div 
                key={epoch.id}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  activeIndex === idx 
                    ? 'opacity-100 translate-x-0 scale-100 z-20' 
                    : activeIndex > idx 
                      ? 'opacity-0 -translate-x-20 scale-95 z-0' 
                      : 'opacity-0 translate-x-20 scale-95 z-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="w-full max-w-4xl bg-[#1c1b1c] border border-[#353436] p-12 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                      <History size={120} className="text-[#e5e2e3]" />
                    </div>
                    
                    <div className="relative z-10 flex gap-12 items-center">
                      <div className="w-1/3 text-right border-r border-[#353436] pr-12">
                        <span className="block text-6xl font-headline italic text-[#4c4451] font-bold opacity-50 mb-2">{idx + 1}</span>
                        <h3 className="text-3xl font-headline italic text-[#2ddbde]">{epoch.year}</h3>
                      </div>
                      <div className="w-2/3">
                        <h4 className="text-2xl font-headline italic text-[#e5e2e3] mb-6">{epoch.title}</h4>
                        <p className="text-[#cec3d3] font-body text-lg leading-relaxed font-normal">{epoch.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (Vertical Timeline) */}
        <div className="md:hidden space-y-8 relative pl-8 border-l border-[#353436] ml-4">
          {TIMELINE_EPOCHS.map((epoch, idx) => (
            <div 
              key={epoch.id}
              className={`relative p-6 bg-[#1c1b1c] border ${activeIndex === idx ? 'border-[#2ddbde] shadow-[0_0_20px_rgba(45,219,222,0.1)]' : 'border-[#353436]'} transition-all duration-300`}
              onClick={() => handleEpochClick(idx)}
            >
              {/* Connector Dot */}
              <div className={`absolute -left-[41px] top-8 w-6 h-6 rotate-45 border-4 border-[#131314] flex items-center justify-center transition-colors ${activeIndex === idx ? 'bg-[#2ddbde]' : 'bg-[#4c4451]'}`}>
                {activeIndex === idx && <div className="w-2 h-2 bg-white rotate-45 animate-pulse" />}
              </div>

              <span className="text-[10px] font-label text-[#2ddbde] tracking-widest uppercase mb-1 block">{epoch.year}</span>
              <h3 className="text-xl font-headline italic text-[#e5e2e3] mb-3">{epoch.title}</h3>
              <p className="text-sm text-[#cec3d3] font-body leading-relaxed font-normal">{epoch.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};