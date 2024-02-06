// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';

const initialValue = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const walletReducer = (state = initialValue, action: AnyAction) => {
  switch (action.type) {
    case 'FETCH_WALLET': {
      const currenciesArray = Object.keys(action.payload);
      // Remover USDT
      const filteredCurrencies = currenciesArray.filter(
        (currency) => currency !== 'USDT',
      );
      return {
        ...state,
        currencies: filteredCurrencies,
      };
    }
    case 'ADD_EXPENSE': {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case 'DELETE_EXPENSE': {
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload,
      );
      return {
        ...state,
        expenses: updatedExpenses,
      };
    }
    default:
      return state;
  }
};

export default walletReducer;
