import React, { useState } from 'react';
import Accordion from './Accordion';

const Solution = () => {
    const [accordionIndexSelected, setAccordionSelected] = useState(null);

    return (
        Array.from({ length: 3 }).map((_, index) => (
            <Accordion
                key={index}
                index={index}
                setAccordionSelected={setAccordionSelected}
                accordionIndexSelected={accordionIndexSelected}
            />
        ))
    );
};

export default Solution;