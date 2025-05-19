import React from 'react';

const CompactFramework = () => {
  return (
    <div className="font-sans">
      <h2 className="text-lg font-bold text-center mb-1">Framework Integrato a Quattro Assi per l'AI Distribuita in Sanità</h2>
      
      <div className="flex flex-col items-center">
        {/* Framework diagram */}
        <div className="relative w-full max-w-2xl">
          <svg viewBox="0 0 800 400" className="w-full">
            {/* Background */}
            <rect x="50" y="50" width="700" height="300" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
            
            {/* Central connector */}
            <circle cx="400" cy="200" r="40" fill="white" stroke="#64748b" strokeWidth="2" />
            <text x="400" y="195" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e293b">AI Distribuita</text>
            <text x="400" y="210" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e293b">in Sanità</text>
            
            {/* Horizontal and vertical dividers */}
            <line x1="50" y1="200" x2="750" y2="200" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="400" y1="50" x2="400" y2="350" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5,5" />
            
            {/* Asse Tecnologico (top left) */}
            <rect x="80" y="70" width="290" height="110" rx="5" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
            <text x="225" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1e40af">ASSE TECNOLOGICO</text>
            <text x="225" y="105" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#3b82f6">Fondamenti Infrastrutturali e Operativi</text>
            
            <text x="105" y="125" fontSize="9" fontWeight="bold" fill="#1e40af">• Interoperabilità</text>
            <text x="105" y="140" fontSize="9" fontWeight="bold" fill="#1e40af">• Sicurezza e resilienza</text>
            <text x="105" y="155" fontSize="9" fontWeight="bold" fill="#1e40af">• Scalabilità</text>
            <text x="225" y="125" fontSize="9" fontWeight="bold" fill="#1e40af">• Performance</text>
            <text x="225" y="140" fontSize="9" fontWeight="bold" fill="#1e40af">• Manutenibilità</text>
            
            {/* Asse Economico (top right) */}
            <rect x="430" y="70" width="290" height="110" rx="5" fill="#dcfce7" stroke="#10b981" strokeWidth="2" />
            <text x="575" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">ASSE ECONOMICO</text>
            <text x="575" y="105" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#10b981">Dinamiche di Valore e Sostenibilità</text>
            
            <text x="455" y="125" fontSize="9" fontWeight="bold" fill="#166534">• Costi di implementazione</text>
            <text x="455" y="140" fontSize="9" fontWeight="bold" fill="#166534">• Distribuzione del valore</text>
            <text x="455" y="155" fontSize="9" fontWeight="bold" fill="#166534">• Sostenibilità finanziaria</text>
            <text x="635" y="125" fontSize="9" fontWeight="bold" fill="#166534">• Efficienza allocativa</text>
            <text x="635" y="140" fontSize="9" fontWeight="bold" fill="#166534">• Impatto sulla produttività</text>
            
            {/* Asse Giuridico (bottom left) */}
            <rect x="80" y="220" width="290" height="110" rx="5" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
            <text x="225" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b91c1c">ASSE GIURIDICO</text>
            <text x="225" y="255" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#ef4444">Conformità e Responsabilità Normativa</text>
            
            <text x="105" y="275" fontSize="9" fontWeight="bold" fill="#b91c1c">• Conformità normativa</text>
            <text x="105" y="290" fontSize="9" fontWeight="bold" fill="#b91c1c">• Allocazione di responsabilità</text>
            <text x="105" y="305" fontSize="9" fontWeight="bold" fill="#b91c1c">• Tutela dei diritti</text>
            <text x="225" y="275" fontSize="9" fontWeight="bold" fill="#b91c1c">• Risoluzione delle controversie</text>
            <text x="225" y="290" fontSize="9" fontWeight="bold" fill="#b91c1c">• Adattabilità normativa</text>
            
            {/* Asse Etico (bottom right) */}
            <rect x="430" y="220" width="290" height="110" rx="5" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
            <text x="575" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6d28d9">ASSE ETICO</text>
            <text x="575" y="255" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#8b5cf6">Valori e Principi Fondanti</text>
            
            <text x="455" y="275" fontSize="9" fontWeight="bold" fill="#6d28d9">• Equità algoritmica</text>
            <text x="455" y="290" fontSize="9" fontWeight="bold" fill="#6d28d9">• Trasparenza e spiegabilità</text>
            <text x="455" y="305" fontSize="9" fontWeight="bold" fill="#6d28d9">• Autonomia e agency</text>
            <text x="635" y="275" fontSize="9" fontWeight="bold" fill="#6d28d9">• Beneficenza</text>
            <text x="635" y="290" fontSize="9" fontWeight="bold" fill="#6d28d9">• Fiducia</text>
            
            {/* Connectors to center */}
            <line x1="225" y1="180" x2="360" y2="200" stroke="#3b82f6" strokeWidth="2" />
            <line x1="575" y1="180" x2="440" y2="200" stroke="#10b981" strokeWidth="2" />
            <line x1="225" y1="220" x2="360" y2="200" stroke="#ef4444" strokeWidth="2" />
            <line x1="575" y1="220" x2="440" y2="200" stroke="#8b5cf6" strokeWidth="2" />
            
            {/* Legend for interactions */}
            <rect x="50" y="365" width="700" height="30" rx="5" fill="white" stroke="#64748b" strokeWidth="1" />
            <text x="400" y="382" textAnchor="middle" fontSize="10" fill="#334155">
              Le dimensioni interagiscono creando tensioni e sinergie che richiedono un approccio di governance integrato e bilanciato
            </text>
          </svg>
        </div>
        
        {/* Caption */}
        <div className="mt-1 text-xs text-gray-600 max-w-2xl text-center">
          <p>Il modello analitico multidimensionale integra quattro prospettive fondamentali per la governance dell'AI distribuita in sanità, 
            evidenziando le componenti chiave di ciascun asse e le loro interrelazioni. Questo framework facilita l'identificazione 
            di potenziali tensioni e punti di equilibrio nell'implementazione di sistemi di intelligenza artificiale collaborativa in contesti sanitari.</p>
        </div>
      </div>
    </div>
  );
};

export default CompactFramework;