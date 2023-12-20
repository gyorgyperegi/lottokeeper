import React from "react";
import { act, render } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

// export function renderWithProviders(
//   ui,
//   history,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return (
//       <Router history={history}>
//         {children}
//       </Router>
//     );
//   }
//
//   // Return an object with the store and all of RTL's query functions
//   return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }
//
// export function renderWithProvidersNoHistory(ui, initialState) {
//   return renderWithProviders(ui, null, );
// }

export function flushPromises() {
  return act(async () => {
    await Promise.resolve();
  });
}

export function mockDispatch() {
  const dispatchMock = jest.fn();
  return jest
    .spyOn(redux, "useDispatch")
    .mockImplementation(() => dispatchMock);
}

export const mockUseSelector = mockStore => {
  jest
    .spyOn(redux, "useSelector")
    .mockImplementation(callback => callback(mockStore));
};

export function mockUseNavigate() {
  const navigateMock = jest.fn();
  return jest
    .spyOn(navigate, "useNavigate")
    .mockImplementation(()=>navigateMock);
}
