import React, { useState } from 'react'

import MySelect from './Items/MySelect'


export default function SelectedNumber({ limit, isActive, setLimit }) {

    const [options] = useState([
        { name: '10 постів', value: 10 },
        { name: '6 постів', value: 6 },
        { name: '20 постів', value: 20 },
        { name: 'Показати всі', value: -1 },])

    return (
        <>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Відображати'
                options={options}
                disabled={isActive}
            />
        </>
    )
}
