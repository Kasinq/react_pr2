import React from 'react'

export default function PagesArray({ getPagesArr }) {
    return (
        <div className='pagesArr'>
            {
                getPagesArr()
            }
        </div>
    )
}
