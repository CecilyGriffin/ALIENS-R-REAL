// Get a reference to the table body
const tbody = d3.select("tbody");

// call data
const ufodata = data;

// make a func to build table 
function buildTable(data) {
// clear existing data
  tbody.html("")
// loop through data points & write to table
  data.forEach((datarow) => {
    const row = tbody.append("tr");
    Object.values(datarow).forEach((value) => {
      let cell = row.append("td");
        cell.text(value);
    });
  });
}
// make an event listener
function listen(){
  const date = d3.select("#datetime").property("value");
  let filteredData = ufodata;
  if (date){
    filteredData = filteredData.filter(row => row.datetime === date); 
  } 
  buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click",listen);
buildTable(ufodata);

// // Console.log the sighting data from data.js
// console.log(data);

// // Loop Through `data` and console.log each sighting report object
// data.forEach(function(sightings) {
// console.log(data);
// });

// // Use d3 to append one table row `tr` for each sighting report object
// data.forEach(function(sightings) {
//    console.log(data);
//    var row = tbody.append("tr");
//  });

// // Use `Object.entries` to console.log each sighting value
// data.forEach(function(sightings) {
//    console.log(data);
//    var row = tbody.append("tr");

//    Object.entries(sightings).forEach(function([key, value]) {
//      console.log(key, value);
//    });
//  });

// // Use d3 to append 1 cell per sighting report value 
//  data.forEach(function(sightings) {
//    console.log(sightings);
//    var row = tbody.append("tr");

//    Object.entries(sightings).forEach(function([key, value]) {
//      console.log(key, value);
//      // Append a cell to the row for each value
//      // in the sighting object
//      var cell = row.append("td");
//    });
//  });

// // Use d3 to update each cell's text with
// //   sighting values (date, city, state, country, etc)
// // data.forEach(function(sightings) {
//  //  console.log(sightings);
//  //  var row = tbody.append("tr");
//  //  Object.entries(sightings).forEach(function([key, value]) {
//  //    console.log(key, value);
//      // Append a cell to the row for each value
//      // in the report object
//   //   var cell = row.append("td");
//   //   cell.text(value);
// //   });
// // });

// // Refactor to use Arrow Functions
// data.forEach((sightings) => {
//     var row = tbody.append("tr");
//     Object.entries(sightings).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
  