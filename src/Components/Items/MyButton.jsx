import React from 'react'

export default function MyButton(props) {
    return (
        <button onClick={props.onClick} className='myButton' style={{ backgroundColor: props.bgColor }}>
            {props.name}
        </button>
    )
}
