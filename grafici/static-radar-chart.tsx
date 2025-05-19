import React from 'react';

const StaticRadarChart = () => {
  return (
    <svg viewBox="0 0 800 600" className="w-full">
      {/* Title */}
      <text x="400" y="30" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">
        Value Management nell'AI Distribuita in Sanità
      </text>
      <text x="400" y="55" textAnchor="middle" fontSize="14" fill="#64748b">
        Dimensioni di valore e potenziale trasformativo
      </text>
      
      {/* Radar Chart Background */}
      <circle cx="400" cy="300" r="200" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
      
      {/* Radar Concentric Circles */}
      <circle cx="400" cy="300" r="40" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
      <circle cx="400" cy="300" r="80" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
      <circle cx="400" cy="300" r="120" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
      <circle cx="400" cy="300" r="160" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4" />
      <circle cx="400" cy="300" r="200" fill="none" stroke="#94a3b8" strokeWidth="1" />
      
      {/* Axis Lines */}
      <line x1="400" y1="100" x2="400" y2="500" stroke="#94a3b8" strokeWidth="1" />
      <line x1="200" y1="300" x2="600" y2="300" stroke="#94a3b8" strokeWidth="1" />
      <line x1="258.6" y1="158.6" x2="541.4" y2="441.4" stroke="#94a3b8" strokeWidth="1" />
      <line x1="258.6" y1="441.4" x2="541.4" y2="158.6" stroke="#94a3b8" strokeWidth="1" />
      
      {/* Axis Labels */}
      <text x="400" y="90" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Valore Clinico</text>
      <text x="400" y="520" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Value Sustainability</text>
      <text x="180" y="300" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Valore Organizzativo</text>
      <text x="620" y="300" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Valore Sociale</text>
      <text x="235" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Value Co-creation</text>
      <text x="565" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Value Alignment</text>
      <text x="235" y="450" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Valore Economico</text>
      <text x="565" y="450" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#334155">Value Assessment</text>
      
      {/* Current State Polygon */}
      <polygon 
        points="400,156 306,272 282,350 324,420 394,452 478,404 480,334 456,226" 
        fill="#3b82f6" 
        fillOpacity="0.3" 
        stroke="#2563eb" 
        strokeWidth="2" 
      />
      
      {/* AI Potential Polygon */}
      <polygon 
        points="400,120 260,244 236,350 292,436 394,404 520,372 520,310 464,196" 
        fill="#f97316" 
        fillOpacity="0.3" 
        stroke="#ea580c" 
        strokeWidth="2" 
      />
      
      {/* Legend */}
      <rect x="280" y="530" width="20" height="10" fill="#3b82f6" fillOpacity="0.3" stroke="#2563eb" strokeWidth="2" />
      <text x="310" y="538" fontSize="12" fill="#334155">Stato Attuale</text>
      
      <rect x="420" y="530" width="20" height="10" fill="#f97316" fillOpacity="0.3" stroke="#ea580c" strokeWidth="2" />
      <text x="450" y="538" fontSize="12" fill="#334155">Potenziale AI Distribuita</text>
      
      {/* Components boxes */}
      <g transform="translate(100, 100)">
        <rect x="0" y="0" width="180" height="70" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="90" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Valore Clinico</text>
        <text x="10" y="36" fontSize="10" fill="#334155">• Miglioramento outcome di salute</text>
        <text x="10" y="50" fontSize="10" fill="#334155">• Accuratezza diagnostica</text>
        <text x="10" y="64" fontSize="10" fill="#334155">• Appropriatezza terapeutica</text>
      </g>
      
      <g transform="translate(520, 100)">
        <rect x="0" y="0" width="180" height="70" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="90" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Valore Sociale</text>
        <text x="10" y="36" fontSize="10" fill="#334155">• Equità nell'accesso</text>
        <text x="10" y="50" fontSize="10" fill="#334155">• Riduzione disparità</text>
        <text x="10" y="64" fontSize="10" fill="#334155">• Fiducia nei sistemi sanitari</text>
      </g>
      
      <g transform="translate(100, 430)">
        <rect x="0" y="0" width="180" height="70" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="90" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Valore Economico</text>
        <text x="10" y="36" fontSize="10" fill="#334155">• Sostenibilità finanziaria</text>
        <text x="10" y="50" fontSize="10" fill="#334155">• Riduzione costi</text>
        <text x="10" y="64" fontSize="10" fill="#334155">• Ottimizzazione investimenti</text>
      </g>
      
      <g transform="translate(520, 430)">
        <rect x="0" y="0" width="180" height="70" rx="5" fill="white" stroke="#cbd5e1" strokeWidth="1" />
        <text x="90" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">Valore Organizzativo</text>
        <text x="10" y="36" fontSize="10" fill="#334155">• Efficienza operativa</text>
        <text x="10" y="50" fontSize="10" fill="#334155">• Ottimizzazione risorse</text>
        <text x="10" y="64" fontSize="10" fill="#334155">• Miglioramento processi</text>
      </g>
      
      {/* Scale labels */}
      <text x="408" y="300" fontSize="10" fill="#64748b">0</text>
      <text x="448" y="300" fontSize="9" fill="#64748b">1</text>
      <text x="488" y="300" fontSize="9" fill="#64748b">2</text>
      <text x="528" y="300" fontSize="9" fill="#64748b">3</text>
      <text x="568" y="300" fontSize="9" fill="#64748b">4</text>
      <text x="608" y="300" fontSize="9" fill="#64748b">5</text>
      
      {/* Description box */}
      <rect x="150" y="550" width="500" height="40" rx="5" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
      <text x="400" y="570" textAnchor="middle" fontSize="11" fill="#475569">
        La creazione di valore pubblico sanitario attraverso l'AI distribuita richiede un bilanciamento tra innovazione e responsabilità,
      </text>
      <text x="400" y="583" textAnchor="middle" fontSize="11" fill="#475569">
        efficienza ed equità, standardizzazione e personalizzazione per massimizzare i benefici mitigando i rischi potenziali.
      </text>
    </svg>
  );
};

export default StaticRadarChart;