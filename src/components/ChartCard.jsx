import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colors = [
  "#00c41aff",
  "#e93333ff",
  "#FFB347",
  "#6CA6FF",
  "#9ACD32",
  "#CBA4FF",
  "#FF9EC4",
  "#40E0D0",
  "#FFD580",
];

export default function ChartCart({ transactions, outcomeOptions }) {
  let income = 0,
    foodAndDrinks = 0,
    transport = 0,
    housingAndUtilities = 0,
    entertainment = 0,
    healthAndBeauty = 0,
    education = 0,
    clothing = 0,
    other = 0;

  let labels = outcomeOptions.map((option) => option.value);
  labels = ["Income", ...labels];

  transactions.forEach((transaction) => {
    if (transaction.mainCategory === "Income") income += transaction.amount;
    if (transaction.mainCategory === "Outcome") {
      switch (transaction.outcomeCategory) {
        case "Food and Drinks":
          foodAndDrinks -= transaction.amount;
          break;
        case "Transport":
          transport -= transaction.amount;
          break;
        case "Housing and Utilities":
          housingAndUtilities -= transaction.amount;
          break;
        case "Entertainment":
          entertainment -= transaction.amount;
          break;
        case "Health and Beauty":
          healthAndBeauty -= transaction.amount;
          break;
        case "Education":
          education -= transaction.amount;
          break;
        case "Clothing":
          clothing -= transaction.amount;
          break;
        case "Other":
          other -= transaction.amount;
          break;
      }
    }
  });

  const categories = [
    income,
    other,
    foodAndDrinks,
    transport,
    housingAndUtilities,
    entertainment,
    healthAndBeauty,
    education,
    clothing,
  ];

  const data = {
    labels: [...labels],
    datasets: [
      {
        data: [...categories],
        backgroundColor: [...colors],
        borderColor: ["#ffffffff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <Doughnut data={data} options={options} width={15} height={15} />
    </div>
  );
}
