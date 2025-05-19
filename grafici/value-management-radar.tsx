import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';

const ValueManagementRadar = () => {
  const data = [
    {
      category: "Valore Clinico",
      "Stato Attuale": 3.2,
      "Potenziale AI Distribuita": 4.8,
      fullMark: 5,
      components: [
        "Miglioramento outcome di salute",
        "Accuratezza diagnostica",
        "Appropriatezza terapeutica"
      ]
    },
    {
      category: "Valore Organizzativo",
      "Stato Attuale": 2.8,
      "Potenziale AI Distribuita": 4.6,
      fullMark: 5,
      components: [
        "Efficienza operativa",
        "Ottimizzazione risorse",
        "Miglioramento processi decisionali"
      ]
    },
    {
      category: "Valore Sociale",
      "Stato Attuale": 2.5,
      "Potenziale AI Distribuita": 4.4,
      fullMark: 5,
      components: [
        "Equità nell'accesso",
        "Riduzione disparità",
        "Fiducia pubblica nei sistemi sanitari"
      ]
    },
    {
      category: "Valore Economico",
      "Stato Attuale": 3.0,
      "Potenziale AI Distribuita": 4.5,
      fullMark: 5,
      components: [
        "Sostenibilità finanziaria",
        "Riduzione costi",
        "Ottimizzazione investimenti"
      ]
    },
    {
      category: "Value Co-creation",
      "Stato Attuale": 2.2,
      "Potenziale AI Distribuita": 4.7,
      fullMark: 5,
      components: [
        "Collaborazione inter-istituzionale",
        "Distribuzione equa dei benefici",
        "Sinergie tra stakeholder"
      ]
    },
    {
      category: "Value Alignment",
      "Stato Attuale": 2.0,
      "Potenziale AI Distribuita": 4.0,
      fullMark: 5,
      components: [
        "Allineamento obiettivi",
        "Conciliazione priorità diverse",
        "Governance collaborativa"
      ]
    },
    {
      category: "Value Assessment",
      "Stato Attuale": 2.4,
      "Potenziale AI Distribuita": 4.2,
      fullMark: 5,
      components: [
        "Metriche multidimensionali",
        "KPI integrati",
        "Framework valutativi"
      ]
    },
    {
      category: "Value Sustainability",
      "Stato Attuale": 2.3,
      "Potenziale AI Distribuita": 4.3,
      fullMark: 5,
      components: [
        "Benefici a lungo termine",
        "Evoluzione tecnologica",
        "Adattabilità normativa"
      ]
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const categoryData = data.find(item => item.category === payload[0].payload.category);
      return (
        <div className="bg-white p-3 border rounded shadow-md max-w-xs">
          <p className="font-bold text-sm">{categoryData.category}</p>
          <ul className="list-disc pl-5 text-xs mt-1">
            {categoryData.components.map((comp, index) => (
              <li key={index}>{comp}</li>
            ))}
          </ul>
          <div className="mt-2 pt-2 border-t border-gray-200">
            <p className="text-xs">
              <span className="font-medium text-blue-600">Stato Attuale:</span> {payload[0].value}
            </p>
            <p className="text-xs">
              <span className="font-medium text-orange-600">Potenziale AI Distribuita:</span> {payload[1].value}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="font-sans">
      <h2 className="text-xl font-bold text-center mb-2">Value Management nell'AI Distribuita in Sanità</h2>
      <p className="text-sm text-gray-600 text-center mb-4">Dimensioni di valore e potenziale trasformativo</p>
      
      <div className="flex flex-col items-center">
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="70%" data={data}>
              <PolarGrid stroke="#cbd5e1" />
              <PolarAngleAxis 
                dataKey="category" 
                tick={{ fill: '#334155', fontSize: 12, fontWeight: 500 }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 5]} />
              <Tooltip content={<CustomTooltip />} />
              <Radar 
                name="Stato Attuale" 
                dataKey="Stato Attuale" 
                stroke="#2563eb" 
                fill="#3b82f6" 
                fillOpacity={0.4}
              />
              <Radar 
                name="Potenziale AI Distribuita" 
                dataKey="Potenziale AI Distribuita" 
                stroke="#ea580c" 
                fill="#f97316" 
                fillOpacity={0.4} 
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200 w-full max-w-2xl">
          <h3 className="text-base font-semibold text-gray-800 mb-2">Framework di Value Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded shadow-sm border border-blue-200">
              <h4 className="text-sm font-bold text-blue-700">Dimensioni Primarie di Valore</h4>
              <ul className="text-xs mt-1 space-y-1">
                <li><span className="font-medium">Valore Clinico:</span> Outcome salute, accuratezza diagnostica</li>
                <li><span className="font-medium">Valore Organizzativo:</span> Efficienza, ottimizzazione risorse</li>
                <li><span className="font-medium">Valore Sociale:</span> Equità, fiducia pubblica, riduzione disparità</li>
                <li><span className="font-medium">Valore Economico:</span> Sostenibilità, ROI, ottimizzazione costi</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded shadow-sm border border-orange-200">
              <h4 className="text-sm font-bold text-orange-700">Considerazioni di Process Management</h4>
              <ul className="text-xs mt-1 space-y-1">
                <li><span className="font-medium">Value Co-creation:</span> Collaborazione, benefici distribuiti</li>
                <li><span className="font-medium">Value Alignment:</span> Conciliazione obiettivi divergenti</li>
                <li><span className="font-medium">Value Assessment:</span> Metriche multidimensionali, KPI</li>
                <li><span className="font-medium">Value Sustainability:</span> Benefici a lungo termine</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            La creazione di valore pubblico sanitario attraverso l'AI distribuita richiede un bilanciamento tra innovazione e responsabilità, 
            efficienza ed equità, standardizzazione e personalizzazione. L'AI distribuita può contribuire significativamente 
            al raggiungimento degli Obiettivi di Sviluppo Sostenibile (SDG) relativi alla salute, richiedendo approcci 
            di governance che massimizzino i benefici pubblici mitigando potenziali rischi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueManagementRadar;