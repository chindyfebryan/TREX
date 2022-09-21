function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "header-right") {
      x.className += " responsive";
    } else {
      x.className = "header-right";
    }
}
var amounts = []

function addRow() {    
    var date = document.getElementById("date");
    var category = document.getElementById("category");
    var amount = document.getElementById("amount");
    var table = document.getElementById("tableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    amounts.push(amount);

    row.insertCell(0).innerHTML= date.value;
    row.insertCell(1).innerHTML= category.value;
    row.insertCell(2).innerHTML= amount.value;
    row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)"> <input type="button" value = "Sum" onClick="Javacsript:sum(this)">';
}

function calculate() {
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableData");
    table.deleteRow(index);
}

function load() {   
    console.log("Page load finished");
}