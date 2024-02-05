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
    case 'TEMPORARIO_PRO_LINT_PASSAR':
      return state;
    default:
      return state;
  }
};

export default walletReducer;
