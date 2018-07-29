
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");


$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredTable = data;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredTable.length; i++) {
    var address = filteredTable[i];
    console.log(address)
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}


filteredTable.forEach(renderTable);

function handleSearchButtonClick() {
  var filteredData = filteredTable.filter(record => record.datetime === dateTime);
  var dateTime = d3.select("#datetime").property("value");
  var filterDate = $dateInput.value;
  var filteredData = renderTable;
  if (filterDate != "")
  {
    filteredData = filteredData(renderTable, 'datetime', dateTime)
   
  }



renderTable();

};

renderTable();


var submit = d3.select("#search");

submit.on("click", function() {
    
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var dateTime = d3.select("#datetime").property("value");
   
    var filteredData = filteredTable.filter(record => record.datetime === dateTime);
    filteredData.forEach(renderTable);



  
});