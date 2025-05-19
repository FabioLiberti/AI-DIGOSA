/**
 * Definizione delle spiegazioni testuali per ciascun asse
 */
const axisExplanations = {
    'tech': "Questi elementi costituiscono i pilastri tecnici per un'implementazione efficace dell'AI distribuita, garantendo comunicazione tra sistemi eterogenei, protezione da attacchi informatici, capacità di adattamento a volumi crescenti di dati, efficienza computazionale e continuità operativa anche in condizioni avverse.",
    'economy': "Questi elementi rappresentano le dimensioni economiche critiche dell'AI distribuita, contemplando investimenti iniziali, distribuzione equa dei benefici tra stakeholder, sostenibilità finanziaria a lungo termine, ottimizzazione delle risorse e misurazione concreta del ritorno sugli investimenti.",
    'legal': "Questi elementi definiscono il quadro normativo dell'AI distribuita in sanità, includendo l'aderenza alle leggi vigenti, l'attribuzione chiara di obblighi legali, la protezione dei diritti fondamentali, meccanismi di risoluzione dei conflitti e adattabilità all'evoluzione del panorama regolatorio.",
    'ethics': "Questi elementi rappresentano i principi cardine che guidano il giudizio morale nell'implementazione dell'AI distribuita, bilanciando equità algoritmica, trasparenza nei processi decisionali, autonomia degli attori coinvolti, beneficenza verso i pazienti e costruzione di rapporti fiduciari tra istituzioni e individui."
};

/**
 * Inizializza la visualizzazione del dettaglio al caricamento della pagina
 * Verifica la presenza di un hash nell'URL per mostrare una cella specifica
 */
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se c'è un hash nell'URL che corrisponde a una cella della matrice
    if (window.location.hash) {
        const matrixCellId = window.location.hash.substring(1);
        const cell = document.getElementById(matrixCellId);
        if (cell && cell.classList.contains('matrix-cell')) {
            showMatrixDetail(cell);
        }
    }
    
    // Rendi interattive anche le celle diagonali
    initializeDiagonalCells();
});

/**
 * Mostra i dettagli di una cella della matrice nel pannello laterale
 * @param {HTMLElement} cell - L'elemento cella della matrice cliccato
 */
function showMatrixDetail(cell) {
    // Rimuovi classe active da tutte le celle
    document.querySelectorAll('.matrix-cell').forEach(el => {
        el.classList.remove('active');
    });
    
    // Aggiungi classe active alla cella selezionata
    cell.classList.add('active');
    
    // Ottieni i dati dalla cella
    const title = cell.getAttribute('data-title');
    const description = cell.getAttribute('data-description');
    const category = cell.getAttribute('data-category') || '';
    
    // Verifica se è una cella diagonale
    const isDiagonal = cell.classList.contains('matrix-diagonal');
    
    // Aggiorna il pannello di dettaglio
    document.getElementById('default-detail').classList.add('hidden');
    document.getElementById('detail-content').classList.remove('hidden');
    document.getElementById('detail-title').textContent = title;
    
    // Ottieni il pannello di dettaglio
    const detailPanel = document.getElementById('matrix-detail-panel');
    
    // Resetta lo stile precedente del pannello
    detailPanel.style.backgroundColor = '';
    detailPanel.classList.remove('border-blue-200');
    
    // Se è una cella diagonale, colora il pannello di azzurro e mostra i punti elenco
    if (isDiagonal) {
        // Colora il pannello di azzurro simile alle celle diagonali
        detailPanel.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        detailPanel.classList.add('border-blue-200');
        
        // Determina quale asse è stato selezionato
        let axisDimension = '';
        if (category && category.includes('-')) {
            axisDimension = category.split('-')[0];
        } else {
            // Se la categoria non contiene un trattino, estrai dall'ID
            const cellId = cell.id || '';
            if (cellId.includes('-')) {
                axisDimension = cellId.split('-')[0];
            }
        }
        
        // Ottieni la spiegazione testuale corrispondente all'asse
        const axisExplanation = axisExplanations[axisDimension] || description;
        
        // Aggiorna la descrizione con la spiegazione testuale
        document.getElementById('detail-description').textContent = axisExplanation;
        
        // Crea un elemento per i punti elenco se non esiste
        if (!document.getElementById('detail-list-container')) {
            const listContainer = document.createElement('div');
            listContainer.id = 'detail-list-container';
            listContainer.className = 'mt-6 bg-white rounded-lg p-4 shadow-sm';
            document.getElementById('detail-content').appendChild(listContainer);
        }
        
        // Ottieni i punti elenco dalla cella diagonale
        const listItems = cell.querySelectorAll('li');
        const listContainer = document.getElementById('detail-list-container');
        
        // Aggiorna il contenuto del container con i punti elenco
        if (listContainer && listItems.length > 0) {
            listContainer.innerHTML = '<h4 class="font-semibold mb-3">Elementi principali:</h4>';
            const ul = document.createElement('ul');
            ul.className = 'list-disc pl-5 space-y-1';
            
            listItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.textContent;
                ul.appendChild(li);
            });
            
            listContainer.appendChild(ul);
            listContainer.classList.remove('hidden');
        }
    } else {
        // Se non è una cella diagonale, nascondi il container dei punti elenco e mostra la descrizione originale
        const listContainer = document.getElementById('detail-list-container');
        if (listContainer) {
            listContainer.classList.add('hidden');
        }
        
        // Per le celle non diagonali, mostra la descrizione originale
        document.getElementById('detail-description').textContent = description;
    }
    
    // Aggiorna le etichette di categoria nel pannello laterale
    updateCategoryLabels(category, isDiagonal);
    
    // Aggiorna l'URL con un hash reference alla cella
    if (cell.id) {
        window.location.hash = cell.id;
    }
    
    // Aggiorna la visualizzazione delle tensioni se la funzione è disponibile
    updateTensionVisualization(category);
}

/**
 * Aggiorna le etichette di categoria nel pannello laterale
 * @param {string} category - La categoria della cella (es. "tech-legal")
 * @param {boolean} isDiagonal - Indica se è una cella diagonale
 */
function updateCategoryLabels(category, isDiagonal) {
    const detailCategoryElement = document.getElementById('detail-category');
    
    // Crea un nuovo container per le categorie se non esiste
    if (!document.getElementById('detail-category-container')) {
        const container = document.createElement('div');
        container.id = 'detail-category-container';
        container.className = 'mb-4';
        if (detailCategoryElement && detailCategoryElement.parentNode) {
            detailCategoryElement.parentNode.replaceChild(container, detailCategoryElement);
        }
    }
    
    const categoryContainer = document.getElementById('detail-category-container');
    if (!categoryContainer) return;
    
    if (isDiagonal) {
        // Per celle diagonali, mostra una singola etichetta
        let dimension = '';
        if (category && category.includes('-')) {
            dimension = category.split('-')[0];
        } else {
            // Se non abbiamo una categoria valida, cerchiamo di estrarre dall'ID della cella
            const cellId = document.querySelector('.matrix-cell.active')?.id || '';
            if (cellId.includes('-')) {
                dimension = cellId.split('-')[0];
            }
        }
        
        const dimensionName = translateDimension(dimension);
        
        categoryContainer.innerHTML = `
            <div class="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 category-${dimension}">
                ${dimensionName}
            </div>
        `;
    } else if (category && category.includes('-')) {
        // Per celle di tensione, estrai le due dimensioni
        const [dim1, dim2] = category.split('-');
        const dim1Name = translateDimension(dim1);
        const dim2Name = translateDimension(dim2);
        
        // Crea due etichette distinte con i colori appropriati
        categoryContainer.innerHTML = `
            <div class="inline-block px-3 py-1 rounded-full text-sm font-medium mr-2 category-${dim1}">
                ${dim1Name}
            </div>
            <div class="inline-block px-3 py-1 rounded-full text-sm font-medium category-${dim2}">
                ${dim2Name}
            </div>
        `;
    } else {
        // Fallback per categorie non valide
        categoryContainer.innerHTML = '';
    }
}

/**
 * Traduce il nome della dimensione dall'inglese all'italiano
 * @param {string} dimension - Nome della dimensione in inglese (tech, economy, legal, ethics)
 * @returns {string} - Nome della dimensione tradotto
 */
function translateDimension(dimension) {
    const dimensionMap = {
        'tech': 'Tecnologia',
        'economy': 'Economia', 
        'legal': 'Diritto',
        'ethics': 'Etica'
    };
    
    return dimensionMap[dimension] || capitalizeFirst(dimension);
}

/**
 * Inizializza le celle diagonali della matrice
 */
function initializeDiagonalCells() {
    document.querySelectorAll('.matrix-diagonal').forEach(cell => {
        cell.setAttribute('onclick', 'showMatrixDetail(this)');
        
        // Ottieni la dimensione dalla intestazione di riga
        const rowHeader = cell.closest('.matrix-row').querySelector('.matrix-header');
        if (!rowHeader) return;
        
        const dimension = rowHeader.textContent.trim();
        
        // Converti il nome italiano della dimensione in inglese per data-category
        let dimensionCode = dimension.toLowerCase();
        if (dimensionCode === 'diritto') dimensionCode = 'legal';
        if (dimensionCode === 'tecnologia') dimensionCode = 'tech';
        if (dimensionCode === 'economia') dimensionCode = 'economy';
        if (dimensionCode === 'etica') dimensionCode = 'ethics';
        
        // Assegna attributi per il dettaglio
        const elements = Array.from(cell.querySelectorAll('li'))
            .map(li => li.textContent.trim())
            .join(', ');
            
        cell.setAttribute('data-title', `Dimensione ${dimension}`);
        cell.setAttribute('data-description', `Elementi fondamentali dell'asse ${dimension}: ${elements}.`);
        cell.setAttribute('data-category', `${dimensionCode}-dimension`);
        cell.setAttribute('id', `${dimensionCode}-dimension`);
    });
}

/**
 * Capitalizza la prima lettera di una stringa
 * @param {string} string - Stringa da capitalizzare
 * @returns {string} - Stringa con la prima lettera maiuscola
 */
function capitalizeFirst(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Aggiorna la visualizzazione grafica delle tensioni tra dimensioni
 * @param {string} category - La categoria della tensione (es. "tech-legal")
 */
function updateTensionVisualization(category) {
    const tensionViz = document.getElementById('tension-visualization');
    if (!tensionViz) return;
    
    // Se è una cella diagonale, nascondi la visualizzazione
    if (!category || !category.includes('-') || category.endsWith('-dimension')) {
        tensionViz.classList.add('hidden');
        return;
    }
    
    // Mostra la visualizzazione per le celle di tensione
    tensionViz.classList.remove('hidden');
    
    // Estrai le due dimensioni
    const [dim1, dim2] = category.split('-');
    
    // Imposta i colori e le etichette per i cerchi di tensione
    const leftCircle = document.getElementById('tension-left');
    const rightCircle = document.getElementById('tension-right');
    
    if (!leftCircle || !rightCircle) return;
    
    // Mappa colori per dimensione
    const colorMap = {
        'tech': 'bg-blue-600',
        'economy': 'bg-green-600',
        'legal': 'bg-orange-600',
        'ethics': 'bg-purple-600'
    };
    
    // Aggiorna cerchio sinistro
    leftCircle.className = `w-20 h-20 rounded-full flex items-center justify-center text-white font-medium ${colorMap[dim1] || 'bg-gray-600'}`;
    leftCircle.textContent = translateDimension(dim1);
    
    // Aggiorna cerchio destro
    rightCircle.className = `w-20 h-20 rounded-full flex items-center justify-center text-white font-medium ${colorMap[dim2] || 'bg-gray-600'}`;
    rightCircle.textContent = translateDimension(dim2);
    
    // Descrizione della tensione (personalizzata in base alle dimensioni)
    const tensionDescriptions = {
        'tech-economy': 'Questa tensione richiede un bilanciamento tra sicurezza ottimale e sostenibilità dei costi.',
        'tech-legal': 'Questa tensione emerge tra innovazione tecnica e requisiti di compliance normativa.',
        'tech-ethics': 'Questa tensione si manifesta tra performance algoritmica e necessità di trasparenza e spiegabilità.',
        'economy-tech': 'Questa tensione bilancia investimenti in innovazione e ritorno economico tangibile.',
        'economy-legal': 'Questa tensione emerge tra modelli di business e vincoli normativi.',
        'economy-ethics': 'Questa tensione richiede equilibrio tra ottimizzazione dei costi ed equità nell\'accesso.',
        'legal-tech': 'Questa tensione riguarda i requisiti normativi e la loro implementazione tecnica.',
        'legal-economy': 'Questa tensione emerge tra requisiti di documentazione estesa ed efficienza.',
        'legal-ethics': 'Questa tensione si manifesta tra conformità formale e responsabilità sostanziale.',
        'ethics-tech': 'Questa tensione richiede equilibrio tra innovazione e principi morali fondamentali.',
        'ethics-economy': 'Questa tensione bilancia valori morali e imperativi economici.',
        'ethics-legal': 'Questa tensione emerge tra principi morali e vincoli legali formali.'
    };
    
    const descElement = document.getElementById('tension-description');
    if (descElement) {
        const dim1Name = translateDimension(dim1);
        const dim2Name = translateDimension(dim2);
        
        descElement.textContent = 
            tensionDescriptions[category] || 
            `Questa tensione richiede un bilanciamento attento tra ${dim1Name} e ${dim2Name}.`;
    }
}