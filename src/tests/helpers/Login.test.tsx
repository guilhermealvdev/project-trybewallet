import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux';
import Login from '../../pages/Login';

describe('Login Component', () => {
  test('renders login form', () => {
    const { getByText, getByLabelText } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByLabelText('E-mail:')).toBeInTheDocument();
    expect(getByLabelText('Senha:')).toBeInTheDocument();
    expect(getByText('Entrar')).toBeInTheDocument();
  });

  test('disables login button initially', () => {
    const { getByText } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    const button = getByText('Entrar');
    expect(button).toBeDisabled();
  });

  test('enables login button when email and password are valid', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const button = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await waitFor(() => {
      expect(button).toBeEnabled();
    });
  });

  test('dispatches login action when login button is clicked', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={ store }>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const button = getByText('Entrar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(button);
  });
});
