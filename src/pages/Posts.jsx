import React, { useEffect, useMemo, useRef, useState } from 'react'
import { PostService } from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import { getPageCount } from '../utils/pages'
import AddPosts from '../Components/AddPosts'
import MyInput from '../Components/Items/MyInput'
import Post from '../Components/Post'
import Preloader from '../Components/Preloader'
import PageByPage from '../Components/PageByPage'
import { useObserver } from '../hooks/useObserver'
import DisplayPosts from '../Components/DisplayPosts'
import SelectedNumber from '../Components/SelectedNumber'

export default function Posts() {

    const [news, setNews] = useState([])
    const [allNews, setAllNews] = useState([]) // всі існуючи пости
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [numberPage, setNumberPage] = useState(1)

    const [isActive, setIsActive] = useState(false) // показує чи активний радіобаттон

    const lastEl = useRef()

    // реалізація пошуку постів серед всіх існуючих 
    const [allFetchPosts] = useFetching(async () => {
        const allPosts = await PostService.getAll()
        setAllNews(allPosts.data)
    })

    useEffect(() => {
        allFetchPosts()
    }, [])
    // реалізація пошуку постів серед всіх існуючих 

    // Реалізація завантаження постів через axios
    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll(limit, numberPage)
        checkIsActive(isActive, [...news, ...posts.data], posts.data)

        const totalCount = posts.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    function checkIsActive(isActive, arr1, arr2) {
        isActive ? setNews(arr1) : setNews(arr2) // Визначає отрисовку сторінки 
    }

    useEffect(() => {
        fetchPosts()
    }, [numberPage, limit, isActive])
    // Реалізація завантаження постів через axios

    // Реалізація пошуку
    const [searchQuery, setSearchQuery] = useState('')

    function choiceNews(searchQuery, arr, arr2) {
        if (searchQuery === '') return arr
        return arr2
    }

    const sortedNews = useMemo(() => {
        const arr = choiceNews(searchQuery, [...news], [...allNews])
        return arr.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
    }, [news, searchQuery])
    // Реалізація пошуку

    // Реалізація додавання та видалення постів
    const createPost = (newPost) => {
        setNews([...news, newPost])
    }

    const removePost = (post) => {
        setNews(news.filter(filter => filter.id !== post.id))
    }
    // Реалізація додавання та видалення постів

    // Реалізація безкінечного довантаження постів
    useObserver(isActive, lastEl, numberPage < totalPages, isLoading, () => {
        setNumberPage(numberPage + 1)
    })
    // Реалізація безкінечного довантаження постів

    return (
        <div>
            <AddPosts createPost={createPost} />
            <MyInput placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.currentTarget.value)} />
            <SelectedNumber isActive={isActive} limit={limit} setLimit={setLimit} />
            <DisplayPosts setIsActive={setIsActive} setNews={setNews} setNumberPage={setNumberPage} />

            {postError &&
                <div>Щось пішло не так ${postError}</div>
            }

            {isActive
                ? <>
                    <Post sortedNews={sortedNews} removePost={removePost} />
                    < div className='lustEl' ref={lastEl} />
                    {numberPage < totalPages
                        ? <Preloader />
                        : <h2>Пости не знайдені</h2>
                    }
                </>
                : <PageByPage isLoading={isLoading} sortedNews={sortedNews}
                    removePost={removePost} numberPage={numberPage} totalPages={totalPages}
                    setNumberPage={setNumberPage} />
            }
        </div >
    )
}

