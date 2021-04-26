import React from 'react';

const NoMatch = () => {
    const style = {
        color:'red',
        textAlign : 'center'
    }
    return (
        <div style={style}>
            <h1>Error 404!!!Not Found</h1>
        </div>
    );
};

export default NoMatch;