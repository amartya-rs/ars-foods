import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";
import { cardDataMock } from "../../../mocks/cardDataMock";
import { IMG_URL } from "../../utils/constants";

let clickHandler = jest.fn();

beforeEach(() => {
   render(<Card data={cardDataMock} clickHandler={clickHandler} />);
});

test("should render card with img", () => {
   const image = screen.getByRole("img");
   expect(image).toHaveAttribute("src", IMG_URL + "ggdblno817e1l7esbq8y");
   expect(image).toHaveAttribute("alt", "food item");
});

test("should render restaurant name", () => {
   const component = screen.getByText("Tihar Flavours of Jail");
   expect(component).toBeInTheDocument();
});

test("should call click handler", () => {
   const component = screen.getByTestId("card");
   fireEvent.click(component);
   expect(clickHandler).toBeCalled();
});
