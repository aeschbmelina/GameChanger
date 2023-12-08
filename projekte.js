function toggleSize(element) {
    element.classList.toggle('expanded');

    // Überprüfen, ob das Element die Klasse 'expanded' hat
    const isExpanded = element.classList.contains('expanded');

    // Überprüfen der Bildschirmbreite
    const isSmallScreen = window.innerWidth <= 750;

    // Ändern der Höhe des Elements basierend auf dem Zustand der 'expanded'-Klasse und der Bildschirmbreite
    if (isExpanded) {
        element.style.height = isSmallScreen ? '350px' : '140vh';
    } else {
        element.style.height = isSmallScreen ? '300px' : '70vh'; //Responsive
    }
}

function toggleSize(element) {
    element.classList.toggle('expanded');

    // Überprüfen, ob Element Klasse 'expanded' hat
    const isExpanded = element.classList.contains('expanded');

    // Überprüfen der Bildschirmbreite
    const isSmallScreen = window.innerWidth <= 1000;

    // Ändern der Höhe des Elements basierend auf dem Zustand der 'expanded'-Klasse und der Bildschirmbreite
    if (isExpanded) {
        element.style.height = isSmallScreen ? '1200px' : '140vh';
    } else {
        element.style.height = isSmallScreen ? '500px' : '70vh'; //Responsive
    }
}
function toggleText(element) {
    element.classList.toggle('expanded');
}



// JavaScript-Funktion, um die Inhalte zu wechseln
function rotateContents() {
    const gridItem2 = document.getElementById('grid-item2');
    const artikelElements = document.querySelectorAll('.artikel');
    let currentIndex = 0; // Startindex für das Wechseln

    function changeContent() {
        currentIndex = (currentIndex + 1) % artikelElements.length;

        // Klone den nächsten Artikel
        const nextArtikel = artikelElements[currentIndex].cloneNode(true);

        //Entferne die 'visible'-Klasse von allen Elementen
        artikelElements.forEach(element => {
           element.classList.remove('visible');
        });

        // Füge den geklonten Artikel zum gridItem2 hinzu und setze die 'visible'-Klasse
        gridItem2.innerHTML = ''; // Leere das gridItem2 zuerst
        gridItem2.appendChild(nextArtikel);
        nextArtikel.classList.add('visible');
    }

    setInterval(changeContent, 7000); // Wechselt alle 7 Sekunden
}

//Funktion aufrufen, um automatischen Wechsel zu starten
rotateContents();


// JavaScript-Funktion, um die Inhalte zu initialisieren
function initializeContents() {
    const artikelElements = document.querySelectorAll('.artikel');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2});

    artikelElements.forEach(element => {
        observer.observe(element);
    });
} 

//Funktion aufrufen, um Inhalte zu initialisieren
initializeContents();
