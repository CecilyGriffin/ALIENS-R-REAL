// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(data);

// Loop Through `data` and console.log each sighting report object
data.forEach(function(sightings) {
console.log(data);
});

// Use d3 to append one table row `tr` for each sighting report object
data.forEach(function(sightings) {
   console.log(data);
   var row = tbody.append("tr");
 });

// Use `Object.entries` to console.log each weather report value
data.forEach(function(sightings) {
   console.log(data);
   var row = tbody.append("tr");

   Object.entries(sightings).forEach(function([key, value]) {
     console.log(key, value);
   });
 });

// Use d3 to append 1 cell per sighting report value 
 data.forEach(function(sightings) {
   console.log(sightings);
   var row = tbody.append("tr");

   Object.entries(sightings).forEach(function([key, value]) {
     console.log(key, value);
     // Append a cell to the row for each value
     // in the sighting object
     var cell = row.append("td");
   });
 });

// Use d3 to update each cell's text with
//  weather sighting values (date, city, state, country, etc)
// data.forEach(function(sightings) {
 //  console.log(sightings);
 //  var row = tbody.append("tr");
 //  Object.entries(sightings).forEach(function([key, value]) {
 //    console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
  //   var cell = row.append("td");
  //   cell.text(value);
//   });
// });

// BONUS: Refactor to use Arrow Functions!
data.forEach((sightings) => {
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  