import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Snack from './Snack';

describe("Snack component tests", function () {
    const testSnack = {
        "name": "testSnack",
        "cost": "$2.00",
        "desc": "This is a test snack",
        "img": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.employtest.com%2Fhs-fs%2Fhub%2F42284%2Ffile-14233687-jpg%2Fimages%2Ftest_in_red.jpg%23keepProtocol&f=1&nofb=1"
    }
    test("it renders without crashing", function () {
        render(
            <BrowserRouter>
                <Snack snack={testSnack} />
            </BrowserRouter>);
    });

    test("it matches snapshot", function () {
        const { asFragment } = render(
            <BrowserRouter>
                <Snack snack={testSnack} />
            </BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    });
});