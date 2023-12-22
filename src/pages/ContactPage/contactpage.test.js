import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactPage from "./ContactPage";

test("should check if 'Contact Us' is rendered", () => {
   render(<ContactPage />);
   const element = screen.getByText("Contact Us");
   expect(element).toBeInTheDocument();
});
