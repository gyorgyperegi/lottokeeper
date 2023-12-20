// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure as configureTestingLib } from "@testing-library/react";
import '@testing-library/jest-dom';

const tempResizeObserver = global.ResizeObserver;
beforeAll(() => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn()
  }));
});

configureTestingLib({ testIdAttribute: "data-testid" });

afterEach(() => {
  jest.restoreAllMocks();
});

afterAll(() => {
  global.ResizeObserver = tempResizeObserver;
});
