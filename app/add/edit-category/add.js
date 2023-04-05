// Функція, що додає новий рядок до таблиці
function addRow() {
    var nameInput = document.getElementById("nameInput");
    var descriptionInput = document.getElementById("descriptionInput");
  
    // перевіряємо, що обидва поля заповнені
    if (nameInput.value === "" || descriptionInput.value === "") {
      alert("Будь ласка, заповніть обидва поля!");
      return;
    }
  
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var rowCount = table.rows.length - 1;
  
    // Додаємо значення до нового рядка таблиці
    row.insertCell(0).innerHTML = rowCount;
    row.insertCell(1).innerHTML = nameInput.value;
    row.insertCell(2).innerHTML = descriptionInput.value;
    row.insertCell(3).innerHTML = "<button onclick='editRow(this)'>Редагувати</button> <button onclick='deleteRow(this)'>Видалити</button>";
  
    // Очищаємо поля вводу
    nameInput.value = "";
    descriptionInput.value = "";
  }
  
  // Функція, що видаляє рядок з таблиці
  function deleteRow(button) {
    var table = document.getElementById("table");
    var rowIndex = button.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);
    updateRowCount();
  }
  
  // Функція, що редагує вміст рядка таблиці
  function editRow(button) {
    var nameInput = document.getElementById("nameInput");
    var descriptionInput = document.getElementById("descriptionInput");
  
    // Отримуємо значення полів з рядка таблиці
    var rowIndex = button.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table");
    var row = table.rows[rowIndex];
    var name = row.cells[1].innerHTML;
    var description = row.cells[2].innerHTML;
  
    // Вставляємо значення до полів вводу
    nameInput.value = name;
    descriptionInput.value = description;
  
    // Видаляємо рядок з таблиці
    table.deleteRow(rowIndex);
    updateRowCount();
  }
  
  // Функція, що оновлює значення номерів рядків
  function updateRowCount() {
    var table = document.getElementById("table");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
      rows[i].cells[0].innerHTML = i - 1;
    }
  }
  