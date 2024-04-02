import React, {Children} from 'react';

export const withTruncateParagraph = (Component) => {

    const WithTruncateParagraph = ({children, textLength = 10, ...rest}) => (
        <Component {...rest}>
            {textLength === -1
                ? children
                : `${Children.map(children, child => child.slice(0, textLength))}...`
            }
        </Component>
    );

    const displayName = Component.displayName || Component.name || 'Component';
    WithTruncateParagraph.displayName = `WithTruncateParagraph(${displayName})`;
    return WithTruncateParagraph;
};