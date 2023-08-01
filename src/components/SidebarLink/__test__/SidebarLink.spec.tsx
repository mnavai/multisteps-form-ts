import { render, screen } from '@testing-library/react';
import SidebarLink from '../SidebarLink';
import React from 'react';

describe("SidebarLink component", () => {
  it("should render component correctly", () => {
    render(<SidebarLink step={0} text={''} currentStep={0} />);
    const sidebarLink = screen.getByTestId("sidebarlink");
    expect(sidebarLink).toBeInTheDocument();
  });

  it("should pass props correctly", () => {
    const step = 1;
    const text = 'This is Step 1';
    const currentStep = 1;
    render(<SidebarLink step={step} text={text} currentStep={currentStep} />);

    const stepProp = screen.getByTestId("circle-icon");
    expect(stepProp).toHaveTextContent("1");

    const textProp = screen.getByTestId("sidebarlink-text");
    expect(textProp).toHaveTextContent("This is Step 1");
  });

  it("should have active class when step matched the current step", () => {
    const step = 1;
    const currentStep = 1;
    render(<SidebarLink step={step} currentStep={currentStep} text={''} />);
    const circleIcon = screen.getByTestId("circle-icon");
    expect(circleIcon).toHaveClass('active');
  });

  it("shouldn't have an active class if step and currentStep are not matching", () => {
    const step = 1;
    const currentStep = 2;
    render(<SidebarLink step={step} currentStep={currentStep} text={''} />);
    const circleIcon = screen.getByTestId("circle-icon");
    expect(circleIcon).not.toHaveClass('active');
  });
});
