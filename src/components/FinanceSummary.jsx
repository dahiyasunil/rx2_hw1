import { useSelector } from "react-redux";

const FinanceSummary = () => {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  return (
    <div>
      <h2>Finance Summary</h2>
      <p>Income: $ {income}</p>
      <p>Expense: $ {expense}</p>
      <p>Balance: $ {income - expense}</p>
    </div>
  );
};

export default FinanceSummary;
