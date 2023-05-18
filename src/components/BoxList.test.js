import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

test('should render without crashing', () => {
    render(<BoxList />);
})

it('matches snapshot', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


it('should add a box with width, height and color', () => {
    const boxList = render(<BoxList />);

    const widthInput = boxList.getByLabelText('Width:');
    const heightInput = boxList.getByLabelText('Height:');
    const colorInput = boxList.getByLabelText('Color: #232323');
    const btn = boxList.queryByText('Submit');

    fireEvent.change( widthInput, { target: {value: '100' } } );
    fireEvent.change( heightInput, { target: {value: '100' } } );
    fireEvent.change( colorInput, { target: {value: '#006d8f' } } );
    fireEvent.click(btn);
    expect(boxList.queryByText('X')).toBeInTheDocument();
})

it('should remove a box', () => {
    const boxList = render(<BoxList />);

    const widthInput = boxList.getByLabelText('Width:');
    const heightInput = boxList.getByLabelText('Height:');
    const colorInput = boxList.getByLabelText('Color: #232323');
    const btn = boxList.queryByText('Submit');

    fireEvent.change( widthInput, { target: {value: '100' } } );
    fireEvent.change( heightInput, { target: {value: '100' } } );
    fireEvent.change( colorInput, { target: {value: '#006d8f' } } );
    fireEvent.click(btn);
    expect(boxList.queryByText('X')).toBeInTheDocument();

    // should be in the document now lets get the remove btn
    const removeBtn = boxList.getByText('X');
    fireEvent.click(removeBtn);
    expect(removeBtn).not.toBeInTheDocument();
})