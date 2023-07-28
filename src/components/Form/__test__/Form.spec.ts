import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router
import Form from '../Form';

describe("Form component", () => {
  it("should render Form correctly", () => {
    render(
      <Router> {/* Wrap the Form component with the Router */}
        <Form />
      </Router>
    );
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
  });
});
