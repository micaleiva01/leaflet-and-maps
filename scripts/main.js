let mapVar = L.map('map').setView([38.997,-5.042], 5.79);


L.tileLayer('https://api.mapbox.com/styles/v1/micaleiva1/clall7l9a000614n4pxu7x74c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljYWxlaXZhMSIsImEiOiJjbGFsazYzazgwNjZhM29xYzg2djRpdWV0In0.mI9xq8pXSbYhFTvax_TOmA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mapVar);



let marker1 = L.marker([40.41711425659943, -3.7035477756432056]).addTo(mapVar);
marker1.bindPopup("We visited Puerta del Sol, which is located in the center of Madrid.");

let marker2 = L.marker([36.50868847485205, -4.885699205049589]).addTo(mapVar);
marker2.bindPopup("Parque de la Alameda is one of the oldest parks of the city of Marbella.");

let marker3 = L.marker([36.99496696849509, -8.94937311233871]).addTo(mapVar);
marker3.bindPopup("The Farol de Sagres is located in Portugal's southernmost point.");

let marker4 = L.marker([38.7121435446811, -9.140249208997785]).addTo(mapVar);
marker4.bindPopup("Museu Arqueologico do Carmo is located in Lisbon, Portugal's capital city.");

let marker5 = L.marker([41.14138759851681, -8.61567539901272]).addTo(mapVar);
marker5.bindPopup("We visited Palacio da Bolsa, which an extremely popular touristic spot in Porto.");
