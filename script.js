// CACHE VALUES
const total = document.getElementById('total');
const newBtn = document.getElementById('new-btn');
const expenseModal = document.getElementById('modal');
const expenseDate = document.getElementById('date');
const expenseDescription = document.getElementById('description');
const expenseAmount = document.getElementById('amount');
const expenseCategory = document.getElementById('category');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');
const expenseForm = document.getElementById('expense-form');
const expensesList = [];


// FUNCTIONS
const addExpense = () => {
    const expense = {
        id: crypto.randomUUID(),
        date: expenseDate.value,
        description: expenseDescription.value,
        category: expenseCategory.value,
        amount: Number(expenseAmount.value)
    };

    expensesList.push(expense);
    // console.log(expensesList, "Submitted!");

    expenseForm.reset();
    expenseModal.style.display = "none";

};

// EVENT LISTENERS
newBtn.addEventListener('click', () => {
    expenseModal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    expenseModal.style.display = "none";
});

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('Button clicked!');
    addExpense();
})