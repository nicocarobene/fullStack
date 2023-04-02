import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Notes from './Notes.jsx'

test('renders contents', ()=>{
  
  const content= 'This is a test'
  const component = render(<Notes content={content}/>)

  component.getByText('This is a test')
  
  //expect(component.container).toHaveTextContent(content)
})
