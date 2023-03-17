import { PAGE_TYPES } from '../constants/pageTypes'
import { getTopRated, getTrendingsMovies, getPopularMovies } from './axios-requests'

export const getRequest = (type, timeWindow, setData, setIsError, page) => {
    switch (type) {
        case PAGE_TYPES.popular:
            getPopularMovies(setData, setIsError, page)
            break;
        case PAGE_TYPES.trending:
            getTrendingsMovies(timeWindow, setData, setIsError, page)
            break;
        case PAGE_TYPES.rated:
            getTopRated(setData, setIsError, page)
            break;
        default:
            break;
    }
}