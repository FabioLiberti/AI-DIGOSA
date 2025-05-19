import React from 'react';

const MatrixCell = ({ header, content, primary = false, diagonal = false }) => {
  return (
    <div className={`border border-gray-400 ${diagonal ? 'bg-blue-100' : primary ? 'bg-gray-50' : 'bg-white'} p-3 h-full flex flex-col`}>
      <h3 className={`text-sm font-bold mb-2 ${diagonal ? 'text-blue-800' : 'text-gray-800'}`}>{header}</h3>
      <p className="text-xs leading-tight">{content}</p>
    </div>
  );
};

const TensionMatrix = () => {
  return (
    <div className="font-sans">
      <h2 className="text-xl font-bold text-center mb-4">Matrice delle Tensioni e Interdipendenze</h2>
      <p className="text-sm mb-4 text-center text-gray-600">Framework per l'analisi delle tensioni nell'implementazione dell'AI distribuita in sanità</p>
      
      <div className="grid grid-cols-5 gap-1">
        {/* Header row */}
        <div className="p-3"></div>
        <div className="p-3 bg-blue-700 text-white font-bold text-center">Tecnologia</div>
        <div className="p-3 bg-green-700 text-white font-bold text-center">Economia</div>
        <div className="p-3 bg-red-700 text-white font-bold text-center">Diritto</div>
        <div className="p-3 bg-purple-700 text-white font-bold text-center">Etica</div>
        
        {/* Tecnologia row */}
        <div className="p-3 bg-blue-700 text-white font-bold flex items-center justify-center">Tecnologia</div>
        <MatrixCell 
          diagonal={true}
          header="Componenti Tecnologiche" 
          content="Interoperabilità, sicurezza, scalabilità, performance, manutenibilità" 
        />
        <MatrixCell 
          primary={true}
          header="Tecnologia-Economia" 
          content="Tensione tra sicurezza ottimale e costi sostenibili. Compromessi tra performance algoritmica e efficienza nell'uso delle risorse. Costi incrementali di meccanismi avanzati come differential privacy." 
        />
        <MatrixCell 
          primary={true}
          header="Tecnologia-Diritto" 
          content="Conflitto tra innovazione tecnica e vincoli normativi. Tensione tra requisiti di tracciabilità algoritmica e architettura distribuita. Bilanciamento tra minimizzazione dei dati e documentazione." 
        />
        <MatrixCell 
          primary={true}
          header="Tecnologia-Etica" 
          content="Compromesso tra performance algoritmica e trasparenza/spiegabilità. Bilanciamento tra efficienza computazionale e equità. Modelli più complessi spesso meno interpretabili." 
        />
        
        {/* Economia row */}
        <div className="p-3 bg-green-700 text-white font-bold flex items-center justify-center">Economia</div>
        <MatrixCell 
          primary={true}
          header="Economia-Tecnologia" 
          content="Vincoli di budget che limitano le opzioni tecnologiche. Necessità di giustificare investimenti in sicurezza e qualità con ROI tangibile. Bilanciamento tra innovazione e sostenibilità economica." 
        />
        <MatrixCell 
          diagonal={true}
          header="Parametri Economici" 
          content="Costi di implementazione, distribuzione del valore, sostenibilità finanziaria, efficienza allocativa, impatto sulla produttività" 
        />
        <MatrixCell 
          primary={true}
          header="Economia-Diritto" 
          content="Tensione tra efficienza operativa e requisiti di documentazione. Costi di compliance che influenzano la fattibilità economica. Vincoli normativi sull'uso dei dati che limitano modelli di business." 
        />
        <MatrixCell 
          primary={true}
          header="Economia-Etica" 
          content="Conflitto tra ottimizzazione dei costi e equità nell'accesso. Tensione tra creazione di valore economico e distribuzione equa dei benefici. Efficienza vs inclusività e giustizia distributiva." 
        />
        
        {/* Diritto row */}
        <div className="p-3 bg-red-700 text-white font-bold flex items-center justify-center">Diritto</div>
        <MatrixCell 
          primary={true}
          header="Diritto-Tecnologia" 
          content="Requisiti normativi che vincolano l'architettura tecnica. Necessità di adattare soluzioni tecniche a contesti normativi diversi. Tensione tra innovazione disruptive e framework legali esistenti." 
        />
        <MatrixCell 
          primary={true}
          header="Diritto-Economia" 
          content="Costi di adeguamento normativo che impattano ROI. Rischi legali che influenzano valutazioni economiche. Barriere normative all'accesso che creano disequilibri di mercato." 
        />
        <MatrixCell 
          diagonal={true}
          header="Vincoli Normativi" 
          content="Conformità normativa, allocazione di responsabilità, tutela dei diritti, risoluzione delle controversie, adattabilità normativa" 
        />
        <MatrixCell 
          primary={true}
          header="Diritto-Etica" 
          content="Tensione tra conformità formale e responsabilità sostanziale. Conflitto tra privacy legale e valori di bene collettivo. Gap tra requisiti legali minimi e aspettative etiche della società." 
        />
        
        {/* Etica row */}
        <div className="p-3 bg-purple-700 text-white font-bold flex items-center justify-center">Etica</div>
        <MatrixCell 
          primary={true}
          header="Etica-Tecnologia" 
          content="Requisiti di trasparenza che limitano complessità algoritmica. Necessità di meccanismi tecnici per garantire fairness e accountability. Design tecnico guidato da valori oltre che da performance." 
        />
        <MatrixCell 
          primary={true}
          header="Etica-Economia" 
          content="Valori etici che richiedono investimenti oltre l'efficienza economica. Necessità di modelli di business che integrino responsabilità sociale. Bilanciamento tra profitto e impatto sociale." 
        />
        <MatrixCell 
          primary={true}
          header="Etica-Diritto" 
          content="Principi etici che superano i requisiti legali minimi. Necessità di integrare considerazioni etiche in framework normativi. Legittimità sociale che va oltre la conformità tecnica." 
        />
        <MatrixCell 
          diagonal={true}
          header="Principi Etici" 
          content="Equità algoritmica, trasparenza e spiegabilità, autonomia e agency, beneficenza, fiducia" 
        />
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p className="mb-2"><span className="font-bold">Note:</span> La matrice evidenzia le principali tensioni e interdipendenze tra le quattro dimensioni fondamentali nell'implementazione dell'AI distribuita in sanità. Le celle sulla diagonale (sfondo azzurro) rappresentano i componenti principali di ciascuna dimensione.</p>
        <p>Le tensioni identificate richiedono un approccio di governance bilanciato che consideri simultaneamente le quattro dimensioni, cercando punti di equilibrio sostenibili specifici per ogni contesto implementativo.</p>
      </div>
    </div>
  );
};

export default TensionMatrix;