// CACHE VALUES
const totalDisplay = document.getElementById('total');
const newBtn = document.getElementById('new-btn');
const expenseModal = document.getElementById('modal');
const expenseDate = document.getElementById('date');
const expenseDescription = document.getElementById('description');
const expenseAmount = document.getElementById('amount');
const expenseCategory = document.getElementById('category');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
const expenseForm = document.getElementById('expense-form');
let expensesList = [];
const expenseTable = document.getElementById('expense-data');
const total = 0;

// RETRIEVE FROM LOCAL STORAGE
window.addEventListener('load', () => {
    const savedExpenseList = localStorage.getItem('expenseList');
    expensesList = savedExpenseList ? JSON.parse(savedExpenseList) : [];

    // console.log(expensesList);
    renderExpense();
    calculateTotal();
});

// FUNCTIONS
const addExpense = () => {
    const expense = {
        id: editingExpenseId ? editingExpenseId : crypto.randomUUID(),
        date: expenseDate.value,
        description: expenseDescription.value,
        category: expenseCategory.value,
        amount: Number(expenseAmount.value)
    };

    if (editingExpenseId) {
        const index = expensesList.findIndex(
            item => item.id === editingExpenseId
        );

        expensesList[index] = expense;
    } else {
        expensesList.push(expense);
    }

    // console.log(expensesList, "Submitted!");
    renderExpense();
    calculateTotal();
    saveExpenses();

    expenseForm.reset();
    expenseModal.style.display = "none";

    editingExpenseId = null;
    addBtn.textContent = "Add Expense";
};

const renderExpense = () => {
    expenseTable.innerHTML = "";

    expensesList.forEach((expense) => {
        const newExpense = document.createElement("tr");

        newExpense.innerHTML = `
                            <td>
                                <p>${expense.date}</p>
                            </td>
                            <td>
                                <p>${expense.description.charAt(0).toUpperCase() + expense.description.slice(1)}</p>
                            </td>
                            <td>
                                <p>${expense.category}</p>
                            </td>
                            <td>
                                <p>$${expense.amount.toLocaleString('en-US', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })}</p>
                            </td>
                            <td>
                                <div class="action-btns">
                                <button class="edit-btn">Edit</button>
                                <button class="delete-btn">Delete</button>
                            </div>
                            </td>
        `;

        expenseTable.appendChild(newExpense);
    });
};

const calculateTotal = () => {
    const totalCost = expensesList.reduce((accumulator, expense) => {
        return accumulator + expense.amount;
    }, 0);

    totalDisplay.innerHTML = `$${totalCost.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
};

const saveExpenses = () => {
    // SAVE TO LOCAL STORAGE
    localStorage.setItem('expenseList', JSON.stringify(expensesList));
};

// EVENT LISTENERS
newBtn.addEventListener('click', () => {
    editingExpenseId = null;
    expenseForm.reset();
    addBtn.textContent = "Add Expense";
    expenseModal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    expenseModal.style.display = "none";
});

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Button clicked!');
    addExpense();
});

expenseTable.addEventListener('click', (e) => {
    // DELETE BUTTON
    if (e.target.classList.contains('delete-btn')) {
        const row = e.target.closest('tr');
        const rowIndex = Array.from(expenseTable.children).indexOf(row);

        expensesList.splice(rowIndex, 1);
        renderExpense();
        calculateTotal();
        console.log('Expense Deleted!');
        saveExpenses();
    }

    // EDIT BUTTON
    if (e.target.classList.contains('edit-btn')) {
        const row = e.target.closest('tr');
        const rowIndex = Array.from(expenseTable.children).indexOf(row);

        const expense = expensesList[rowIndex];

        editingExpenseId = expense.id;
        expenseDate.value = expense.date;
        expenseDescription.value = expense.description;
        expenseCategory.value = expense.category;
        expenseAmount.value = expense.amount;

        addBtn.textContent = "Save Changes";
        expenseModal.style.display = 'flex';

        calculateTotal();
    }
});