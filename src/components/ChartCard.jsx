import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

// Rejestracja elementów Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Income", "Food and Drinks", "Transport", "Housing and Utilities"],
  datasets: [
    {
    //   label: "Votes",
      data: [58, 258, 3, 28, 45, 98, 508],
      backgroundColor: [
        "#00C49F",
        "#FFB347",
        "#6CA6FF",
        "#9ACD32",
        "#CBA4FF",
        "#FF9EC4",
        "#40E0D0",
        "#FFD580",
        "#8a8a8aff",
      ],
      borderColor: ["rgba(255, 255, 255, 1)"],
      borderWidth: 5,
    },
  ],
};

const options = {
//   responsive: true,
//   maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: false,
    },
  },
};

const COLORS = [
  "#00C49F",
  "#FFB347",
  "#6CA6FF",
  "#9ACD32",
  "#CBA4FF",
  "#FF9EC4",
  "#40E0D0",
  "#FFD580",
  "#8a8a8aff",
];

export default function ChartCart({ transactions, outcomeOptions }) {
  console.log(transactions);
  let income = 10,
    foodAndDrinks = 0,
    transport = 0,
    housingAndUtilities = 0,
    entertainment = 0,
    healthAndBeauty = 0,
    education = 0,
    clothing = 0,
    other = 0;

  console.log(income);
  transactions.forEach((transaction) => {
    if (transaction.mainCategory === "Income") income += transaction.amount;
    if (transaction.mainCategory === "Outcome") other -= transaction.amount;

    if (transaction.outcomeCategory === "Food and Drinks")
      foodAndDrinks -= transaction.amount;
    if (transaction.outcomeCategory === "Transport")
      transport -= transaction.amount;
    if (transaction.outcomeCategory === "Housing and Utilities")
      housingAndUtilities -= transaction.amount;
    if (transaction.outcomeCategory === "Entertainment")
      entertainment -= transaction.amount;
    if (transaction.outcomeCategory === "Health and Beauty")
      healthAndBeauty -= transaction.amount;
    if (transaction.outcomeCategory === "Education")
      education -= transaction.amount;
    if (transaction.outcomeCategory === "Clothing")
      clothing -= transaction.amount;

    // if (transaction.outcomeCategory === "Other") other -= transaction.amount;
  });

  //   const data = [
  // { name: "Income", value: income, color: "#00C49F" },
  // { name: "Food and Drinks", value: foodAndDrinks, color: "#FFB347" },

  // { name: "Transport", value: transport, color: "#FFB347" },
  // {
  //   name: "Housing and Utilities",
  //   value: housingAndUtilities,
  //   color: "#6CA6FF",
  // },
  // { name: "Entertainment", value: entertainment, color: "#9ACD32" },
  // { name: "Health and Beauty", value: healthAndBeauty, color: "#CBA4FF" },
  // { name: "Education", value: education, color: "#40E0D0" },
  // { name: "Clothing", value: clothing, color: "#40E0D0" },

  //      { name: "Other", value: other, color: "#8a8a8aff" },
  //   ];

  console.log(typeof income, transport);

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <Doughnut data={data} options={options} width={15} height={15} />
    </div>
  );
}
