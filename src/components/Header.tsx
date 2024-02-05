import { useSelector } from 'react-redux';

function Header() {
  const email = useSelector((rootReducer) => rootReducer.user.email);

  return (
    <>
      <div data-testid="email-field">
        Email:
        { email }
      </div>
      <div data-testid="total-field">
        Editar Aqui - Valor deve ser o valor de expenses?
        É um array vazio, adicionar com um spread o valor 0
      </div>
      <div data-testid="header-currency-field">
        BRL
      </div>
    </>
  );
}

export default Header;
