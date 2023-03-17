import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from 'react-responsive-pagination'

import { MovieCard } from '../../components/movie-card/movie-card'
import { CardsControl } from '../../components/cards-control/cards-control'
import { ErrorRequest } from '../../components/error/error'

import { getGenres } from '../../utils/axios-requests'
import { getRequest } from '../../utils/request-type'

import { PAGE_TYPES } from '../../constants/pageTypes'
import { CARDS_VIEW } from '../../constants/cardsView'
import { TRENDING_TIME_WINDOW } from '../../constants/trendingsTimeWindow'

import './pagination.css'
import './movies-page.scss'


export const MoviesPage = ({ type }) => {
    const [data, setData] = useState(null)
    const [allGenres, setAllGenres] = useState(null)
    const [viewCards, setViewCards] = useState(CARDS_VIEW.grid)
    const [timeWindow, setTimeWindow] = useState(TRENDING_TIME_WINDOW.day)
    const [isError, setIsError] = useState(false)
    const [page, setPage] = useState(1)

    const { pathname } = useLocation()
    const navigate = useNavigate()

    const totalPages = data?.total_pages


    useEffect(() => {
        getRequest(type, timeWindow, setData, setIsError, page)
        if (!allGenres) {
            getGenres(setAllGenres)
        }

    }, [type, timeWindow, allGenres, page])

    const handlePageChange = (pageNumber) => {
        const path = pathname.split('/')[1]
        navigate(`/${path}/${pageNumber}`)
        setPage(pageNumber)
    }

    return (
        isError ?
            <ErrorRequest />
            :
            <div className="page">
                <h2 className='page_header'>{type === PAGE_TYPES.trending ? 'Trending movies' : type === PAGE_TYPES.popular ? 'Popular movies' : 'Top rated movies'}</h2>
                <CardsControl
                    viewCards={viewCards}
                    setViewCards={setViewCards}
                    timeWindow={timeWindow}
                    setTimeWindow={setTimeWindow}
                    type={type}
                />
                <div className={viewCards === CARDS_VIEW.grid ? "cards_grid" : "cards_list"}>
                    {data?.results?.map(({ title, release_date, poster_path, id, vote_average, overview, genre_ids }) =>
                        <MovieCard
                            title={title}
                            release_date={release_date}
                            poster_path={poster_path}
                            vote_average={vote_average}
                            overview={overview}
                            genre_ids={genre_ids}
                            allGenres={allGenres}
                            key={id}
                            viewCards={viewCards}
                            id={id}
                        />
                    )}
                </div>
                <Pagination
                    current={page}
                    total={totalPages}
                    onPageChange={(pageNumber) => handlePageChange(pageNumber)}
                />
            </div>
    )
}