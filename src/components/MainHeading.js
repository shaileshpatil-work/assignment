import React from 'react';
import classNames from 'classnames';

const MainHeading = ({ children, classes }) => {
    return (
        <h1 className={classNames(classes)}>{children}</h1>
    )
}

export default MainHeading;
