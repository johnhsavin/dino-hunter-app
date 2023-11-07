import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import DinoCards from './components/DinoCards';
import Footer from './components/Footer';
import NewDiscovery from './pages/NewDiscovery';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-one' element={<NewDiscovery />} />
        <DinoCards />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
