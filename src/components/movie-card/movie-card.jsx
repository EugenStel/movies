import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { converReleaseDate } from '../../utils/release-date'
import { IMAGE_URL_500 } from '../../constants/imagesUrl'
import { CARDS_VIEW } from '../../constants/cardsView'

import './movie-card.scss'

export const MovieCard = ({ title, release_date, poster_path, vote_average, overview, viewCards, genre_ids, allGenres, id }) => {
    const [movieGenres, setMovieGenres] = useState()
    const release = converReleaseDate(release_date)


    useEffect(() => {
        setMovieGenres(allGenres?.filter(i => genre_ids?.includes(i.id)))
    }, [allGenres, genre_ids])


    return (
        <div className={viewCards === CARDS_VIEW.grid ? "card card_view-grid" : "card card_view-list"}>
            <div className="card_img_wrapper">
                <img src={`${IMAGE_URL_500}${poster_path}`} alt={poster_path} className='card_img' />
                <div className="card_rating">
                    {Number(vote_average).toFixed(1)}
                </div>
            </div>
            <div className="card_info">
                <h4 className='card_title'>{title}</h4>
                <div className="card_genre">
                    Genres:
                    {movieGenres?.map((item) => (
                        <span key={item?.id} className='card_genre-text'>{item?.name}</span>
                    ))}
                </div>
                <div className="card_desc">
                    {overview}
                </div>
                <div className="card_release">Release: {release}</div>
                <div className="card_button">
                    <Link to={`${id}`} className='card_button-link'>
                        <button type='button' className='card_button-btn'>read more</button>
                    </Link>
                </div>
            </div>
            <div className="card_button">
                <Link to={`${id}`} className='card_button-link'>
                    <button type='button' className='card_button-btn'>read more</button>
                </Link>
            </div>
        </div>
    )
}