document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const startDate = new Date(2024, 8, 1);
    const endDate = new Date(2024, 8, 30);
    const highlightedDays = [6, 7, 8, 9];

    // Loop para adicionar os dias do mês
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const day = date.getDate();
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.classList.add('day');

        if (highlightedDays.includes(day)) {
            dayElement.classList.add('highlight');
        }

        daysContainer.appendChild(dayElement);
    }
});

function initMap() {
    // Coordenadas do mapa
    var myLatLng = { lat: 41.31667228727907, lng: -7.672339331668043 };

    // Cria o mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16, // Ajuste o zoom conforme necessário
        disableDefaultUI: true, // Desabilita controlos padrão do Google Maps
    });

    // Marcador no mapa
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Romaria de Nossa Senhora da Pena'
    });
}

// AutoScroll
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}