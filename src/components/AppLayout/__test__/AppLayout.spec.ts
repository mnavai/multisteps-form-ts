import { render, screen } from '@testing-library/react';
import AppLayout from '../AppLayout';

describe("component correctly", () => {
    it("renders component correctly", () => {
        const childText = 'This is to test children passing correctly';
        render(<AppLayout>{childText}</AppLayout>)
        const appLayout = screen.getByTestId("app-layout")
        expect(appLayout).toBeInTheDocument()
        const children = screen.getByText(childText)
        expect(children).toBeInTheDocument()
    })
    it("should have the correct class name", () => {
        render(<AppLayout></AppLayout>)
        const appLayout = screen.getByTestId("app-layout")
        expect(appLayout).toHaveClass("app-layout")
    })
})