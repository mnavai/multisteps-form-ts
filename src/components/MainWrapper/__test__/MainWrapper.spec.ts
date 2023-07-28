import { render, screen } from '@testing-library/react';
import MainWrapper from '../MainWrapper';

describe("MainWrapper component", () => {
    it("should render compnent correctly", () => {
        const children = 'testing children are being passed correctly'
        render(<MainWrapper>{children}</MainWrapper>)
        const main = screen.getByTestId("main-section")
        expect(main).toBeInTheDocument()
        const childrenProp = screen.getByText(children)
        expect(childrenProp).toBeInTheDocument()
    })
    it("should have the correct class name", () => {
        render(<MainWrapper></MainWrapper>)
        const className = screen.getByTestId("main-section")
        expect(className).toHaveClass("main-section")
    })
})