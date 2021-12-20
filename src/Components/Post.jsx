import React from 'react'
import MyButton from './Items/MyButton'
import {useNavigate} from 'react-router-dom';

export default function Post({ sortedNews, removePost }) {

    const router = useNavigate()

    return (
        <div>
            {sortedNews.length !== 0
                ? sortedNews.map((item, index) =>
                    <div className='post' key={index}>
                        <div>
                            <h5>{item.id + '. ' + item.title}</h5>
                            <div className='post__text'>{item.body}</div>
                        </div>
                        <div className='removePost'>
                            <MyButton name='Edit post' onClick={() => router(`/posts/${item.id}`)} bgColor='rgb(211, 248, 204)' />
                            <MyButton name='Remove post' onClick={() => removePost(item)} bgColor='rgb(251, 218, 218)' />
                        </div>
                    </div>)

                : <div>Постів не знайдено</div>
            }
        </div>
    )
}
