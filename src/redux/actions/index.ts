// Coloque aqui suas actions
import { Dispatch } from "react";

export const saveEmail = (email: string) => {
  return {
    type: 'SAVE_EMAIL',
    payload: email,
  };
};

//criar action para buscar api, ser chamada ao clicar no mesmo botao do componente Login?

export const fetchData = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    
  return {
    type: 'FETCH_WALLET',
    payload: data
}};
