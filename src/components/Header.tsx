import { useSelector } from 'react-redux';

function Header() {
  const email = useSelector((rootReducer) => rootReducer.user.email);
  const expenses = useSelector((rootReducer) => rootReducer.wallet.expenses);

  const totalValue = expenses.length > 0
    ? expenses.reduce((acc, expense) => {
      const expenseValue = parseFloat(expense.value);
      const askValue = parseFloat(expense.exchangeRates[expense.currency].ask);
      return acc + (expenseValue * askValue);
    }, 0)
    : 0;

  return (
    <>
      <div data-testid="email-field">
        Email:
        { email }
      </div>
      <div data-testid="total-field">
        { totalValue.toFixed(2) }
      </div>
      <div data-testid="header-currency-field">
        BRL
      </div>
    </>
  );
}

export default Header;
