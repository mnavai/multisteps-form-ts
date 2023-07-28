import { render, screen } from '@testing-library/react';
import SidebarLink from '../SidebarLink'

describe("SidebarLink component", () => {
    it("should render component correctly", () => {
        render(<SidebarLink></SidebarLink>)
        const sidebarLink = screen.getByTestId("sidebarlink")
        expect(sidebarLink).toBeInTheDocument()
    })
    it("should pass props correctly", () => {
        const step = 1;
        const text = 'This is Step 1';
        const currentStep = 1;
        render(<SidebarLink step={step} text={text} currentStep={currentStep}></SidebarLink>)

        const stepProp = screen.getByTestId("sidebarlink")
        expect(stepProp).toBeInTheDocument()

        const textProp = screen.getByTestId("sidebarlink")
        expect(textProp).toBeInTheDocument()
    })
    it("should have active class when step matched the current step", () => {
        const step = 1
        const currentStep = 1
        render(<SidebarLink step={step} currentStep={currentStep}></SidebarLink>)
        const circleIcon = screen.getByTestId("sidebarlink").querySelector('.circle-icon')
        expect(circleIcon).toHaveClass('active');
    })
    it("shouldn;t have an active class if step and currentStep are not matching", () => {
        const step = 1
        const currentStep = 2
        render(<SidebarLink step={step} currentStep={currentStep}></SidebarLink>)
        const circleIcon = screen.getByTestId("sidebarlink").querySelector('.circle-icon')
        expect(circleIcon).not.toHaveClass('active')
    })
})