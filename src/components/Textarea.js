import React, { useState, useRef } from "react";

const TextArea = () => {
    const [text, setText] = useState('')
    const textRef = useRef(null)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const clearText = () => {
        setText('')
    }

    const selectText = () => {
        textRef.current.select()
    }

    const copyText = (e) => {
        navigator.clipboard.writeText(text)
    }

    const upperCaseText = () => {
        setText(text.toUpperCase())
    }

    const lowerCaseText = () => {
        setText(text.toLowerCase())
    }

    return(<>
    <div className="mb-3 container mt-3 text-center fs-4 fw-bold">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>
        <textarea rows="8" placeholder="Write something" ref={textRef} value={text} onChange={handleChange} id="exampleFormControlTextarea1" className="form-control"></textarea>
    </div>

    <div className="mt-1 container d-flex">
        <button type="button" onClick={clearText} className="btn btn-primary flex-grow-1 mx-2">Clear</button>
        <button type="button" onClick={selectText} className="btn btn-primary flex-grow-1 mx-2">Select All</button>
        <button type="button" onClick={copyText} className="btn btn-primary flex-grow-1 mx-2">Copy</button>
        <button type="button" onClick={upperCaseText} className="btn btn-primary flex-grow-1 mx-2">Upper Case</button>
        <button type="button" onClick={lowerCaseText} className="btn btn-primary flex-grow-1 mx-2">Lower Case</button>
    </div>

    <div className="my-5 container">
        <span className="mb-1">{text.length} : Characters</span>
        <span className="mb-1 px-3">{text.split(/\s+/).filter(ele => ele.length !== 0).length} : Words</span>
        <h3>Preview:</h3>
        <p>{text}</p>
    </div>
    </>)
}

export default TextArea