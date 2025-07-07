import React, { useState } from 'react';
import { civilizationsData } from '../data';
import { Civilization } from '../types';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

const CivilizationDetails: React.FC<{ civ: Civilization; onBack: () => void }> = ({ civ, onBack }) => (
    <div className="p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600 animate-fadeIn">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            <ArrowLeftIcon />
            <span>Volver a la selección</span>
        </button>
        <h2 className="font-cinzel text-3xl text-yellow-400 mb-2">{civ.name}</h2>
        <p className="italic text-gray-400 mb-6">{civ.style}</p>

        <div className="space-y-4">
            <div>
                <h3 className="font-bold text-lg text-yellow-300">Bonificaciones de Civilización</h3>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    {civ.bonuses.map((bonus, i) => <li key={i}>{bonus}</li>)}
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-lg text-yellow-300">Bonificación de Equipo</h3>
                <p className="mt-1 text-gray-300">{civ.teamBonus}</p>
            </div>
            <div>
                <h3 className="font-bold text-lg text-yellow-300">Unidad Única</h3>
                <p className="mt-1 text-gray-300">{civ.uniqueUnit}</p>
            </div>
            <div>
                <h3 className="font-bold text-lg text-yellow-300">Tecnologías Únicas</h3>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    <li><strong>Castillos:</strong> {civ.uniqueTechs.castle}</li>
                    <li><strong>Imperial:</strong> {civ.uniqueTechs.imperial}</li>
                </ul>
            </div>
            {civ.uniqueBuilding && (
                 <div>
                    <h3 className="font-bold text-lg text-yellow-300">Edificio Único</h3>
                    <p className="mt-1 text-gray-300">{civ.uniqueBuilding}</p>
                </div>
            )}
        </div>
    </div>
);

const Civilizations: React.FC = () => {
  const [selectedCiv, setSelectedCiv] = useState<Civilization | null>(null);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      <aside className="md:w-1/3 lg:w-1/4">
        <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg shadow-lg border border-gray-700 h-full">
          <h2 className="font-cinzel text-2xl text-yellow-400 mb-4 text-center">Civilizaciones</h2>
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
            {civilizationsData.map((civ) => (
              <li key={civ.id}>
                <button
                  onClick={() => setSelectedCiv(civ)}
                  className={`w-full text-left p-3 rounded-md transition-all duration-200 ${selectedCiv?.id === civ.id ? 'bg-yellow-500 text-gray-900 font-bold' : 'bg-gray-700 hover:bg-yellow-500 hover:text-gray-900'}`}
                >
                  {civ.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <main className="flex-1">
        {selectedCiv ? (
          <CivilizationDetails civ={selectedCiv} onBack={() => setSelectedCiv(null)} />
        ) : (
          <div className="flex items-center justify-center h-full p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600">
            <p className="text-xl text-gray-400">Selecciona una civilización de la lista para ver sus detalles.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Civilizations;
