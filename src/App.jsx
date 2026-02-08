import React, { useState } from 'react';
import HeartBackground from './components/HeartBackground';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import ValentineWeek from './components/ValentineWeek';
import Reasons from './components/Reasons';
import MessageGenerator from './components/MessageGenerator';
import Decision from './components/Decision';
import MusicToggle from './components/MusicToggle';
import Gatekeeper from './components/Gatekeeper';
import Footer from './components/Footer';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <main className="min-h-screen relative selection:bg-valentine-200 selection:text-valentine-800">
      {/* Locked State: Only show Gatekeeper */}
      {!isUnlocked && (
        <Gatekeeper onAccept={() => setIsUnlocked(true)} />
      )}

      {/* Unlocked State: Show full website */}
      {isUnlocked && (
        <>
          <HeartBackground />
          <MusicToggle autoPlay={true} />

          <div className="relative z-10 transition-opacity duration-1000">
            <Hero />
            <LoveLetter />
            <ValentineWeek />
            <Reasons />
            <MessageGenerator />
            <Decision />
            <Footer />
          </div>

          {/* Decorative Blur Orbs */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-valentine-100 rounded-full blur-[120px] opacity-50 pointer-events-none -z-10" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100 rounded-full blur-[120px] opacity-40 pointer-events-none -z-10" />
        </>
      )}
    </main>
  );
}

export default App;
