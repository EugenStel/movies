import { v4 as uuidv4 } from 'uuid'

export const NAV = {
    movies: [
        {
            title: 'Trending movies',
            path: '/trending',
            id: uuidv4()
        },
        {
            title: 'Popular movies',
            path: '/popular',
            id: uuidv4()
        },
        {
            title: 'Top Rated',
            path: '/rated',
            id: uuidv4()
        }
    ],
    shows: [
        {
            title: 'Trending shows',
            path: '/trending_shows',
            id: uuidv4()
        },
        {
            title: 'Popular shows',
            path: '/popular_shows',
            id: uuidv4()
        },
    ],
}