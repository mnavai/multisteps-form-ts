import React from 'react';
import './HeadingGroup.css';

export interface HeadingProps {
    heading: string,
    ptag: string
}
const HeadingGroup = ({heading,ptag}: HeadingProps) => {
    return (
        <hgroup className="form-hgroup" data-testid="hgroup">
            <h1 className="hgroup-heading" data-testid="heading">{heading}</h1>
            <p className="hgroup-p" data-testid="ptag">{ptag}</p>
        </hgroup>
    );
}
export default HeadingGroup;