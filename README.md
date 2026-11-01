# Expense Tracker

A simple, aesthetically designed expense tracker built with HTML, CSS, and vanilla JavaScript. This application allows users to manage their personal expenses, monitor spending, and keep track of their total expenses through a clean and intuitive interface.

## Features

- **Add Expenses:** Record expenses with a date, description, category, and amount.
- **Edit Expenses:** Update previously recorded expense details.
- **Delete Expenses:** Remove expenses that are no longer needed.
- **Automatic Total Calculation:** Automatically calculates and displays the total of all recorded expenses.
- **Currency Formatting:** Formats monetary values with commas and two decimal places for improved readability.
- **Data Persistence:** Uses browser Local Storage to save expenses, allowing data to remain available after refreshing or reopening the browser.
- **Input Validation:** Prevents invalid expense amounts, including negative numbers.
- **Empty State:** Displays a helpful message when no expenses have been recorded.

## Technologies Used

- **HTML5** – Application structure and content.
- **CSS3** – Styling, layout, and responsive design.
- **JavaScript (ES6+)** – Application functionality, DOM manipulation, event handling, and expense calculations.
- **Web Storage API (Local Storage)** – Client-side data persistence.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge).
- A code editor such as Visual Studio Code.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Open the project in Visual Studio Code.

4. Launch `index.html` in your browser, or use the Live Server extension in VS Code.

## How to Use

1. Open the application in your browser.
2. Select the **Add Expense** button.
3. Enter the expense date, description, category, and amount.
4. Submit the form to add the expense to the table.
5. Use the **Edit** button to update an existing expense.
6. Use the **Delete** button to remove an expense.
7. View your automatically updated total at the top of the application.

Expenses are saved automatically using Local Storage.

## Project Structure

```text
expense-tracker/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

*Note: Adjust the folder structure above to match your actual project.*

## Key Concepts Practiced

This project provided hands-on experience with:

- JavaScript variables, functions, and conditional statements.
- Arrays and array methods, including `push()`, `splice()`, `findIndex()`, and `reduce()`.
- JavaScript objects and unique identifiers using `crypto.randomUUID()`.
- DOM manipulation and dynamic HTML rendering.
- Event listeners and event delegation.
- Form handling and input validation.
- Number formatting using `toLocaleString()`.
- Browser Local Storage using `JSON.stringify()` and `JSON.parse()`.
- CRUD operations (Create, Read, Update, Delete).

## Future Improvements

Potential enhancements include:

- Expense filtering by category.
- Sorting expenses by date or amount.
- Monthly and yearly spending summaries.
- Data visualization with charts.
- Exporting expense records to CSV.
- Improved mobile responsiveness.

## License

This project is available for educational and personal use.

---

**Author:** Valerie 

**Project:** Expense Tracker