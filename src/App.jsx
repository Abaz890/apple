import React from 'react';
import './style.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndexPage from './pages/IndexPage';
import SecondPage from './components/SecondPage';

const App = () => {
  return (
    <div className='w-full overflow-x-hidden'> 
      <Navbar />
      <IndexPage />
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;