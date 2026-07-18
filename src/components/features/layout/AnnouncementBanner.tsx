'use client';

import * as React from 'react';

interface AnnouncementBannerProps {
  onClose: () => void;
}

export const AnnouncementBanner = ({ onClose }: AnnouncementBannerProps) => {
  return (
    <div className="mx-8 mb-6 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] border border-[#E9E3FF] rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 select-none shadow-sm shadow-[#6366F1]/5">
      
      {/* Absolute Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-[#5B21B6]/60 hover:text-[#5B21B6] transition-colors cursor-pointer"
        aria-label="Close Announcement"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Left side content */}
      <div className="flex flex-col items-start gap-2.5 max-w-lg z-10">
        <span className="bg-[#EBE9FE] text-[#6D28D9] font-extrabold text-[9px] tracking-widest px-2.5 py-1 rounded-md">
          NEW UPDATE
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E1B4B] tracking-tight leading-tight">
          PromptVault v2.0 is here! ✨
        </h3>
        <p className="text-xs sm:text-sm text-[#5B21B6]/80 leading-relaxed">
          Faster search, better filters, and a smoother experience to spark your creativity.
        </p>
        <button
          onClick={() => alert('Welcome to PromptVault v2.0! Enjoy our clean light mode interface, floating heart quick favorites, and settings panels.')}
          className="mt-2 flex items-center gap-1 bg-[#6366F1] hover:bg-[#4F46E5] text-white px-4 py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer"
        >
          <span>See What's New</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Right side Mock Browser UI Illustration */}
      <div className="relative w-64 h-36 border border-[#E2E8F0] bg-white rounded-xl shadow-md flex flex-col shrink-0 select-none overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
        {/* Browser Top Header row */}
        <div className="h-7 border-b border-slate-100 px-3 flex items-center justify-between bg-slate-50/50">
          {/* Mock Window Controls dots */}
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 opacity-80" />
            <span className="w-2 h-2 rounded-full bg-yellow-400 opacity-80" />
            <span className="w-2 h-2 rounded-full bg-green-400 opacity-80" />
          </div>
          {/* Mock reload icon */}
          <span className="w-1.5 h-1.5 rounded-full border border-slate-300 border-t-transparent" />
        </div>

        {/* Browser Mock Search / Bar */}
        <div className="p-3 border-b border-slate-100 flex items-center justify-between gap-3 bg-white">
          <div className="flex-1 bg-slate-50 border border-slate-100 rounded-md h-6 flex items-center px-2 gap-1.5">
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="w-16 h-1.5 bg-slate-200 rounded" />
          </div>
          {/* Version badge */}
          <div className="px-2 py-0.5 bg-[#6366F1] text-white text-[9px] font-extrabold rounded leading-none shrink-0 shadow-sm shadow-[#6366F1]/10">
            v2.0
          </div>
        </div>

        {/* Browser Mini cards layout */}
        <div className="flex-1 p-2 bg-slate-50/50 flex gap-2 justify-center">
          {/* Mini Landscape Card */}
          <div className="w-[72px] bg-white border border-slate-100 rounded p-1 flex flex-col gap-1">
            <div className="h-6 bg-gradient-to-br from-[#93C5FD] to-[#3B82F6] rounded" />
            <span className="w-10 h-1 bg-slate-200 rounded self-start mt-0.5" />
          </div>

          {/* Mini Portrait Card */}
          <div className="w-[72px] bg-white border border-slate-100 rounded p-1 flex flex-col gap-1">
            <div className="h-6 bg-gradient-to-br from-[#FDBA74] to-[#F97316] rounded" />
            <span className="w-10 h-1 bg-slate-200 rounded self-start mt-0.5" />
          </div>

          {/* Mini Tech Card */}
          <div className="w-[72px] bg-white border border-slate-100 rounded p-1 flex flex-col gap-1">
            <div className="h-6 bg-gradient-to-br from-[#C084FC] to-[#8B5CF6] rounded animate-pulse" />
            <span className="w-10 h-1 bg-slate-200 rounded self-start mt-0.5" />
          </div>
        </div>

        {/* Bottom floating accent lightning badge */}
        <div className="absolute bottom-6 right-2 w-6 h-6 bg-[#6366F1] rounded-lg flex items-center justify-center text-white shadow shadow-[#6366F1]/25 animate-bounce">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

      </div>

    </div>
  );
};
