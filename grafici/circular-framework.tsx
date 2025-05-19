import React from 'react';

const CompactDiagram = () => {
  return (
    <svg viewBox="0 0 800 600" className="w-full">
      {/* Titolo */}
      <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1e293b">
        Framework Integrato a Quattro Assi per l'AI Distribuita in Sanità
      </text>
      
      {/* Diagram background */}
      <circle cx="400" cy="320" r="250" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
      
      {/* Central hub */}
      <circle cx="400" cy="320" r="50" fill="white" stroke="#475569" strokeWidth="2" />
      <text x="400" y="315" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">AI Distribuita</text>
      <text x="400" y="335" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1e293b">in Sanità</text>
      
      {/* Quadrant separators */}
      <line x1="400" y1="70" x2="400" y2="570" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,5" />
      <line x1="150" y1="320" x2="650" y2="320" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,5" />
      
      {/* ASSE TECNOLOGICO (top left) */}
      <path d="M 400 320 L 400 120 A 200 200 0 0 0 200 320 Z" fill="#dbeafe" fillOpacity="0.6" stroke="#3b82f6" strokeWidth="2" />
      <path d="M 400 320 L 400 170 A 150 150 0 0 0 250 320 Z" fill="#dbeafe" fillOpacity="0.8" stroke="#3b82f6" strokeWidth="1" />
      <text x="300" y="200" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1e40af">ASSE TECNOLOGICO</text>
      <text x="300" y="220" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#3b82f6">Fondamenti Infrastrutturali</text>
      
      {/* Tech components */}
      <text x="240" y="250" textAnchor="end" fontSize="11" fontWeight="bold" fill="#1e40af">• Interoperabilità</text>
      <text x="260" y="270" textAnchor="end" fontSize="11" fontWeight="bold" fill="#1e40af">• Sicurezza e resilienza</text>
      <text x="290" y="290" textAnchor="end" fontSize="11" fontWeight="bold" fill="#1e40af">• Scalabilità</text>
      <text x="330" y="250" textAnchor="start" fontSize="11" fontWeight="bold" fill="#1e40af">• Performance</text>
      <text x="350" y="270" textAnchor="start" fontSize="11" fontWeight="bold" fill="#1e40af">• Manutenibilità</text>
      
      {/* ASSE ECONOMICO (top right) */}
      <path d="M 400 320 L 600 320 A 200 200 0 0 0 400 120 Z" fill="#dcfce7" fillOpacity="0.6" stroke="#10b981" strokeWidth="2" />
      <path d="M 400 320 L 550 320 A 150 150 0 0 0 400 170 Z" fill="#dcfce7" fillOpacity="0.8" stroke="#10b981" strokeWidth="1" />
      <text x="500" y="200" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#166534">ASSE ECONOMICO</text>
      <text x="500" y="220" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#10b981">Dinamiche di Valore</text>
      
      {/* Economic components */}
      <text x="450" y="250" textAnchor="start" fontSize="11" fontWeight="bold" fill="#166534">• Costi di implementazione</text>
      <text x="470" y="270" textAnchor="start" fontSize="11" fontWeight="bold" fill="#166534">• Distribuzione del valore</text>
      <text x="490" y="290" textAnchor="start" fontSize="11" fontWeight="bold" fill="#166534">• Sostenibilità finanziaria</text>
      <text x="540" y="250" textAnchor="start" fontSize="11" fontWeight="bold" fill="#166534">• Efficienza allocativa</text>
      <text x="560" y="270" textAnchor="start" fontSize="11" fontWeight="bold" fill="#166534">• Impatto sulla produttività</text>
      
      {/* ASSE GIURIDICO (bottom left) */}
      <path d="M 400 320 L 200 320 A 200 200 0 0 0 400 520 Z" fill="#fee2e2" fillOpacity="0.6" stroke="#ef4444" strokeWidth="2" />
      <path d="M 400 320 L 250 320 A 150 150 0 0 0 400 470 Z" fill="#fee2e2" fillOpacity="0.8" stroke="#ef4444" strokeWidth="1" />
      <text x="300" y="420" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#b91c1c">ASSE GIURIDICO</text>
      <text x="300" y="440" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#ef4444">Conformità e Responsabilità</text>
      
      {/* Legal components */}
      <text x="240" y="370" textAnchor="end" fontSize="11" fontWeight="bold" fill="#b91c1c">• Conformità normativa</text>
      <text x="260" y="390" textAnchor="end" fontSize="11" fontWeight="bold" fill="#b91c1c">• Allocazione di responsabilità</text>
      <text x="290" y="410" textAnchor="end" fontSize="11" fontWeight="bold" fill="#b91c1c">• Tutela dei diritti</text>
      <text x="310" y="380" textAnchor="start" fontSize="11" fontWeight="bold" fill="#b91c1c">• Risoluzione controversie</text>
      <text x="330" y="400" textAnchor="start" fontSize="11" fontWeight="bold" fill="#b91c1c">• Adattabilità normativa</text>
      
      {/* ASSE ETICO (bottom right) */}
      <path d="M 400 320 L 400 520 A 200 200 0 0 0 600 320 Z" fill="#ede9fe" fillOpacity="0.6" stroke="#8b5cf6" strokeWidth="2" />
      <path d="M 400 320 L 400 470 A 150 150 0 0 0 550 320 Z" fill="#ede9fe" fillOpacity="0.8" stroke="#8b5cf6" strokeWidth="1" />
      <text x="500" y="420" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6d28d9">ASSE ETICO</text>
      <text x="500" y="440" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#8b5cf6">Valori e Principi Fondanti</text>
      
      {/* Ethical components */}
      <text x="450" y="370" textAnchor="start" fontSize="11" fontWeight="bold" fill="#6d28d9">• Equità algoritmica</text>
      <text x="470" y="390" textAnchor="start" fontSize="11" fontWeight="bold" fill="#6d28d9">• Trasparenza e spiegabilità</text>
      <text x="490" y="410" textAnchor="start" fontSize="11" fontWeight="bold" fill="#6d28d9">• Autonomia e agency</text>
      <text x="540" y="380" textAnchor="start" fontSize="11" fontWeight="bold" fill="#6d28d9">• Beneficenza</text>
      <text x="560" y="400" textAnchor="start" fontSize="11" fontWeight="bold" fill="#6d28d9">• Fiducia</text>
      
      {/* Tension zones */}
      <text x="400" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">Tensione Tecnologia-Economia</text>
      <text x="400" y="500" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">Tensione Diritto-Etica</text>
      <text x="180" y="320" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569" transform="rotate(-90,180,320)">Tensione Tecnologia-Diritto</text>
      <text x="620" y="320" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569" transform="rotate(90,620,320)">Tensione Economia-Etica</text>
      
      {/* Legend */}
      <rect x="150" y="550" width="500" height="30" rx="5" fill="white" stroke="#64748b" strokeWidth="1" />
      <text x="400" y="570" textAnchor="middle" fontSize="12" fill="#334155">
        Framework di analisi delle tensioni e bilanciamenti nell'implementazione dell'AI distribuita in sanità
      </text>
    </svg>
  );
};

export default CompactDiagram;