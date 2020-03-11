'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZmwyNTA4IiwiYSI6ImNrN21uZjJ0dTA3dzYzaG4ybDdpa2p5MzQifQ.zI-jnQ5M6ft68VVJR3XYMQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-73.9465, 40.8116],
    zoom: 15
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
        content: 'Community Voices Heard'
    },
    {
        location: [-73.937187,40.804932],
        content: 'Day Care Council of New York, Inc.'
    },
    {
        location: [-73.951363,40.793060],
        content: 'El Museo del Barrio'
    },
    {
        location: [-73.936760,40.795730],
        content: 'LSA Family Health Service, Inc. '
    },
    {
        location: [-73.945190,40.818850],
        content: 'One Hundred Black Men, Inc. of New York'
    },
    {
        location: [-73.943291,40.816010],
        content: 'The New York Urban League'
    },
    {
        location: [-73.944330,40.790010],
        content: 'Union Settlement Association, Inc'
    },
    {
        location: [-73.938880,40.804990],
        content: 'Uptown Grand Central'
    }
    ]

data.forEach(function(d) {

    let marker = new mapboxgl.Marker()
    marker.setLngLat(d.location)
    marker.addTo(map)

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
