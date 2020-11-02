import React from 'react';
import classNames from 'classnames';

const Paragraph = ({ children, alignment, spacing, color }) => {
    return (
        <p className={classNames(alignment, spacing, color)}>{children}</p>
    )
}

export default Paragraph;
