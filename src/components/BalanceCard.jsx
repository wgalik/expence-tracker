import ChartCard from "./ChartCard";
import TableRow from "./TableRow";

const BalanceCard = (props) => {
  const { balance, transactions, subOptions } = props;

  const sortedTransactions = transactions
    .map((transaction) => transaction)
    .sort((a, b) => a.time - b.time);

  const tableRows = sortedTransactions.map((row) => (
    <TableRow
      key={row.id}
      description={row.description}
      date={row.date}
      category={row.mainCategory}
      outcomeCategory={row.outcomeCategory}
      amount={row.amount}
    />
  ));
  const style = balance < 0 ? { color: "red" } : null;

  return (
    <div className="col-md-7 card  balance">
      <div className="card-body">
        <div className="row">
          <div className="col col-lg-5 col-xl-4">
            <h5>Balance</h5>
            <h3 style={style}>{balance.toFixed(2)} &#8364;</h3>
            <h5>
              Transactions{" "}
              {transactions.length ? `: ${transactions.length}` : null}
            </h5>
          </div>
          <div className="col d-flex justify-content-start ">
            <ChartCard transactions={transactions} subOptions={subOptions} />
          </div>
        </div>

        {/* Tabela */}
        <div className="table-responsive-md">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">{tableRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
