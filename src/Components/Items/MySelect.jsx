import React from 'react'

export default function MySelect({ options, defaultValue, value, onChange, disabled }) {
    return (
        <select className='mySelect' disabled={disabled} value={value} onChange={(e) => onChange(e.target.value)}>

            <option disabled value='d'>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            
        </select>
    )
}
