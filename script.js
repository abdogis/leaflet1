// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add content to the sidebar
var sidebar = document.getElementById('sidebar');
sidebar.innerHTML = '<h2>Sidebar Content</h2><p>This is a sidebar with some content.</p>';

// Add an example marker to the map
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker!')
    .openPopup();
