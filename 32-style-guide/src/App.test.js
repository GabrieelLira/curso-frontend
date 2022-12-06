import { render, screen } from '@testing-library/react';
import App from './App';

test('teste alerta', () => {
  render(<App />);
  const testCase = document.querySelector('div.MuiAlert-message');
  expect(testCase).toHaveTextContent(/gráfico atualizado/i);
});