import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("App component tests", function () {
  test("it renders without crashing", function () {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>);
  });

  test("it matches snapshot", function () {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
