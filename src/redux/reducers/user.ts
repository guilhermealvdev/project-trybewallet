// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from "redux";

const initialValue = {
    email: '',
}

const userReducer = (state = initialValue, action: AnyAction) => {
  switch(action.type) {
    case 'SAVE_EMAIL':
      console.log('Action Received:', action)
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
