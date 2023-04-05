const addCategoryForm = document.getElementById('add-category-form');
const categoryNameInput = document.getElementById('category-name-input');
const categoryList = document.getElementById('category-list');
const transactionTable = document.getElementById('transaction-table').getElementsByTagName('tbody')[0];

function addCategory() {
  const categoryName = categoryNameInput.value.trim();
  if (categoryName === '') return;
  fetch('/api/categories/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: categoryName})
  })
  .then(response => response.json())
  .then(data => {
    categoryNameInput.value = '';
    categoryList.insertAdjacentHTML('beforeend', `<li>${data.name}</li>`);
  })
  .catch(error => console.log(error));
}

function displayTransactions(transactions) {
  transactionTable.innerHTML = '';
}
