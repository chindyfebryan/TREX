// menambahkan data baru ke tabel dari input user
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
  //memberi button "hapus" pada baris baru
  row.insertCell(3).innerHTML= '<input type="button" value = "Hapus" onClick="deleteRow(this)">';

  //menghitung total pengeluaran yang ada dalam tabel
  var totalValue = document.getElementById("total-value").innerHTML;
  var amountInt = isNaN(parseInt(amount)) ? 0 : (parseInt(amount));
  var sums = parseInt(totalValue) + parseInt(amountInt);
  document.getElementById("total-value").innerHTML = sums;
  id++;
}
//memanggil fungsi addRow jika button "tambahkan" diklik
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addRow);
});

//menghapus data pada baris yang dipilih user
function deleteRow(obj) {
  //menentukan index baris tabel
  var index = obj.parentNode.parentNode.rowIndex-1;
  //menghapus data dari array
  expenses.splice(index, 1);

  var nilai = parseInt(obj.parentNode.parentNode.childNodes[2].innerHTML);
  var nilaiInt = isNaN(parseInt(nilai)) ? 0 : (parseInt(nilai));
  var total = parseInt(document.getElementById("total-value").innerHTML);
  var table = document.getElementById("tableData");
  //mengurangi total pengeluaran
  document.getElementById("total-value").innerHTML = total - nilaiInt;
  //menghapus baris
  table.deleteRow(index);
  checkData();
}

let expenses = [];
let id = 0;
//menambahkan data dari inputan user ke array yang berisi objects
const addExpense = (ev)=>{
  ev.preventDefault();  //to stop the form submitting
  let expense = {
    id: id,
    date : document.getElementById("date").value,
    category : document.getElementById("category").value,
    amount : document.getElementById("amount").value
  }
  expenses.push(expense);
  document.forms[0].reset(); // to clear the form for the next entries
  document.querySelector('form').reset();
  checkData();
}
//memanggil fungsi addExpense jika button "tambahkan" diklik
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', addExpense);
});

// mengecek apakah data sudah terupdate atau belum
function checkData() {
  //for display purposes only
  // console.warn('added' , {expenses} );
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(expenses, '\t', 2);

  //saving to localStorage
  localStorage.setItem('MyexpenseList', JSON.stringify(expenses) );

  //chart
  const ctx = document.getElementById('myChart').getContext('2d');
  
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: Object.keys(expenses[id].amount),
        datasets: [{
            label: 'Number of GitHub Stars',
            data: Object.values(expenses[id].amount),
        }, ],
    },
    options: {
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',  // Bar 1
            'rgba(54, 162, 235, 0.2)',  // Bar 2
            'rgba(255, 206, 86, 0.2)',  // Bar 3
            'rgba(75, 192, 192, 0.2)',  // Bar 4
            'rgba(153, 102, 255, 0.2)', // Bar 5
            'rgba(255, 159, 64, 0.2)'   // Bar 6
        ],
        borderWidth: 2,
        borderColor: 'black'
    }
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
}
