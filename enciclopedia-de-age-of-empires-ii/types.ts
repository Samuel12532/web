export interface Civilization {
  id: string;
  name: string;
  style: string;
  bonuses: string[];
  teamBonus: string;
  uniqueUnit: string;
  uniqueTechs: {
    castle: string;
    imperial: string;
  };
  uniqueBuilding?: string;
}

export interface UnitStat {
  hp: number;
  attack: string;
  range: number;
  armor: string;
  speed: number;
}

export interface UnitEvolutionStep {
  name: string;
  age: string;
  description: string;
  stats: UnitStat;
  maxStats?: UnitStat;
}

export interface UnitLine {
  id: string;
  baseName: string;
  evolutions: UnitEvolutionStep[];
}

export interface Structure {
  id: string;
  name: string;
  image: string;
  hp: number;
  armor: string;
  function: string;
  creates?: string[];
  researches?: string[];
  upgradesTo?: string;
}
