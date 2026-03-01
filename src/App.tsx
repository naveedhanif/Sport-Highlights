import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronLeft, Search, Filter, X, Menu } from 'lucide-react';
import { CATEGORIES, VIDEOS } from './data';
import { Category, Video } from './types';

type Screen = 'splash' | 'categories' | 'videolist' | 'videodetail';

const ZC_LOGO = "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Zimbabwe_Cricket_%28logo%29.svg/500px-Zimbabwe_Cricket_%28logo%29.svg.png";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('categories');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setCurrentScreen('videolist');
    setIsDrawerOpen(false);
  };

  const handleVideoPlay = (video: Video) => {
    setPlayingVideo(video);
    setCurrentScreen('videodetail');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans overflow-hidden relative selection:bg-red-500/30">
      <AnimatePresence mode="wait">
        {currentScreen === 'splash' && (
          <SplashScreen key="splash" />
        )}
        {currentScreen === 'categories' && (
          <CategoriesScreen key="categories" onSelect={handleCategorySelect} onMenuClick={() => setIsDrawerOpen(true)} />
        )}
        {currentScreen === 'videolist' && (
          <VideoListScreen 
            key="videolist" 
            category={selectedCategory} 
            onBack={() => setCurrentScreen('categories')}
            onCategoryChange={setSelectedCategory}
            onPlay={handleVideoPlay}
            onMenuClick={() => setIsDrawerOpen(true)}
          />
        )}
        {currentScreen === 'videodetail' && playingVideo && (
          <VideoDetailScreen 
            key="videodetail"
            video={playingVideo}
            onBack={() => setCurrentScreen('videolist')}
          />
        )}
      </AnimatePresence>

      <SideDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onSelectCategory={handleCategorySelect} 
      />
    </div>
  );
}

function SplashScreen() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-white z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        className="relative z-10 flex flex-col items-center"
      >
        <img 
          src={ZC_LOGO} 
          alt="Zimbabwe Cricket" 
          className="w-48 h-48 object-contain mb-8 drop-shadow-2xl"
        />
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-gray-900 mb-4">
          CRIC<span className="text-red-600">HIGHLIGHTS</span>
        </h1>
        <p className="text-gray-500 tracking-widest uppercase text-sm font-medium">
          The Best Moments in Cricket
        </p>
      </motion.div>
    </motion.div>
  );
}

function ImageHero({ title, onBack, onMenuClick }: { title?: string, onBack?: () => void, onMenuClick?: () => void }) {
  return (
    <div className="relative w-full h-64 md:h-80 shrink-0">
      <img 
        src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1920&q=80"
        alt="Stadium"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Top Nav */}
      <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between text-white z-10">
        {onBack ? (
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
        ) : onMenuClick ? (
          <button onClick={onMenuClick} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-10" />
        )}
        
        <span className="text-lg md:text-xl font-serif tracking-widest text-white drop-shadow-md">
          {title || 'ZIMBABWE CRICKET'}
        </span>
        
        {onBack && onMenuClick ? (
          <button onClick={onMenuClick} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Center Logo */}
      <div className="absolute inset-0 flex items-center justify-center pt-8">
        <img 
          src={ZC_LOGO}
          alt="ZC Logo"
          className="h-32 md:h-40 object-contain drop-shadow-2xl filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

function CategoriesScreen({ onSelect, onMenuClick }: { onSelect: (c: Category) => void, onMenuClick: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col bg-gray-100 pb-12"
    >
      <ImageHero onMenuClick={onMenuClick} />
      <div className="flex-1 bg-white -mt-6 rounded-t-3xl relative z-20 px-4 pt-8 pb-12 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">Explore Categories</h2>
          </header>

          <div className="flex flex-col gap-4">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => onSelect(cat.name)}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
              >
                <img src={ZC_LOGO} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <h3 className="flex-1 text-center font-serif text-base md:text-lg font-medium text-gray-900 px-4">
                  {cat.name}
                </h3>
                <img src={ZC_LOGO} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoListScreen({ 
  category, 
  onBack, 
  onCategoryChange,
  onPlay,
  onMenuClick
}: { 
  category: Category; 
  onBack: () => void;
  onCategoryChange: (c: Category) => void;
  onPlay: (v: Video) => void;
  onMenuClick: () => void;
}) {
  const filteredVideos = category === 'All' 
    ? VIDEOS 
    : VIDEOS.filter(v => v.category === category);

  const allCategories: Category[] = ['All', ...CATEGORIES.map(c => c.name)];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex flex-col bg-gray-100"
    >
      <ImageHero onBack={onBack} onMenuClick={onMenuClick} />

      <div className="flex-1 bg-white -mt-6 rounded-t-3xl relative z-20 px-4 pt-6 pb-12 shadow-[0_-10px_20px_rgba(0,0,0,0.1)]">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-4">
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat 
                    ? 'bg-red-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  key={video.id}
                  onClick={() => onPlay(video)}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
                >
                  <img src={ZC_LOGO} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                  <h3 className="flex-1 text-center font-serif text-sm md:text-base font-medium text-gray-900 px-4 leading-snug">
                    {video.title}
                  </h3>
                  <img src={ZC_LOGO} alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredVideos.length === 0 && (
              <div className="py-20 text-center text-gray-500">
                No videos found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoDetailScreen({ video, onBack }: { video: Video; onBack: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen flex flex-col bg-gray-100 overflow-y-auto"
    >
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors text-gray-700"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-serif font-bold text-gray-900 flex-1 truncate">Now Playing</h2>
        </div>
      </header>

      <div className="flex-1 max-w-5xl mx-auto w-full p-4 md:p-6 flex flex-col gap-6 pb-20">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-xl relative"
        >
          {video.url.includes('vimeo.com') ? (
            <iframe 
              src={video.url} 
              className="w-full h-full" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <video 
              src={video.url} 
              controls 
              autoPlay 
              className="w-full h-full object-contain"
              poster={video.thumbnail}
            />
          )}
        </motion.div>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-col gap-6"
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 mb-3">{video.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium border border-red-200">
                {video.category}
              </span>
              <span>•</span>
              <span className="font-medium">{video.views} views</span>
              <span>•</span>
              <span className="font-medium">{video.duration}</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-serif font-bold mb-3 text-gray-900">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {video.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function SideDrawer({ 
  isOpen, 
  onClose, 
  onSelectCategory 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSelectCategory: (c: Category) => void; 
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-80 bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <span className="font-serif font-bold text-xl text-gray-900">Menu</span>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              <div className="px-6 mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">Categories</div>
              <div className="flex flex-col gap-1 px-3">
                <button 
                  onClick={() => onSelectCategory('All')}
                  className="px-4 py-3 rounded-xl text-left hover:bg-red-50 text-gray-900 font-serif font-medium transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                    <Play className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                  </div>
                  All Highlights
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.name}
                    onClick={() => onSelectCategory(cat.name)}
                    className="px-4 py-3 rounded-xl text-left hover:bg-red-50 text-gray-900 font-serif font-medium transition-colors flex items-center gap-4 group"
                  >
                    <div className={`w-10 h-10 rounded-full bg-gray-100 group-hover:bg-red-100 flex items-center justify-center transition-colors ${cat.color}`}>
                      <cat.icon className="w-5 h-5 group-hover:text-red-600" />
                    </div>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-center">
              <img src={ZC_LOGO} alt="ZC Logo" className="h-16 object-contain opacity-50 grayscale hover:grayscale-0 transition-all" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
