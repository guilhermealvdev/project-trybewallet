import { useSelector } from "react-redux";

function WalletForm() {

  const moedas = useSelector((rootReducer) => rootReducer.wallet.currencies);
  console.log(moedas);

  return (
    <>
      <hr />
      <div>WalletForm</div>
      <form action="">
      <label htmlFor="despesa">Valor:</label>
      <input type="text" id="despesa" data-testid="value-input"/>

      <label htmlFor="descricao">Descrição:</label>
      <input type="text" id="descricao" data-testid="description-input"/>

      <label htmlFor="moeda">Moeda:</label>
      <select name="md" id="moeda" data-testid="currency-input">
        {Object.keys(moedas).map((moedasLista) => (
          <option key={moedasLista} value={moedasLista}>
            {moedas[moedasLista]}
          </option>
        ))
        }
      </select>

      <label htmlFor="pagamento">Método de Pagamento:</label>
      <select name="pag" id="pagamento" data-testid="method-input">
        <option value="dinheiro">Dinheiro</option>
        <option value="cartao-credito">Cartão de crédito</option>
        <option value="cartao-debito">Cartão de débito</option>
      </select>

      <label htmlFor="category">Tag:</label>
      <select name="cat" id="category" data-testid="tag-input">
        <option value="alimentacao">Alimentação</option>
        <option value="lazer">Lazer</option>
        <option value="trabalho">Trabalho</option>
        <option value="transporte">Transporte</option>
        <option value="saude">Saúde</option>
      </select>

      <button>Adicionar Despesa</button>

      </form>
    </>
  )
}

export default WalletForm;
