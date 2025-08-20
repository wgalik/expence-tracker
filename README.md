# 💰 Expense Tracker

A simple and interactive **Expense Tracker** application built with **React**.  
This project helps users manage their income and expenses, track categories, and visualize financial data with charts.

---

## 🚀 Features

- ➕ Add new transactions with:
  - Description
  - Amount
  - Date
  - Category (Income or Outcome)
  - Subcategory for expenses (e.g., Food, Transport, Education, etc.)
- 📊 Visualize spending with a **doughnut chart** (Chart.js).
- 📑 View all transactions in a **responsive table**.
- 💵 Automatic balance calculation.
- ✅ Form validation with user-friendly feedback (Bootstrap).
- 🎨 Clean and responsive UI.

---

## 🛠️ Tech Stack

- **React** (functional components, hooks)
- **Bootstrap** (styling and form validation)
- **Chart.js** with **react-chartjs-2** (data visualization)
- **JavaScript (ES6+)**

---

## 📷 Preview

[Demo](https://wgalik.github.io/expence-tracker/)

---

`src/
├── components/
│   ├── AddForm.js        # Form for adding transactions
│   ├── BalanceCard.js    # Displays balance, chart and transaction table
│   ├── ChartCard.js      # Doughnut chart for visualizing categories
│   └── TableRow.js       # Single transaction row
├── App.js                # Main component (state management)
├── App.css               # Styling
└── index.js              # Entry point`

---

## 📜 License

This project is open source and available under the MIT License
