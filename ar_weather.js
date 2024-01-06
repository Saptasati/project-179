var coordinates = {}

$(document).ready( function() {
    getCoordinates()
})

function getCoordinates() {
    var searchParameter = new URLSearchParams(window.location.search)
    if(searchParameter.has("source") && searchParameter.has("destination")) {
        var source = searchParameter.get("source")
        var destination = searchParameter.get("destination")

        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(";")[1]
        
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lng = destination.split(";")[1]
    } else{
        alert("Coordinates not selected")
        window.history.back()
    }
}