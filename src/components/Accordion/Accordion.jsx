import React, { useState } from 'react';

const Accordion = ({ index, accordionIndexSelected, setAccordionSelected }) => {
    const isSelected = accordionIndexSelected === index;

    return (
        <div
            style={{
                border: '1px solid lightgrey',
                width: '500px',
                cursor: 'pointer',
                // marginBottom: '10px',
            }}
            onClick={() => setAccordionSelected(isSelected ? null : index)}
        >
            Expand Me
            <div
                style={{
                    maxHeight: isSelected ? '100px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease', // Smooth opening and closing transition
                    width: '500px',
                }}
            >
                <div style={{ padding: isSelected ? '10px 0' : '0 10px', opacity: isSelected ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                    Hi, This is going great
                </div>
            </div>
        </div>
    );
};

export default Accordion;
