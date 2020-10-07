/* eslint-disable */
const mapEl = document.getElementById('map');

if (mapEl) {
  const locations = JSON.parse(mapEl.dataset.locations);
  //console.log(locations);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ2VvcmdlYXJpb24iLCJhIjoiY2tmeHkzenNhMjR6dzJ5bXp2bWptcmVqbyJ9.gM4bc8pjaQb38Ur7coqyVA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/georgearion/ckfyuofj10mel1alf7qdq9sfp',
    scrollZoom: false

    //zoom: 5
    // center: [long, lat]
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add Popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 250,
      bottom: 150,
      left: 200,
      right: 200
    }
  });
}