import React from 'react';
import classNames from 'classnames';

const HighLightText = ({ alignment, children, color }) => {
    return (
        <span className={classNames(alignment, color)}>{children}</span>
    )
}

export default HighLightText;
