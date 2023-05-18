import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('should render without crashing', () => {
    render(<NewBoxForm />);
})

it('matches snapshot', () => {
    const {asFragment, getByText} = render(<NewBoxForm />);

    expect(asFragment()).toMatchSnapshot();
});

it('should display text Width and Height and Submit', () => {
    const {getByText} = render(<NewBoxForm />);

    expect(getByText('Width:')).toBeInTheDocument();
    expect(getByText('Height:')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
})

it('should display Color #232323 black as default', () => {
    const {getByText} = render(<NewBoxForm />);

    expect(getByText('Color: #232323')).toBeInTheDocument();
});

it('should display correct width 100 when range is moved to max range', () => {
    const {getByLabelText, queryByText} = render(<NewBoxForm />);
    const widthInput = getByLabelText('Width:');

    expect( queryByText('Width: 100') ).not.toBeInTheDocument();
    fireEvent.change( widthInput, { target: {value: '100' } } );
    expect( queryByText('Width: 100') ).toBeInTheDocument();
});

it('should display correct height 100 when range is moved to max range', () => {
    const {getByLabelText, queryByText} = render(<NewBoxForm />);
    const heightInput = getByLabelText('Height:');

    expect( queryByText('Height: 100') ).not.toBeInTheDocument();
    fireEvent.change( heightInput, { target: {value: '100' } } );
    expect( queryByText('Height: 100') ).toBeInTheDocument();
});

it('should display correct color when color is choosen', () => {
    const {getByLabelText, queryByText} = render(<NewBoxForm />);
    const colorInput = getByLabelText('Color: #232323');

    expect( queryByText('Color: #006d8f') ).not.toBeInTheDocument();
    fireEvent.change( colorInput, { target: {value: '#006d8f' } } );
    expect( queryByText('Color: #006d8f') ).toBeInTheDocument();
});