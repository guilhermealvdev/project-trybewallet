import { useSelector } from 'react-redux';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

function Wallet() {
  const email = useSelector((rootReducer) => rootReducer.user.email);
  console.log(email); // Apenas para visualizar no console que está chegando aqui pelo estado global

  return (
    <>
      <h1>TrybeWallet</h1>
      <Header />
      <WalletForm />
      <Table />
    </>
  );
}

export default Wallet;
