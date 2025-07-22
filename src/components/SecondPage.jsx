import React from 'react';

const SecondPage = () => {
  return (
    <div className='w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4'>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className='text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'>
          Innovation Redefined
        </h2>
        <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
          Experience the future of technology with our cutting-edge products designed to enhance your digital lifestyle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-4">Performance</h3>
            <p className="text-gray-400">Unmatched speed and efficiency in every task</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-4">Design</h3>
            <p className="text-gray-400">Sleek aesthetics meet functional excellence</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors duration-300">
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-400">Pushing boundaries of what's possible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;