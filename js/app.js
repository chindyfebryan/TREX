

function addRow(ev) {
  ev.preventDefault();    
  var date = document.getElementById("date").value;
  var category = document.getElementById("category").value;
  var amount = document.getElementById("amount").value;
  var table = document.getElementById("tableData");

  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);

  row.insertCell(0).innerHTML= date;
  row.insertCell(1).innerHTML= category;
  row.insertCell(2).innerHTML= amount;
  row.insertCell(3).innerHTML= '<input type="button" value = "Hapus" onClick="deleteRow(this)">';
  var sums = parseInt(document.getElementById("total-value").innerHTML) + parseInt(amount);
  document.getElementById("total-value").innerHTML = sums;
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addRow);
});

function deleteRow(obj) {
  var index = obj.parentNode.parentNode.rowIndex-1;
  var nilai = parseInt(obj.parentNode.parentNode.childNodes[2].innerHTML);
  var total = parseInt(document.getElementById("total-value").innerHTML);
  var table = document.getElementById("tableData");
  document.getElementById("total-value").innerHTML = total - nilai;
  table.deleteRow(index);
}

let expenses = [];
const addExpense = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let expense = {
        id: Date.now(),
        date : document.getElementById("date").value,
        category : document.getElementById("category").value,
         amount : document.getElementById("amount").value
    }
    expenses.push(expense);
    document.forms[0].reset(); // to clear the form for the next entries
    document.querySelector('form').reset();

    //for display purposes only
    // console.warn('added' , {expenses} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(expenses, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyexpenseList', JSON.stringify(expenses) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addExpense);
});

var series = JSC.nest()
  // Group by day
  .key({ key: "date", pattern: "day" })
  // Count data entries for each day grouping
  .rollup(function(v) {
    return v.length;
  })
  .series(expenses);

var chart = JSC.chart("chartDiv", {
  legend_visible: false,
  toolbar_items_export_visible: false,
  title_label_text: "Count data rows by day",
  xAxis_label_text: "Date",
  yAxis_label_text: "Hits",
  series: series
});