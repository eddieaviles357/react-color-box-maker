import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
// import { v4 as uuidv4 } from 'uuid';
// Place your state that contains all of the boxes here. 
// This component should render all of the Box components 
// along with the NewBoxForm component

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    // removed box by using id
    const removeBox = (evt) => {
        const {id} = evt.target;
        setBoxes( box => box.filter( box => box.id !== id))
    }
    
    return (
        <> 
        <NewBoxForm formDataHandler={setBoxes}/>
        <div className='Box-container'>
        {
            boxes.map( 
                ({width, height, color, id}) => <Box key={id} width={width} height={height} color={color} removeBox={removeBox} id={id}/>
                )
        }
        </div>
         </>
    )
}

export default BoxList;