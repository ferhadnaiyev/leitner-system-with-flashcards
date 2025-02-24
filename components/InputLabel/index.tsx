import React from 'react'

function InputLabel({ htmlFor, children }) {
    return (
        <label htmlFor={htmlFor} className="text-[0.8rem] sm:text-[1rem] font-normal">
            {children}
        </label>
    )
}

export default InputLabel
