const TableRow = (props) => {
  const { description, date, category, outcomeCategory, amount } = props;
 

  const tableCategory = category === "Income" ? category : outcomeCategory;

  const style = amount < 0 ? { color: "red" } : { color: "green" };
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{tableCategory}</td>
      <td style={style}>{amount} &#8364;</td>
    </tr>
  );
};

export default TableRow;
