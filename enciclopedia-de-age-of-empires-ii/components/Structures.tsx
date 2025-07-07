import React, { useState } from 'react';
import { structuresData } from '../data';
import { Structure } from '../types';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

const StructureDetails: React.FC<{ structure: Structure; onBack: () => void }> = ({ structure, onBack }) => (
    <div className="p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600 animate-fadeIn">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            <ArrowLeftIcon />
            <span>Volver a la selección</span>
        </button>
        <h2 className="font-cinzel text-3xl text-yellow-400 mb-4">{structure.name}</h2>
        
        <img src={structure.image} alt={`Imagen de ${structure.name}`} className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-gray-600" />

        <div className="grid md:grid-cols-2 gap-4 mb-6 text-center">
            <div className="bg-gray-800 p-2 rounded">
                <div className="text-sm text-gray-400">Puntos de Vida</div>
                <div className="text-lg font-bold text-white">{structure.hp}</div>
            </div>
            <div className="bg-gray-800 p-2 rounded">
                <div className="text-sm text-gray-400">Armadura</div>
                <div className="text-lg font-bold text-white">{structure.armor}</div>
            </div>
        </div>

        <div className="space-y-4">
            <div>
                <h3 className="font-bold text-lg text-yellow-300">Función Principal</h3>
                <p className="mt-1 text-gray-300">{structure.function}</p>
            </div>
            {structure.upgradesTo && (
                 <div>
                    <h3 className="font-bold text-lg text-yellow-300">Mejoras</h3>
                    <p className="mt-1 text-gray-300">{structure.upgradesTo}</p>
                </div>
            )}
            {structure.creates && structure.creates.length > 0 && (
                 <div>
                    <h3 className="font-bold text-lg text-yellow-300">Unidades que crea</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {structure.creates.map(unit => <span key={unit} className="bg-gray-600 text-gray-200 px-2 py-1 text-xs rounded-full">{unit}</span>)}
                    </div>
                </div>
            )}
            {structure.researches && structure.researches.length > 0 && (
                 <div>
                    <h3 className="font-bold text-lg text-yellow-300">Tecnologías que investiga</h3>
                     <div className="flex flex-wrap gap-2 mt-2">
                        {structure.researches.map(tech => <span key={tech} className="bg-gray-600 text-gray-200 px-2 py-1 text-xs rounded-full">{tech}</span>)}
                    </div>
                </div>
            )}
        </div>
    </div>
);


const Structures: React.FC = () => {
    const [selectedStructure, setSelectedStructure] = useState<Structure | null>(null);

    return (
        <div className="flex flex-col md:flex-row gap-6 h-full">
            <aside className="md:w-1/3 lg:w-1/4">
                <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg shadow-lg border border-gray-700 h-full">
                    <h2 className="font-cinzel text-2xl text-yellow-400 mb-4 text-center">Estructuras</h2>
                    <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                        {structuresData.map((structure) => (
                            <li key={structure.id}>
                                <button
                                    onClick={() => setSelectedStructure(structure)}
                                    className={`w-full text-left p-3 rounded-md transition-all duration-200 ${selectedStructure?.id === structure.id ? 'bg-yellow-500 text-gray-900 font-bold' : 'bg-gray-700 hover:bg-yellow-500 hover:text-gray-900'}`}
                                >
                                    {structure.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="flex-1">
                {selectedStructure ? (
                    <StructureDetails structure={selectedStructure} onBack={() => setSelectedStructure(null)} />
                ) : (
                    <div className="flex items-center justify-center h-full p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600">
                        <p className="text-xl text-gray-400">Selecciona una estructura de la lista para ver sus detalles.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Structures;
