import { render, screen } from '@testing-library/react';
import { Quotes } from './Quotes'

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () =>{
    render(<Quotes quote={quote} speaker={speaker} />)

    const quoteEL = screen.getByText(quote);
    const speakerEL = screen.getByText(`- ${speaker}`);
    const buttonEL = screen.getByRole('button');

    expect(quoteEL).toBeInTheDocument();
    expect(speakerEL).toBeInTheDocument();
    expect(buttonEL).toBeInTheDocument();
})