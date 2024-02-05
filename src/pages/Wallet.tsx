import { useSelector } from 'react-redux';
import Header from '../components/Header';

function Wallet() {
  const email = useSelector((rootReducer) => rootReducer.user.email);
  console.log(email); // Apenas para visualizar no console que está chegando aqui pelo estado global

  return (
    <>
      <h1>TrybeWallet</h1>
      <Header />
    </>
  );
}

export default Wallet;
