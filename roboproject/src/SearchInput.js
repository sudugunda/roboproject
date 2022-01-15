import React from 'react'

export default function SearchInput({onInputChange}) {
    return (
        <>
            <input type="text"  onChange={e => onInputChange(e)} placeholder='Search...' className="bg-light-white pa2 ma2  br3 b0 shadow-5 tc"/>
        </>
    )
}

