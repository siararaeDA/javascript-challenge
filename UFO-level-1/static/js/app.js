// from data.js
var tableData = data;

// Add all of the data to a table when the page loads
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
})

// Add filter functionality to button
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    // Get the input value in the filter field
    var dateInput = d3.select("#datetime").property("value");

    // Clear the table so it will only display items that match filter
    d3.selectAll("tr").remove();

    // Get filtered values
    var filteredData = tableData.filter(entry => entry.datetime === dateInput);

    // Repopulate table with filtered data.
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        // Add and populate the cells in the rows
        Object.entries(filteredData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        }); 
    })
})