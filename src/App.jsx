import { useState } from "react";
import AddForm from "./components/AddForm";
import BalanceCard from "./components/BalanceCard";

function App() {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [mainCategory, setMainCategory] = useState("Income");
  const [outcomeCategory, setOutputCategory] = useState("Other");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [time, setTime] = useState(0);

  const [balance, setBalance] = useState(0);

  const outcomeOptions = [
    { value: "Other", selected: true },
    { value: "Food and Drinks" },
    { value: "Transport" },
    { value: "Housing and Utilities" },
    { value: "Entertainment" },
    { value: "Health and Beauty" },
    { value: "Education" },
    { value: "Clothing" },
  ];

  const handleChange = (target) => {
    if (target.name === "description") setDescription(target.value);
    if (target.name === "amount") setAmount(Number(target.value));
    if (target.name === "category") setMainCategory(target.value);
    if (target.name === "options") setOutputCategory(target.value);

    if (target.name === "date") {
      let time = target.value;
      setDate(time);
      const day = time.slice(8, 10);
      const month = time.slice(5, 7);
      const year = time.slice(0, 4);
      time = `${year}-${month}-${day}`;
      time = new Date(time).getTime();
      setTime(time);
    }
  };

  const addTransaction = () => {
    let number = amount.toFixed(2);
    number *= 1;
    let text = description.trim();
    if (number && mainCategory === "Outcome") number *= -1;
    const transaction = {
      id: transactions.length,
      date,
      time,
      amount: number,
      mainCategory,
      outcomeCategory,
      description: text,
    };
    setTransactions((prevValue) => [...prevValue, transaction]);
    setBalance((prevValue) => prevValue + number);
    setDate("");
    setAmount("");
    setMainCategory("Income");
    setOutputCategory("Other");
    setDescription("");
    setTime(0);
  };

  return (
    <>
      <div className="container ">
        <h1 className="mt-5 mb-3">Expense Tracker</h1>

        <div className="row gap-3">
          <AddForm
            date={date}
            description={description}
            amount={amount}
            mainCategory={mainCategory}
            outputCategory={outcomeCategory}
            outcomeOptions={outcomeOptions}
            change={handleChange}
            submit={addTransaction}
          />

          <BalanceCard
            transactions={transactions}
            balance={balance}
            outcomeOptions={outcomeOptions}
          />
        </div>
      </div>
    </>
  );
}

export default App;
