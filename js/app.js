// var arrDates=new Array();
// var arrCategories=new Array();
// var arrAmounts=new Array();
// var arrId=new Array();

function addRow() {    
  var date = document.getElementById("date").value;
  var category = document.getElementById("category").value;
  var amount = document.getElementById("amount").value;
  var table = document.getElementById("tableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML= date;
  row.insertCell(1).innerHTML= category;
  row.insertCell(2).innerHTML= amount;
  row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
  row.insertCell(4).innerHTML= '<input type="button" value = "Sum" onClick="Javacsript:sum(this)">';
}

// function sum(obj) {
//   var index = obj.parentNode.parentNode.rowIndex;
// }

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex;
  var table = document.getElementById("tableData");
  table.deleteRow(index);
}