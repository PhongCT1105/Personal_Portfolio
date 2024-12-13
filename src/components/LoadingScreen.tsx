import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-solid mb-4"></div>
        <p className="text-xl font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
