import React from 'react'

export default function DisplayPosts({setIsActive, setNews, setNumberPage}) {
    
    const displayPosts1 = () => {
        setIsActive(false)
        console.log('setIsActive - false')
        setNumberPage(1)
    }
    const displayPosts2 = () => {
        setIsActive(true)
        setNews([])
        setNumberPage(1)
        console.log('setIsActive - true')
    }

    return (
        <span className='displayPosts'>
            <span>Вигляд сторінки:</span>
            <input type='radio' id='displayChoice1' value='displayPosts1' name='displayPosts'
                defaultChecked
                onChange={displayPosts1}
            />
            <label htmlFor='displayChoice1'>Посторінково</label>
            <input type='radio' id='displayChoice2' value='displayPosts2' name='displayPosts'
                onChange={displayPosts2}
            />
            <label htmlFor='displayChoice2'>Нескінченний скрол</label> 
        </span>
    )
}
