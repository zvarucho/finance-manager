const categorySelect = document.getElementById("category");
const amountInput = document.getElementById("amount");
const descriptionInput = document.getElementById("description");
const dateInput = document.getElementById("date");
const saveButton = document.getElementById("save-button");
const clearButton = document.getElementById("clear-button");

function clearForm() {
categorySelect.selectedIndex = 0;
amountInput.value = "";
descriptionInput.value = "";
dateInput.value = "";
}

function saveTransaction() {
const category = categorySelect.value;
const amount = parseFloat(amountInput.value);
const description = descriptionInput.value;
const date = dateInput.value;

// TODO: Add code to save transaction

clearForm();
}

saveButton.addEventListener("click", saveTransaction);
clearButton.addEventListener("click", clearForm);