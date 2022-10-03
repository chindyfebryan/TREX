var arrDates=new Array();
var arrCategories=new Array();
var arrAmounts=new Array();
var arrId=new Array();

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
    
    var content="<b>Data Entered by User :</b><br>";
    var input = document.getElementsByName('txtval[]');
               
    for (var x = 0; x < input.length; x++) 
    {
      var a = input[x];
      content = content + "myarray[" + x + "].value= " + a.value + "<br> "; 
      document.getElementById('display').innerHTML = content+"</b>";  
    }

    arrDates[arrDates.length]=date;    
    arrCategories=[arrCategories.length]=category;
    arrAmounts[arrAmounts.length]=amount;

    var content="<b>Data Entered by User :</b><br>";
  content+= [...arrDates]+"</br>";
  content+=[...arrCategories]+"</br>";
  content+=[...arrAmounts]+"</br>";
 
  document.getElementById('display').innerHTML = content;
}

function sum() {
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableData");
    table.deleteRow(index);
}

function load() {   
    console.log("Page load finished");
}