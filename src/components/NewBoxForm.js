import React from 'react';

// this component should render a form that when submitted, creates a new Box. 
// You should be able to specify the Box’s width, height, and background color. 
// When the form is submitted, clear the input values.

function NewBoxForm(props) {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='width'>Width</label>
            <input type="text" id='width' name='width' />
            <label htmlFor='height'>Height</label>
            <input type="text" id='height' name='height' />
            <label htmlFor='color'>Color</label>
            <input type='color' id='color' name='color' />
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;