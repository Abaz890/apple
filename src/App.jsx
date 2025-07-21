import React from 'react';
import './style.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndexPage from './pages/IndexPage';

const App = () => {
  return (
    <div className='w-full'> 
      <Navbar />
      <IndexPage />
      <Footer />
    </div>
  );
}

export default App;