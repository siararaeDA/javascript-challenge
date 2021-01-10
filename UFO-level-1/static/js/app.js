// from data.js
var tableData = data;

// Add all of the data to a table

// Select the table
var tbody = d3.select("tbody");

// Iterate through the data
tableData.forEach(ufoSighting => {
    // Add a row to the table
    var row = tbody.append("tr");
    // Add and populate cells in the row
    Object.entries(ufoSighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
    });       
});

// Add filter functionality to button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    // Get the input value in the filter field
    var dateInput = d3.select("#datetime").property("value");

    // Get filtered values
    var filteredData = tableData.filter(entry => entry.datetime === dateInput);
})