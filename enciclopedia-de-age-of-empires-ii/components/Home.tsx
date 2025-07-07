import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-600">
        <h3 className="font-cinzel text-xl text-yellow-400 mb-3 border-b-2 border-yellow-500 pb-2">{title}</h3>
        <div className="text-gray-300 space-y-2">
            {children}
        </div>
    </div>
);

const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="text-center p-8 bg-black bg-opacity-20 rounded-lg">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-yellow-300 mb-4">
          Bienvenido a la Enciclopedia de Age of Empires II
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Un juego de estrategia en tiempo real (RTS) donde guías a una civilización a través de cuatro edades: Alta Edad Media, Edad Feudal, Edad de los Castillos y Edad Imperial para conquistar a tus enemigos.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="font-cinzel text-3xl text-center text-yellow-400">Mecánicas Principales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="Recolección de Recursos">
            <p>La base de tu imperio. Debes recolectar cuatro recursos principales: <strong>Madera</strong> para edificios y barcos, <strong>Comida</strong> para unidades y tecnologías, <strong>Oro</strong> para unidades avanzadas y mejoras, y <strong>Piedra</strong> para defensas como castillos y murallas.</p>
          </InfoCard>
          <InfoCard title="Construcción y Avance">
            <p>Construir edificios desbloquea nuevas unidades y tecnologías. Para avanzar de una edad a la siguiente, debes construir ciertos edificios clave de tu edad actual y pagar un costo de recursos, lo que te dará acceso a mejoras significativas.</p>
          </InfoCard>
          <InfoCard title="Combate Estratégico">
            <p>El combate sigue un principio de "piedra, papel o tijera":</p>
            <ul className="list-disc list-inside ml-2">
                <li><strong>Arqueros</strong> vencen a <strong>Infantería</strong>.</li>
                <li><strong>Caballería</strong> vence a <strong>Arqueros</strong>.</li>
                <li><strong>Piqueros</strong> (infantería) vencen a <strong>Caballería</strong>.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
