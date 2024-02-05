// Coloque aqui suas actions
export const saveEmail = (email: string) => {
  return {
    type: 'SAVE_EMAIL',
    payload: email,
  };
};
