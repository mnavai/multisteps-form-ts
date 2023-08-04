import React from 'react';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import './Card.css';

export type SelectedCard = { id: number, label: string, price: number }
export interface CardProps {
    src: string,
    altText: string,
    label: string,
    price: number,
    onClick: () => void,
    selectedCard: SelectedCard,
    id: number
}
const Card = ({src, altText, label, price, onClick, selectedCard, id}: CardProps) => {
    
    const cardSelected = selectedCard && selectedCard.id === id;
    const {toggleSelection} = useContext(CardContext);
    const isYearlyPlan = toggleSelection === "Yearly";
     return(
        <div className={`card ${cardSelected ? "selected" : ""}`} onClick={onClick} data-cardid={id} data-testid="card">
            <div className="icon">
                <img src={src} alt={altText} data-testid="icon" />
            </div>
            <div className="text-group">
                <h5 className="card-label-text" data-testid="label">{label}</h5>
                <p className="card-text" data-testid="price">${price}{isYearlyPlan ? " yr" : " mo"}</p>
                {toggleSelection === "Yearly" && <p className='free-deal'>2 months free</p>}
            </div>
        </div>
    ); 
}
export default Card;