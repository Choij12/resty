import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/Form';

describe('Testing our form component', () => {
  it('Should use our callback on submit', () => {

    let callback = jest.fn();

    render( <Form setFormData={callback}/> );

    let button = screen.getByRole('button');
    fireEvent.click(button);
  
    expect(callback).toHaveBeenCalled();
  });
});