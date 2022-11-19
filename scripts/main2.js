let mapVariable = L.map('map2').setView([-34.596146, -58.432633], 10.69);


L.tileLayer('https://api.mapbox.com/styles/v1/micaleiva1/clall7l9a000614n4pxu7x74c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljYWxlaXZhMSIsImEiOiJjbGFsazYzazgwNjZhM29xYzg2djRpdWV0In0.mI9xq8pXSbYhFTvax_TOmA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mapVariable);


for (let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] )
  .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo(mapVariable);
}
