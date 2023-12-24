import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import API_DATA_MOCK from "../../../mocks/apiDataMock.json";
import { Body } from "./Body";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
   return {
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
   };
});

global.fetch = () =>
   Promise.resolve({
      json: () => Promise.resolve(API_DATA_MOCK),
   });

beforeEach(async () => {
   await act(async () =>
      render(
         <BrowserRouter>
            <Body />
         </BrowserRouter>
      )
   );
});

test("should filter restaurant cards for search term 'food'", () => {
   const cardsPreSearch = screen.getAllByTestId("card");
   expect(cardsPreSearch.length).toBe(9);

   const input = screen.getByRole("textbox");

   fireEvent.change(input, { target: { value: "food" } });

   const cardsPostSearch = screen.getAllByTestId("card");
   expect(cardsPostSearch.length).toBe(3);
});

test("should call onClick handler", () => {
   const cardsPreSearch = screen.getAllByTestId("card");

   fireEvent.click(cardsPreSearch[0]);

   expect(mockNavigate).toBeCalledTimes(1);
});
