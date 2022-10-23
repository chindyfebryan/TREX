const date = document.getElementById("date");
const category = document.getElementById("category");
const amount = document.getElementById("amount");
const table = document.getElementById("tableData");
const btnAdd = document.getElementById('btn-add');
const totalValue = document.getElementById("total-value");
const pre = document.querySelector('#msg pre');
const history = document.querySelector('#history');
let rowCount = table.rows.length;
history.style.display = "none";
//memanggil fungsi addRow dan addExpense jika button "tambahkan" diklik
btnAdd.addEventListener('click', (ev)=>{
  ev.preventDefault(); //to stop the form submitting
  if(date.value == ""){
    alert("Fill the date!");
  } else if(amount.value == "") {
    alert("Fill your amount!")
  }
    else {
    history.style.display = "block";
    addRow();
    addExpense();
  }
});

// menambahkan data baru ke tabel dari input user
function addRow() { 
  //untuk menambah baris baru
  var row = table.insertRow(rowCount);

  //untuk menambah isi baris baru
  row.insertCell(0).innerHTML= date.value;
  row.insertCell(1).innerHTML= category.value;
  row.insertCell(2).innerHTML= amount.value;
  //memberi button "hapus" pada baris baru
  row.insertCell(3).innerHTML= '<input type="button" value = "Hapus" onClick="deleteRow(this)">';

  //menghitung total pengeluaran yang ada dalam tabel
  //jika amount bukan integer maka amount = 0
  var amountInt = isNaN(parseInt(amount.value)) ? 0 : (parseInt(amount.value));
  //menambah total yang sudah ada dengan amount baru
  var sums = parseInt(totalValue.innerHTML) + parseInt(amountInt);
  totalValue.innerHTML = sums;
}

//menghapus data pada baris yang dipilih user
function deleteRow(obj) {
  //menentukan index baris tabel
  var index = obj.parentNode.parentNode.rowIndex-1;
  //menghapus data yang dihapus di array
  expenses.splice(index, 1);

  var nilai = parseInt(obj.parentNode.parentNode.childNodes[2].innerHTML);
  var nilaiInt = isNaN(parseInt(nilai)) ? 0 : (parseInt(nilai));
  var total = parseInt(totalValue.innerHTML);
  //mengurangi total pengeluaran
  totalValue.innerHTML = total - nilaiInt;
  //menghapus baris
  table.deleteRow(index);
  if(rowCount == 0){
    history.style.display = "none";
  }
  checkData();
}

let expenses = [];
let id = 0;
//menambahkan data dari inputan user ke array yang berisi objects
const addExpense = ()=>{
  id++;
  let expense = {
    id: id,
    date : date.value,
    category : category.value,
    amount : amount.value
  }
  //tambahkan objects expense ke array expenses
  expenses.push(expense);
  document.forms[0].reset(); // to clear the form for the next entries
  document.querySelector('form').reset();
  checkData();
}

// mengecek apakah data sudah terupdate atau belum
function checkData() {
  //for display purposes only
  pre.textContent = '\n' + JSON.stringify(expenses, '\t', 2);

  //saving to localStorage
  localStorage.setItem('MyexpenseList', JSON.stringify(expenses) );
}