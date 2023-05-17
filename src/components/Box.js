import React from 'react';

// this component should display a div with a background color, 
// width and height based on the props passed to it.
function Box({width, height, color, removeBox, id}) {
    return(
        <>
            <div 
                style={{
                backgroundColor: color,
                width: `${width}px`,
                height: `${height}px`
                }}
            >
            </div>
            <button id={id} onClick={removeBox} style={ { height: `${height}px` } }>X</button>
        </>
    )
}

export default Box;