import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VendingMachine from './VendingMachine';

describe("VendingMachine component tests", function () {
    test("it renders without crashing", function () {
        render(
            <BrowserRouter>
                <VendingMachine />
            </BrowserRouter>);
    });

    test("it matches snapshot", function () {
        const { asFragment } = render(
            <BrowserRouter>
                <VendingMachine />
            </BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});
