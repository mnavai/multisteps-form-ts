import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../Card';

describe("Card component",() => {
    it("checking if card is rendering", () => {
        render(<Card></Card>)
        const card = screen.getByTestId("card");
        expect(card).toBeInTheDocument();
    })

    it("checks if the props are passed correctly", () => {
        const handleClickCard = jest.fn((data) => data)
        const selectedCard = {"id":2,"label":"Advanced","price":12}
        render(<Card src="assets/images/icon-arcade.svg" altText="arcade icon" label="Arcade" price={108} onClick={() => handleClickCard(selectedCard)} selectedCard={selectedCard}></Card>)
        const icon = screen.getByTestId('icon')
        expect(icon).toHaveProperty("src","http://localhost/assets/images/icon-arcade.svg")
        expect(icon).toHaveProperty("alt","arcade icon")
        const label = screen.getByTestId("label")
        expect(label.innerHTML).toEqual("Arcade")
        const price = screen.getByTestId("price")
        expect(price.innerHTML).toEqual("108")
        fireEvent.click(screen.getByTestId('card'))
        //when testing a func, ensure its been called once, then check the arguments and then test the return value
        expect(handleClickCard).toHaveBeenCalledTimes(1)
        expect(handleClickCard).toHaveBeenCalledWith(selectedCard)
        expect(handleClickCard).toReturnWith(selectedCard)
        // const selectedcard = screen.getByTestId('card')
        // expect(selectedcard).not.toBeInTheDocument()
    })
})