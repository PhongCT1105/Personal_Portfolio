const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 overflow-hidden">
      {/* Glitchy Background */}
      <div className="absolute inset-0 glitch-background"></div>

      {/* Glitchy Animated Header */}
      <h1
        className="text-6xl font-mono text-green-400 glitch relative z-10"
        data-text="Loading..."
      >
        Loading...
      </h1>

      {/* Terminal-like logs */}
      <div className="mt-6 font-mono text-green-300 text-lg relative z-10">
        <p>
          <span className="text-green-500">[INFO]</span> System initialization
          in progress...
        </p>
        <p>
          <span className="text-green-500">[INFO]</span> Loading assets...
        </p>
        <p className="animate-pulse">
          <span className="text-yellow-500">[WARNING]</span> Optimizing
          performance...
        </p>
      </div>

      {/* Glitchy Spinner */}
      <div className="relative flex items-center justify-center mt-12 w-32 h-32 z-10">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-green-500"></div>
        <div className="absolute flex items-center justify-center text-lg font-mono text-green-400 h-32 w-32">
          <code>{`<Loading />`}</code>
        </div>
      </div>

      {/* Flickering text */}
      <div className="mt-8 text-green-400 text-lg font-mono flicker relative z-10">
        Please wait while the system loads...
      </div>

      {/* Styles for Glitch Effects */}
      <style>{`
        /* Glitch effect for text */
        .glitch {
          position: relative;
          display: inline-block;
          animation: glitch 1.5s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          color: green;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
          animation: glitch-lines 1.5s infinite linear alternate-reverse;
        }
        .glitch::before {
          left: 3px;
          text-shadow: -3px 0 red;
        }
        .glitch::after {
          left: -3px;
          text-shadow: -3px 0 blue;
        }

        /* Keyframes for glitch effect */
        @keyframes glitch {
          0% { transform: translate(0); }
          10% { transform: translate(-3px, 3px); }
          20% { transform: translate(3px, -3px); }
          30% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          50% { transform: translate(0); }
          60% { transform: translate(3px, 3px); }
          70% { transform: translate(-3px, -3px); }
          80% { transform: translate(3px, 3px); }
          90% { transform: translate(-3px, -3px); }
          100% { transform: translate(0); }
        }

        @keyframes glitch-lines {
          0% { clip: rect(10px, 900px, 40px, 0); }
          25% { clip: rect(20px, 900px, 10px, 0); }
          50% { clip: rect(30px, 900px, 30px, 0); }
          75% { clip: rect(40px, 900px, 20px, 0); }
          100% { clip: rect(10px, 900px, 40px, 0); }
        }

        /* Glitchy background with more chaos */
        .glitch-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #000000, #1a1a1a, #333333, #000000);
          background-size: 400% 400%;
          animation: glitch-background 4s infinite linear, background-shift 1s infinite alternate;
        }

        /* Shifting and glitch effect for the background */
        @keyframes glitch-background {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes background-shift {
          0% {
            transform: translate(0px, 0px) skew(0deg);
          }
          25% {
            transform: translate(5px, -5px) skew(-0.5deg);
          }
          50% {
            transform: translate(-5px, 5px) skew(0.5deg);
          }
          75% {
            transform: translate(3px, -3px) skew(-0.2deg);
          }
          100% {
            transform: translate(0px, 0px) skew(0deg);
          }
        }

        /* Flicker animation for text */
        .flicker {
          animation: flicker 2s infinite alternate;
        }

        @keyframes flicker {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
