import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
// Place your state that contains all of the boxes here. 
// This component should render all of the Box components 
// along with the NewBoxForm component

function BoxList() {
    return (
        <div> 
        <NewBoxForm />
         </div>
    )
}

export default BoxList;