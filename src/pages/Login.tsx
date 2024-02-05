import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveEmail } from '../redux/actions';
import store from '../redux';

function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isPwValid, setIsPwValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePwChange = (e: any) => {
    const newPassword = e.target.value;
    setPw(newPassword);
    validatePw(newPassword);
  };

  const validatePw = (newPassword: any) => {
    const isPasswordValid = newPassword.length >= 6;
    setIsPwValid(isPasswordValid);
  };

  const handleEmailChange = (e: any) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (newEmail: any) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = emailRegex.test(newEmail);
    setIsEmailValid(isValid);
  };

  const handleLogin = () => {
    dispatch(saveEmail(email));
    console.log('current Email in Global State:', store.getState().user.email)
    navigate('/carteira');
  };

  return (
    <>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="campo-email">E-mail: </label>
        <input
          type="email"
          data-testid="email-input"
          id="campo-email"
          required
          value={ email }
          onChange={ handleEmailChange }
        />

        <label htmlFor="campo-senha">Senha: </label>
        <input
          type="password"
          data-testid="password-input"
          id="campo-senha"
          required
          value={ pw }
          onChange={ handlePwChange }
        />

        <button
          type="button"
          disabled={ !isPwValid || !isEmailValid }
          onClick={ handleLogin }
        >
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
