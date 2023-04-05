let categoryTable = document.getElementById("category-table");
let saveButton = document.getElementById("save-button");
let clearButton = document.getElementById("clear-button");
let searchInput = document.getElementById("search-input");

let categories = [];

function addCategory(name, description) {
  categories.push({ name: name, description: description });
  updateTable();
}

function updateTable() {
  categoryTable.innerHTML = "";
  for (let i = 0; i < categories.length; i++) {
    let row = categoryTable.insertRow(-1);
    let numberCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let descriptionCell = row.insertCell(2);
    let actionsCell = row.insertCell(3);

    numberCell.innerHTML = i + 1;
    nameCell.innerHTML = categories[i].name;
    descriptionCell.innerHTML = categories[i].description;
    actionsCell.innerHTML = `
      <button class="edit-button" onclick="editCategory(${i})">Редагувати</button>
      <button class="delete-button" onclick="deleteCategory(${i})">Видалити</button>
    `;
  }
}

function clearForm() {
  document.getElementById("category-name").value = "";
  document.getElementById("category-description").value = "";
}

function searchTable() {
  let searchText = searchInput.value.toLowerCase();
  let rows = categoryTable.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let name = rows[i].getElementsByTagName("td")[1].innerHTML.toLowerCase();
    let description = rows[i].getElementsByTagName("td")[2].innerHTML.toLowerCase();
    if (name.indexOf(searchText) > -1 || description.indexOf(searchText) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function editCategory(index) {
  let category = categories[index];
  document.getElementById("category-name").value = category.name;
  document.getElementById("category-description").value = category.description;
  saveButton.innerHTML = "Оновити";
  saveButton.onclick = function () {
    updateCategory(index);
  };
}

function updateCategory(index) {
  let newName = document.getElementById("category-name").value;
  let newDescription = document.getElementById("category-description").value;
  categories[index].name = newName;
  categories[index].description = newDescription;
  clearForm();
  updateTable();
  saveButton.innerHTML = "Зберегти";
  saveButton.onclick = function () {
    addCategory(newName, newDescription);
  };
}

function deleteCategory(index) {
  categories.splice(index, 1);
  updateTable();
}

saveButton.onclick = function () {
  let name = document.getElementById("category-name").value;
  let description = document.getElementById("category-description").value;
  addCategory(name, description);
};

clearButton.onclick = function () {
  clearForm();
};

searchInput.onkeyup = function () {
  searchTable();
};
