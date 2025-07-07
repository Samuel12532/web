import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Civilizations from './components/Civilizations';
import Units from './components/Units';
import Structures from './components/Structures';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/civilizations', label: 'Civilizaciones' },
  { path: '/units', label: 'Unidades' },
  { path: '/structures', label: 'Estructuras' },
];

const Header: React.FC = () => (
  <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex-shrink-0">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 tracking-wider">
            Enciclopedia de Age of Empires II
          </h1>
        </div>
        <nav className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-yellow-500 text-gray-900'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  </header>
);

const Footer: React.FC = () => (
    <footer className="bg-gray-900 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Enciclopedia AoE II. No afiliado con Microsoft o Forgotten Empires.</p>
            <p className="mt-2">
                <a href="https://www.ageofempires.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Sitio Oficial del Juego
                </a>
            </p>
        </div>
    </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://picsum.photos/seed/aobg/1920/1080')"}}>
        <div className="flex-grow bg-gray-800 bg-opacity-70">
            <Header />
            <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/civilizations" element={<Civilizations />} />
                    <Route path="/units" element={<Units />} />
                    <Route path="/structures" element={<Structures />} />
                </Routes>
            </main>
        </div>
        <Footer />
    </div>
  );
};

export default App;