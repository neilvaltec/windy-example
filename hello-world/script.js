const options = {
    // Required: API key
    key: 'vvVCA3x5BCnKBISloOZ7hIvts6wGvnR1', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    const { store } = windyAPI;
    store.set('particlesAnim', "off");
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([50.4, 14.3])
        .setContent('Hello World')
        .openOn(map);
});
