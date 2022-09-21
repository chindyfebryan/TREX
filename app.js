function addRow() {    
    var date = document.getElementById("date");
    var age = document.getElementById("category");
    var amount = document.getElementById("amount");
    var table = document.getElementById("tableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= date.value;
    row.insertCell(1).innerHTML= category.value;
    row.insertCell(2).innerHTML= amount.value;
    row.insertCell(3).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableData");
    table.deleteRow(index);
}

function load() {   
    console.log("Page load finished");
}