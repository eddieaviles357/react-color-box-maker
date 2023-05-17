import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

// this component should render a form that when submitted, creates a new Box. 
// You should be able to specify the Box’s width, height, and background color. 
// When the form is submitted, clear the input values.

function NewBoxForm({formDataHandler}) {
    const DEFAULT_STATE = {
        id: '',
        width: '',
        height: '',
        color: '#232323'
    }
    const [formData, setFormData] = useState(DEFAULT_STATE)

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const {id, width, height, color} = formData;

        // alert if any fields are empty
        if(!width || !height || !color) {
            alert('Width, Height & Color are needed');
            return;
        }
        // add state
        formDataHandler( data => [ ...data, { ...formData, id: uuidv4() } ] );
        // clear the data
        setFormData( fData => DEFAULT_STATE)
    }
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }))
      }

    return (
        <form className='App-form' onSubmit={handleSubmit}>
            <label htmlFor='width'>Width: {formData.width}</label>
            <input 
                type='range' 
                min={25} 
                max={100} 
                id='width' 
                name='width' 
                onChange={handleChange}
                value={formData.width}
                />

            <label htmlFor='height'>Height: {formData.height}</label>
            <input 
                type='range' 
                min={25} 
                max={100} 
                id='height' 
                name='height' 
                onChange={handleChange}
                value={formData.height}
                />

            <label htmlFor='color'>Color: {formData.color}</label>
            <input 
                type='color' 
                id='color' 
                name='color' 
                onChange={handleChange}
                value={formData.color}
                />
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;