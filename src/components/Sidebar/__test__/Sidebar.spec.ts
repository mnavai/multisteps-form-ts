import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar'

describe("Sidebar component", () => {
    it("should render component correctly", () => {
        render(<Sidebar></Sidebar>)
        const sidebar = screen.getByTestId("sidebar-test")
        expect(sidebar).toBeInTheDocument()
    })
    it("should have the correct class name", () => {
        render(<Sidebar></Sidebar>)
        const className = screen.getByTestId("sidebar-test")
        expect(className).toHaveClass("nav-header")
    })
})