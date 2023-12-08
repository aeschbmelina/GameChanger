
//Animation des Titels

document.addEventListener('DOMContentLoaded', function () {
    var title = document.querySelector('#Menschen');
    var peopleLink = document.querySelector('#Wandel');

    function triggerAnimation() {
        title.classList.add('slide-in');
        peopleLink.classList.add('slide-in');
    } 

    // Timeout für die Animation beim Laden der Seite
    setTimeout(triggerAnimation, 500);

    // Event-Listener für das Scrollen (--> Animation wird auch durch Scrollen ausgelöst)
    window.addEventListener('scroll', function () {
        var position = peopleLink.getBoundingClientRect();

        if (position.top < window.innerHeight && position.bottom >= 0) {
            // Timeout für die Animation beim Scrollen
            setTimeout(triggerAnimation, 500);
        } else {
            peopleLink.classList.remove('slide-in');
        }
    });

// Gemeinsame Funktion für alle Elemente mit der Klasse 'bild'; Elemente nehmen gesamte Bildbreite ein, wenn hover und überdecken das Element nebenan
function handleMouseOver(element) {
element.style.width = '100%';
element.style.position = 'relative'; // Positionierung berücksichtigen
const video = element.querySelector('video');
video.style.display = 'block';
video.play();
}

function handleMouseOut(element) {
const video = element.querySelector('video');
video.style.display = 'none';
video.pause();
video.currentTime = 0;

// Breite nach dem Mouseout auf den ursprünglichen Wert zurücksetzen
element.style.width = '';

// Layout aktualisieren
setTimeout(() => window.dispatchEvent(new Event('resize')), 100);
}

// Elemente mit Klasse 'bild'
const bildElemente = document.querySelectorAll('.bild');
bildElemente.forEach((element) => {
element.addEventListener('mouseover', function () {
    handleMouseOver(element);
});

element.addEventListener('mouseout', function () {
    handleMouseOut(element);
});
});

// Element mit ID 'video'
const videoElement = document.getElementById('video');
const bildElement = document.querySelector('.bild');

let timeoutId;

bildElement.addEventListener('mouseenter', function () {
clearTimeout(timeoutId);
videoElement.style.display = 'none';
});

bildElement.addEventListener('mouseleave', function () {
timeoutId = setTimeout(function () {
    videoElement.style.display = 'none';
}, 2000);
});

bildElement.addEventListener('mouseover', function () {
handleMouseOver(bildElement);
});

bildElement.addEventListener('mouseout', function () {
handleMouseOut(bildElement);
});

// Element mit ID 'video2'
const videoElement2 = document.getElementById('video2');
const bildElement2 = document.querySelectorAll('.bild')[1]; // Das zweite Element mit der Klasse 'bild'

bildElement2.addEventListener('mouseover', function () {
handleMouseOver(bildElement2);
});

bildElement2.addEventListener('mouseout', function () {
handleMouseOut(bildElement2);
});

// Element mit ID 'video3'
const videoElement3 = document.getElementById('video3');
const bildElement3 = document.querySelectorAll('.bild')[2]; // Das dritte Element mit der Klasse 'bild'

bildElement3.addEventListener('mouseover', function () {
handleMouseOver(bildElement3);
});

bildElement3.addEventListener('mouseout', function () {
handleMouseOut(bildElement3);
});


// Wechselwort Titel
var wechselwoerter = ["Menschen", "Projekte", "Aktivismus", "Recht"];
var index = 0;

// Funktion zum Wechseln der Wörter
function wechselWort() {
 title.textContent = wechselwoerter[index];
 index = (index + 1) % wechselwoerter.length;
}

// Intervall für den Wechsel (5 Sekunden)
setInterval(wechselWort, 5000);
});

// Function to handle click event on images
function imageClickHandler() {
    // Find the associated text and button elements
    var text = this.nextElementSibling;
    var button = text ? text.nextElementSibling : null;

    // Toggle visibility of text and button
    if (text) {
        text.style.display = text.style.display === 'block' ? 'none' : 'block';
    }
    if (button) {
        button.style.display = button.style.display === 'block' ? 'none' : 'block';
    }
}

// Adding click event listeners to all image containers
document.addEventListener('DOMContentLoaded', function() {
    var imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(function(container) {
        container.addEventListener('click', imageClickHandler);
    });
});
