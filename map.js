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
        location: [-73.96191,40.80762],
        content: 'I like to eat my lunch here'
    },
    {
        location: [-73.95936,40.80610],
        content: '15 years ago, you could see over the trees'
    },
    {
        location: [-73.96204,40.80994],
        content: 'This was once tennis courts'
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
