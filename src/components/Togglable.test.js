import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Togglable from "./Togglable";
import i18n from "../i18n";

describe('<Togglable />',() => {
  const buttonLabel= 'show'
  let component
  beforeEach(()=>{
    component= render(
        <Togglable buttonLabel={ buttonLabel }>
            <div>testDivContent</div>
        </Togglable>
    )
  })

  test('render its children but they are not visible', () =>{
    const el = component.getByText('testDivContent')
    expect(el.parentNode).toHaveStyle('display: none')
  })

  test('after clicking its children must be show', ()=>{
    const button = component.getByText(buttonLabel)

    fireEvent.click(button)

    const el = component.getByText('testDivContent')

    expect(el.parentNode).not.toHaveStyle('display: none')
  })

  test('toggled content can be closed', () => {
    const button = component.getByText(buttonLabel)

    fireEvent.click(button)

    const el = component.getByText('testDivContent')

    expect(el.parentNode).not.toHaveStyle('display: none')
    
    
    const cancelButton = component.getByText(i18n.TOGGABLE.CANCEL_BUTTON)
    fireEvent.click(cancelButton)
    
    expect(el.parentNode).toHaveStyle('display: none')
  })
})