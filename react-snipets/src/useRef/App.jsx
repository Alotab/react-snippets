
import React, { useRef } from 'react'

// How the useRef is used to access the DOM
// we want to use DOM element focus() on the input
// This allows or helps move the focus on the input field when the user clicks on the button without the 
// user click or typing into the field which is mostly the defualt way 

const App = () => {
    const formInputRef = useRef(null);

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <>
            <h1>Using useRef to access underlying DOM</h1>
            <input ref={formInputRef} type="text" />
            <button onClick={focusInput}>Focus input</button>
        </>
    )
}

export default App