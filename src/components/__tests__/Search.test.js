import React from "react";
import Body from "../Body";
import { act } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { data } from "@remix-run/router";
import MOCK_DATA from "../__tests__/mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render body component with search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    // const searchBtn = screen.getByRole("button", {name: "search"});
    const searchBtn = screen.getByRole("button", { name: /search/i });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "Starboy" } });
    fireEvent.click(searchBtn);

    const searchCards = screen.getAllByTestId("resCard");
    expect(searchCards.length).toBe(1);

    expect(searchInput).toBeInTheDocument();
});

it("it should filter top rated restaurant from body component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardBeforeFilter.length).toBe(7);
    const topRatedBtn = screen.getByRole("button",{name: "Filter: Top rated Restaurant"});
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);
});
