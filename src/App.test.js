import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders ContactForm without crashing', () => {
  render(<ContactForm />);
});

test('First Name text input is working properly', () => {
  //Arrange
  const { getByText } = render(<ContactForm />);
  //Act
  getByText(/First Name/i);
  //Assertion
});

test('It shows firstName by Id', () => {
  //Arrange
  const { getByTestId } = render(<ContactForm />);
  //Act
  const firstName = getByTestId(/firstName/i);
  //Assertion
  expect(firstName).toBeVisible()
});

test('renders input correctly for firstName, lastName, email, and message', () => {
  //Arrange
  const { getByTestId } = render(<ContactForm />);

  //Act
  const firstNameInput = getByTestId(/firstName/i);
  const lastNameInput = getByTestId(/lastName/i);
  const email = getByTestId(/email/i);
  const message = getByTestId(/message/i);

  fireEvent.change(firstNameInput, {
    target: {value: "Juan" }
  });

  fireEvent.change(lastNameInput, {
    target: {value: "Smith" }
  });

  fireEvent.change(email, {
    target: {value: "caleno24@gmail.com" }
  });
  //I got this info from link https://testing-library.com/docs/example-input-event
  fireEvent.change(message, {
    target: {value: "Hi, Friends" }
  });

  //Assertion
  expect(firstNameInput).toHaveValue("Juan");
  expect(lastNameInput).toHaveValue("Smith");
  expect(email).toHaveValue("caleno24@gmail.com");
  expect(message).toHaveValue("Hi, Friends")

});

test('It Submits properly', () => {
  //Arrange
  const { getByTestId } = render(<ContactForm />);
  //Act
  const submits = getByTestId(/submit/i);
  //Assertion
  expect(submits).toBeInTheDocument()
});




