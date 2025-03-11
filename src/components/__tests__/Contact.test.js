import React from "react";

import {render,screen} from "@testing-library/react";
import ContactUS from "../ContactUS";
import "@testing-library/jest-dom";

describe("Contact us page test case",()=>{

beforeAll(()=>{
    console.log("Before All");
})

beforeEach(()=>{
    console.log("Before Each");
})

afterAll(()=>{
    console.log("after  All");
})

afterEach(()=>{
    console.log("after Each");
})

test("should load contact us component",()=>{
    render (<ContactUS />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test("should load button inside contact component",()=>{
    render (<ContactUS />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});


test("should load input text inside contact component",()=>{
    //rener something
    render (<ContactUS />);
    //find 
    const inputName = screen.getByPlaceholderText("username");
       //asserting
    expect(inputName).toBeInTheDocument();
});

it("should load all input text inside contact component",()=>{
    render (<ContactUS />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
});

})