import React from 'react';

const SubHeading = ({ alignment, children }) => {
    return (
        <h3 className={alignment}>{children}</h3>
    )
}

export default SubHeading;
