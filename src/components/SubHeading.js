import React from 'react';
import classNames from 'classnames';

const SubHeading = ({ alignment, children }) => {
    return (
        <h3 className={classNames(alignment, 'subheading')}>{children}</h3>
    )
}

export default SubHeading;
