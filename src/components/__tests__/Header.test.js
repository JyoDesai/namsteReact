import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should load header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Optionally, check for the login button
  const loginButton = screen.getByRole("button", { name: /login/i });
//   const loginButton = screen.getByText("login");
  expect(loginButton).toBeInTheDocument();
});


// it("should load header component with login button", () => {
//     render(
//       <BrowserRouter>
//         <Provider store={appStore}>
//           <Header />
//         </Provider>
//       </BrowserRouter>
//     );
  
//     const loginButton = screen.getByRole("button", { name: /Login/i });
//     expect(loginButton).toBeInTheDocument();
  
//     // If no toggle is expected, you don't need to check for LogOut.
//     fireEvent.click(loginButton);
//     expect(screen.getByRole("button", { name: /LogOut/i })).toBeInTheDocument();
//   });
  