import React, { useState } from 'react';
import { unitLinesData } from '../data';
import { UnitLine, UnitEvolutionStep } from '../types';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

const Stat: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="flex justify-between text-sm">
        <span className="font-semibold text-gray-400">{label}:</span>
        <span className="text-gray-200">{value}</span>
    </div>
);


const UnitEvolutionDetails: React.FC<{ unit: UnitEvolutionStep }> = ({ unit }) => (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
        <h4 className="font-cinzel text-xl text-yellow-300">{unit.name} <span className="text-base text-gray-400">({unit.age})</span></h4>
        <p className="text-sm italic text-gray-400 mt-1 mb-3">{unit.description}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <Stat label="Vida" value={unit.stats.hp} />
            <Stat label="Ataque" value={unit.stats.attack} />
            <Stat label="Armadura" value={unit.stats.armor} />
            <Stat label="Alcance" value={unit.stats.range} />
            <Stat label="Velocidad" value={unit.stats.speed} />
            {unit.maxStats && <Stat label="Ataque Máx" value={unit.maxStats.attack} /> }
            {unit.maxStats && <Stat label="Armadura Máx" value={unit.maxStats.armor} /> }
        </div>
    </div>
);


const UnitLineDetails: React.FC<{ unitLine: UnitLine; onBack: () => void }> = ({ unitLine, onBack }) => (
    <div className="p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600 animate-fadeIn">
        <button onClick={onBack} className="flex items-center gap-2 mb-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            <ArrowLeftIcon />
            <span>Volver a la selección</span>
        </button>
        <h2 className="font-cinzel text-3xl text-yellow-400 mb-6">Línea de Evolución de {unitLine.baseName}</h2>
        <div className="space-y-4">
            {unitLine.evolutions.map(step => <UnitEvolutionDetails key={step.name} unit={step} />)}
        </div>
    </div>
);

const Units: React.FC = () => {
    const [selectedUnitLine, setSelectedUnitLine] = useState<UnitLine | null>(null);

    return (
        <div className="flex flex-col md:flex-row gap-6 h-full">
            <aside className="md:w-1/3 lg:w-1/4">
                <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg shadow-lg border border-gray-700 h-full">
                    <h2 className="font-cinzel text-2xl text-yellow-400 mb-4 text-center">Unidades Base</h2>
                    <ul className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
                        {unitLinesData.map((unitLine) => (
                            <li key={unitLine.id}>
                                <button
                                    onClick={() => setSelectedUnitLine(unitLine)}
                                    className={`w-full text-left p-3 rounded-md transition-all duration-200 ${selectedUnitLine?.id === unitLine.id ? 'bg-yellow-500 text-gray-900 font-bold' : 'bg-gray-700 hover:bg-yellow-500 hover:text-gray-900'}`}
                                >
                                    {unitLine.baseName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <main className="flex-1">
                {selectedUnitLine ? (
                    <UnitLineDetails unitLine={selectedUnitLine} onBack={() => setSelectedUnitLine(null)} />
                ) : (
                    <div className="flex items-center justify-center h-full p-6 bg-gray-700 bg-opacity-70 rounded-lg shadow-xl border border-gray-600">
                        <p className="text-xl text-gray-400">Selecciona una unidad base de la lista para ver su línea de evolución.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Units;
