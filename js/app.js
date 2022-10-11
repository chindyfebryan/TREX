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
  var sums = parseInt(document.getElementById("total-value").innerHTML) + parseInt(amount);
  document.getElementById("total-value").innerHTML = sums;
}

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex-1;
  var nilai = parseInt(obj.parentNode.parentNode.childNodes[2].innerHTML);
  var total = parseInt(document.getElementById("total-value").innerHTML);
  var table = document.getElementById("tableData");
  document.getElementById("total-value").innerHTML = total - nilai;
  table.deleteRow(index);
}