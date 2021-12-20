export const getPageCount = (totalCount, limit) => {
    return Math.ceil( totalCount / limit )
}

export const getPagesArray = (totalPages) => {
    let pagesArr = []
    for (let i = 0; i < totalPages; i++) {
        pagesArr.push(i + 1)
    }
    return pagesArr
}