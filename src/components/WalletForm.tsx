import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

let nextId = 0;

function WalletForm() {
  const moedas = useSelector((rootReducer) => rootReducer.wallet.currencies);
  // console.log(moedas);
  const dispatch = useDispatch();

  const [minhaDespesa, setMinhaDespesa] = useState('');
  const [minhaDesc, setMinhaDesc] = useState('');
  const [minhaMoeda, setMinhaMoeda] = useState('USD');
  const [meuPag, setMeuPag] = useState('dinheiro');
  const [minhaTag, setMinhaTag] = useState('alimentacao');

  // reservado, pode servir pra tabela?
  // const [despesaData, setDespesaData] = useState({
  //   valor: minhaDespesa,
  //   descricao: minhaDesc,
  //   moeda: minhaMoeda,
  //   metodoPagamento: meuPag,
  //   tag: minhaTag,
  // });

  const handleDespesaChange = (e) => {
    const despesaX = e.target.value;
    setMinhaDespesa(despesaX);
    // console.log('Dados Alv Despesa:', minhaDespesa);
  };

  const handleDescChange = (e) => {
    const descX = e.target.value;
    setMinhaDesc(descX);
    // console.log('Dados Alv Descrição:', minhaDesc);
  };

  const handleMoedaChange = (e) => {
    const moedaX = e.target.value;
    setMinhaMoeda(moedaX);
    // console.log('Dados Alv Moeda:', minhaMoeda);
  };

  const handlePagChange = (e) => {
    const pagX = e.target.value;
    setMeuPag(pagX);
    // console.log('Dados Alv Pagamento:', meuPag);
  };

  const handleTagChange = (e) => {
    const TagX = e.target.value;
    setMinhaTag(TagX);
    // console.log('Dados Alv Tag:', minhaTag);
  };

  const despesaAdd = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();

    // const exchangeRates = {
    //   ...(minhaMoeda in exchangeRatesData ? exchangeRatesData[minhaMoeda] : {}),
    // };

    const novaDespesa = {
      id: nextId++,
      value: minhaDespesa,
      currency: minhaMoeda,
      method: meuPag,
      tag: minhaTag,
      description: minhaDesc,
      exchangeRates,
    };

    dispatch({ type: 'ADD_EXPENSE', payload: novaDespesa });
    setMinhaDespesa('');
    setMinhaDesc('');
    setMinhaMoeda('USD');
    setMeuPag('dinheiro');
    setMinhaTag('alimentacao');
  };

  return (
    <>
      <hr />
      <div>WalletForm</div>
      <form action="">
        <label htmlFor="despesa">Valor:</label>
        <input
          type="number"
          id="despesa"
          data-testid="value-input"
          onChange={ handleDespesaChange }
          value={ minhaDespesa }
        />

        <label htmlFor="descricao">Descrição:</label>
        <input
          type="text"
          id="descricao"
          data-testid="description-input"
          onChange={ handleDescChange }
          value={ minhaDesc }
        />

        <label htmlFor="moeda">Moeda:</label>
        <select
          name="md"
          id="moeda"
          data-testid="currency-input"
          onChange={ handleMoedaChange }
          value={ minhaMoeda }
        >
          {Object.entries(moedas).map(([codigo, nome]) => (
            <option key={ codigo } value={ nome }>
              { nome }
            </option>
          ))}
        </select>

        <label htmlFor="pagamento">Método de Pagamento:</label>
        <select
          name="pag"
          id="pagamento"
          data-testid="method-input"
          onChange={ handlePagChange }
          value={ meuPag }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <label htmlFor="category">Tag:</label>
        <select
          name="cat"
          id="category"
          data-testid="tag-input"
          onChange={ handleTagChange }
          value={ minhaTag }
        >
          <option value="Alimentacao">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saude">Saúde</option>
        </select>

        <button type="button" onClick={ despesaAdd }>Adicionar Despesa</button>

      </form>
    </>
  );
}

export default WalletForm;
