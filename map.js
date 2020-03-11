'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZmwyNTA4IiwiYSI6ImNrN21uZjJ0dTA3dzYzaG4ybDdpa2p5MzQifQ.zI-jnQ5M6ft68VVJR3XYMQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-74.0060, 40.7128],
    zoom: 10,
    pitch: 20
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

map.addControl(scale, 'bottom-right')

let data = [
    {
      location: [-73.943600,40.808930],
      content: 'African Communities Together'
    },
    {
        location: [-73.946830,40.792790],
        content: 'Community Voices Heard '
    },
    ]

data.forEach(function(d) {

    let marker = new mapboxgl.Marker()
    marker.setLngLat(d.location)
    marker.addTo(map)

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
