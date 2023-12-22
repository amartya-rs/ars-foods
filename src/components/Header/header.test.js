import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { LoginProvider } from "../../context/login-context";

const renderHeader = () => {
   render(
      <BrowserRouter>
         <LoginProvider>
            <Header />
         </LoginProvider>
      </BrowserRouter>
   );
};

beforeEach(() => {
   renderHeader();
});

test("should check for 3 anchor tags", () => {
   const elements = screen.getAllByRole("link");
   expect(elements.length).toBe(3);
});

test("should check for login button", () => {
   const button = screen.getByRole("button", { name: "Login" });
   expect(button).toBeInTheDocument();
});

test("should check for logout button", () => {
   const loginButton = screen.getByRole("button", { name: "Login" });
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button", { name: "Logout" });
   expect(logoutButton).toBeInTheDocument();
});

test("should render login button after clicking logout", () => {
   const loginButton = screen.getByRole("button", { name: "Login" });
   fireEvent.click(loginButton);
   const logoutButton = screen.getByRole("button", { name: "Logout" });
   fireEvent.click(logoutButton);
   expect(loginButton).toBeInTheDocument();
});
