import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../redux/actions';

function Table() {
  const expenses = useSelector((rootReducer) => rootReducer.wallet.expenses);
  const dispatch = useDispatch();

  const handleDeleteExpense = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={ expense.id }>
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{parseFloat(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{parseFloat(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {(expense.value * expense.exchangeRates[expense.currency].ask).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                onClick={ () => handleDeleteExpense(expense.id) }
                data-testid="delete-btn"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
