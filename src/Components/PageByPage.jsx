import React from 'react'
import { getPagesArray } from '../utils/pages'
import PagesArray from './PagesArray'
import Post from './Post'
import Preloader from './Preloader'

export default function PageByPage({ sortedNews, removePost, numberPage, totalPages, setNumberPage, isLoading }) {

    let pagesArr = getPagesArray(totalPages) // реалізація додавання масива кількості сторінок

    function getPagesArr() {
       return pagesArr.map(pages =>
            <span key={pages} className='pageArr' onClick={() => setNumberPage(pages)}>{pages === numberPage
                ? <b>{pages}</b>
                : pages
            }</span>
        )
    }

    return (
        <>
            {isLoading
                ? <Preloader />
                : <>
                    <Post sortedNews={sortedNews} removePost={removePost} />
                    <PagesArray getPagesArr={getPagesArr} />
                </>
            }
        </>
    )
}
