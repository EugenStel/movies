import { axiosBaseURL } from "../constants/axiosBaseUrl"
import { PROXY } from "../constants/proxy"

export const getPopularMovies = (setData, setIsError, page = 1) => {
    axiosBaseURL.get(`${process.env.REACT_APP_POPULAR_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`, PROXY)
        .then(resp => setData((resp.data)))
        .catch(() => setIsError(true))
}

export const getTrendingsMovies = (timeWindow, setData, setIsError, page) => {
    axiosBaseURL.get(`trending/movie/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`, PROXY)
        .then(resp => setData((resp.data)))
        .catch(() => setIsError(true))
}

export const getTopRated = (setData, setIsError, page = 1) => {
    axiosBaseURL.get(`${process.env.REACT_APP_TOPRATED_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`, PROXY)
        .then(resp => setData((resp.data)))
        .catch(() => setIsError(true))
}

export const getSimilarMovies = (movie_id, setSimilarMovies) => {
    axiosBaseURL.get(`movie/${movie_id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setSimilarMovies(resp.data.results))
        .catch(err => err)
}

export const gerRecommendationsMovies = (movie_id, setRecMovies) => {
    axiosBaseURL.get(`movie/${movie_id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setRecMovies(resp.data.results))
        .catch(err => err)
}

export const getGenres = (setGenres) => {
    axiosBaseURL.get(`genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setGenres(resp.data.genres))
        .catch(err => err)
}

export const getMovieDetails = (id, setMovieDetails) => {
    axiosBaseURL.get(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setMovieDetails(resp.data))
        .catch(err => err)
}

export const getMovieCredits = (id, setMovieCredits) => {
    axiosBaseURL.get(`movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setMovieCredits(resp.data))
        .catch(err => err)
}

export const getVideo = (id, setVideos) => {
    axiosBaseURL.get(`movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`, PROXY)
        .then(resp => setVideos(resp.data.results))
        .catch(err => err)
}