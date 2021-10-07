import { render,screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world as a test', ()=>{
    //Arrange
    render(<Greeting/>)
    // Act
    //..nothing

    const HelloWorld = screen.getByText('Hello World',{exact:false})
    expect(HelloWorld).toBeInTheDocument
})