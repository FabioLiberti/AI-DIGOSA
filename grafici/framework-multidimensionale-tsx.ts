import React from 'react';

// Definizione delle props del componente
interface FrameworkMultidimensionaleProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const FrameworkMultidimensionale: React.FC<FrameworkMultidimensionaleProps> = ({
  width = 1000,
  height = 900,
  className = '',
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 1000 900" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradienti per i quadranti */}
        <linearGradient id="tech-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="econ-grad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="legal-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="ethics-grad" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>

        {/* Filtri per effetti visivi */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Pattern per connessioni */}
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" 
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.6)" />
        </marker>
      </defs>

      {/* Sfondo */}
      <rect width="1000" height="900" fill="#f8fafc" />
      
      {/* Titolo */}
      <text x="500" y="60" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#1e293b" textAnchor="middle">
        Framework Integrato a Quattro Assi per l'AI Distribuita in Sanità
      </text>
      <text x="500" y="95" fontFamily="Arial, sans-serif" fontSize="18" fill="#64748b" textAnchor="middle">
        Analisi multidimensionale delle tensioni tra tecnologia, economia, diritto ed etica
      </text>

      {/* Gruppo principale centrato */}
      <g transform="translate(500, 480)">
        {/* Cerchi esterni di contesto */}
        <circle cx="0" cy="0" r="380" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="0" cy="0" r="350" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="0" cy="0" r="320" fill="none" stroke="#e2e8f0" strokeWidth="1" />
        
        {/* Assi principali - linee a croce */}
        <line x1="0" y1="-380" x2="0" y2="380" stroke="#cbd5e1" strokeWidth="2" />
        <line x1="-380" y1="0" x2="380" y2="0" stroke="#cbd5e1" strokeWidth="2" />
        
        {/* Quadranti - aree colorate con trasparenza */}
        <path d="M 0 0 L 0 -320 A 320 320 0 0 1 320 0 Z" fill="url(#tech-grad)" stroke="none" opacity="0.9" />
        <path d="M 0 0 L 320 0 A 320 320 0 0 1 0 320 Z" fill="url(#econ-grad)" stroke="none" opacity="0.9" />
        <path d="M 0 0 L 0 320 A 320 320 0 0 1 -320 0 Z" fill="url(#legal-grad)" stroke="none" opacity="0.9" />
        <path d="M 0 0 L -320 0 A 320 320 0 0 1 0 -320 Z" fill="url(#ethics-grad)" stroke="none" opacity="0.9" />
        
        {/* Cerchio centrale */}
        <circle cx="0" cy="0" r="80" fill="white" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="0" cy="0" r="75" fill="white" stroke="none" />
        <text x="0" y="10" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#1e293b" textAnchor="middle">
          AI Distribuita
        </text>
        <text x="0" y="35" fontFamily="Arial, sans-serif" fontSize="20" fill="#64748b" textAnchor="middle">
          in Sanità
        </text>

        {/* TECNOLOGIA - Quadrante superiore sinistro */}
        <g className="tech-quadrant">
          {/* Titolo del quadrante */}
          <text 
            x="-160" 
            y="-200" 
            fontFamily="Arial, sans-serif" 
            fontSize="28" 
            fontWeight="bold" 
            fill="#1e40af" 
            transform="rotate(-45 -160 -200)"
          >
            ASSE TECNOLOGICO
          </text>
          <text 
            x="-110" 
            y="-170" 
            fontFamily="Arial, sans-serif" 
            fontSize="16" 
            fill="#1e40af" 
            fontStyle="italic" 
            transform="rotate(-45 -110 -170)"
          >
            Fondamenti Infrastrutturali
          </text>
          
          {/* Elementi dell'asse */}
          <g transform="rotate(-45)">
            <circle cx="0" cy="-270" r="40" fill="#3b82f6" opacity="0.8" />
            <text x="0" y="-265" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Interoperabilità
            </text>
            
            <circle cx="-90" cy="-240" r="40" fill="#3b82f6" opacity="0.8" />
            <text x="-90" y="-235" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Sicurezza
            </text>
            
            <circle cx="-180" cy="-180" r="40" fill="#3b82f6" opacity="0.8" />
            <text x="-180" y="-175" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Scalabilità
            </text>
            
            <circle cx="-240" cy="-90" r="40" fill="#3b82f6" opacity="0.8" />
            <text x="-240" y="-95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Performance
            </text>
            <text x="-240" y="-80" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle">
              e Manutenibilità
            </text>
          </g>
          
          {/* Tecnologie chiave */}
          <g transform="translate(-200, -260)">
            <rect x="-80" y="-20" width="160" height="60" rx="10" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#1e40af" textAnchor="middle">
              Tecnologie Chiave:
            </text>
            <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="11" fill="#1e40af" textAnchor="middle">
              Federated Learning, Edge Computing,
            </text>
            <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="11" fill="#1e40af" textAnchor="middle">
              Differential Privacy, Secure Aggregation
            </text>
          </g>
        </g>

        {/* ECONOMIA - Quadrante superiore destro */}
        <g className="econ-quadrant">
          {/* Titolo del quadrante */}
          <text 
            x="160" 
            y="-200" 
            fontFamily="Arial, sans-serif" 
            fontSize="28" 
            fontWeight="bold" 
            fill="#047857" 
            transform="rotate(45 160 -200)"
          >
            ASSE ECONOMICO
          </text>
          <text 
            x="110" 
            y="-170" 
            fontFamily="Arial, sans-serif" 
            fontSize="16" 
            fill="#047857" 
            fontStyle="italic" 
            transform="rotate(45 110 -170)"
          >
            Dinamiche di Valore
          </text>
          
          {/* Elementi dell'asse */}
          <g transform="rotate(45)">
            <circle cx="0" cy="-270" r="40" fill="#10b981" opacity="0.8" />
            <text x="0" y="-275" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Costi di
            </text>
            <text x="0" y="-260" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Implementazione
            </text>
            
            <circle cx="90" cy="-240" r="40" fill="#10b981" opacity="0.8" />
            <text x="90" y="-245" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Distribuzione
            </text>
            <text x="90" y="-230" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              del Valore
            </text>
            
            <circle cx="180" cy="-180" r="40" fill="#10b981" opacity="0.8" />
            <text x="180" y="-185" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Sostenibilità
            </text>
            <text x="180" y="-170" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Finanziaria
            </text>
            
            <circle cx="240" cy="-90" r="40" fill="#10b981" opacity="0.8" />
            <text x="240" y="-95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Efficienza
            </text>
            <text x="240" y="-80" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle">
              ed Impatto
            </text>
          </g>
          
          {/* Concetti chiave */}
          <g transform="translate(200, -260)">
            <rect x="-80" y="-20" width="160" height="60" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#047857" textAnchor="middle">
              Concetti Chiave:
            </text>
            <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="11" fill="#047857" textAnchor="middle">
              Value Co-Creation, Public Health Value,
            </text>
            <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="11" fill="#047857" textAnchor="middle">
              Costo-Efficacia, Sostenibilità Economica
            </text>
          </g>
        </g>

        {/* DIRITTO - Quadrante inferiore destro */}
        <g className="legal-quadrant">
          {/* Titolo del quadrante */}
          <text 
            x="160" 
            y="200" 
            fontFamily="Arial, sans-serif" 
            fontSize="28" 
            fontWeight="bold" 
            fill="#9a3412" 
            transform="rotate(135 160 200)"
          >
            ASSE GIURIDICO
          </text>
          <text 
            x="110" 
            y="170" 
            fontFamily="Arial, sans-serif" 
            fontSize="16" 
            fill="#9a3412" 
            fontStyle="italic" 
            transform="rotate(135 110 170)"
          >
            Conformità e Responsabilità
          </text>
          
          {/* Elementi dell'asse */}
          <g transform="rotate(135)">
            <circle cx="0" cy="-270" r="40" fill="#f97316" opacity="0.8" />
            <text x="0" y="-275" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Conformità
            </text>
            <text x="0" y="-260" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Normativa
            </text>
            
            <circle cx="90" cy="-240" r="40" fill="#f97316" opacity="0.8" />
            <text x="90" y="-245" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Allocazione di
            </text>
            <text x="90" y="-230" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Responsabilità
            </text>
            
            <circle cx="180" cy="-180" r="40" fill="#f97316" opacity="0.8" />
            <text x="180" y="-185" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Tutela dei
            </text>
            <text x="180" y="-170" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Diritti
            </text>
            
            <circle cx="240" cy="-90" r="40" fill="#f97316" opacity="0.8" />
            <text x="240" y="-95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Adattabilità
            </text>
            <text x="240" y="-80" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle">
              Normativa
            </text>
          </g>
          
          {/* Framework normativi */}
          <g transform="translate(200, 260)">
            <rect x="-80" y="-20" width="160" height="60" rx="10" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#9a3412" textAnchor="middle">
              Framework Normativi:
            </text>
            <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="11" fill="#9a3412" textAnchor="middle">
              GDPR, AI Act, Medical Device Regulation,
            </text>
            <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="11" fill="#9a3412" textAnchor="middle">
              European Health Data Space
            </text>
          </g>
        </g>

        {/* ETICA - Quadrante inferiore sinistro */}
        <g className="ethics-quadrant">
          {/* Titolo del quadrante */}
          <text 
            x="-160" 
            y="200" 
            fontFamily="Arial, sans-serif" 
            fontSize="28" 
            fontWeight="bold" 
            fill="#6d28d9" 
            transform="rotate(-135 -160 200)"
          >
            ASSE ETICO
          </text>
          <text 
            x="-110" 
            y="170" 
            fontFamily="Arial, sans-serif" 
            fontSize="16" 
            fill="#6d28d9" 
            fontStyle="italic" 
            transform="rotate(-135 -110 170)"
          >
            Valori e Principi Fondanti
          </text>
          
          {/* Elementi dell'asse */}
          <g transform="rotate(-135)">
            <circle cx="0" cy="-270" r="40" fill="#8b5cf6" opacity="0.8" />
            <text x="0" y="-275" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Equità
            </text>
            <text x="0" y="-260" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Algoritmica
            </text>
            
            <circle cx="90" cy="-240" r="40" fill="#8b5cf6" opacity="0.8" />
            <text x="90" y="-245" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Trasparenza e
            </text>
            <text x="90" y="-230" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Spiegabilità
            </text>
            
            <circle cx="180" cy="-180" r="40" fill="#8b5cf6" opacity="0.8" />
            <text x="180" y="-185" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Autonomia
            </text>
            <text x="180" y="-170" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              e Agency
            </text>
            
            <circle cx="240" cy="-90" r="40" fill="#8b5cf6" opacity="0.8" />
            <text x="240" y="-95" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">
              Beneficenza
            </text>
            <text x="240" y="-80" fontFamily="Arial, sans-serif" fontSize="12" fill="white" textAnchor="middle">
              e Fiducia
            </text>
          </g>
          
          {/* Framework etici */}
          <g transform="translate(-200, 260)">
            <rect x="-80" y="-20" width="160" height="60" rx="10" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
            <text x="0" y="-5" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#6d28d9" textAnchor="middle">
              Framework Etici:
            </text>
            <text x="0" y="15" fontFamily="Arial, sans-serif" fontSize="11" fill="#6d28d9" textAnchor="middle">
              Utilitarismo, Deontologia, Etica della Virtù,
            </text>
            <text x="0" y="30" fontFamily="Arial, sans-serif" fontSize="11" fill="#6d28d9" textAnchor="middle">
              Principialismo, Governance Deliberativa
            </text>
          </g>
        </g>

        {/* TENSIONI E INTERRELAZIONI */}
        {/* Tecnologia-Economia */}
        <path 
          d="M -120 -120 C -60 -60, 60 -60, 120 -120" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeOpacity="0.6" 
          strokeDasharray="5,5" 
          markerEnd="url(#arrow)" 
        />
        <text x="0" y="-80" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">
          Tecnologia-Economia
        </text>
        
        {/* Economia-Diritto */}
        <path 
          d="M 120 -120 C 60 -60, 60 60, 120 120" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeOpacity="0.6" 
          strokeDasharray="5,5" 
          markerEnd="url(#arrow)" 
        />
        <text x="100" y="0" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">
          Economia-Diritto
        </text>
        
        {/* Diritto-Etica */}
        <path 
          d="M 120 120 C 60 60, -60 60, -120 120" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeOpacity="0.6" 
          strokeDasharray="5,5" 
          markerEnd="url(#arrow)" 
        />
        <text x="0" y="80" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">
          Diritto-Etica
        </text>
        
        {/* Etica-Tecnologia */}
        <path 
          d="M -120 120 C -60 60, -60 -60, -120 -120" 
          fill="none" 
          stroke="white" 
          strokeWidth="3" 
          strokeOpacity="0.6" 
          strokeDasharray="5,5" 
          markerEnd="url(#arrow)" 
        />
        <text x="-100" y="0" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#475569" textAnchor="middle">
          Etica-Tecnologia
        </text>
      </g>
      
      {/* Legenda */}
      <g transform="translate(500, 860)">
        <text x="0" y="0" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#475569" textAnchor="middle">
          Questo framework facilita l'identificazione di tensioni e punti di equilibrio nell'implementazione dell'AI distribuita in sanità
        </text>
      </g>
    </svg>
  );
};

export default FrameworkMultidimensionale;
