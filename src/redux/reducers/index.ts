// import user from './user';
// import wallet from './wallet';

// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global

import { combineReducers } from 'redux';
import userReducer from './user';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

export default rootReducer; // delete essa linha e configure os seus reducers
