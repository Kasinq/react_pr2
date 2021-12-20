import React from 'react'

export default function MyInput({ placeholder, value, onChange }) {
    return (
        <>
            <input className='myInput' type='text' placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}
