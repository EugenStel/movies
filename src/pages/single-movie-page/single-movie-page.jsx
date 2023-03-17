import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { ActorCard } from "../../components/actor-card/actor-card"
import { SimilarMovies } from "../../components/similar/similar"
import { RecommendationsMovies } from "../../components/recommendations/recommendations"
import { Videos } from "../../components/videos/videos"

import { getMovieDetails, getMovieCredits, getSimilarMovies, gerRecommendationsMovies, getVideo } from "../../utils/axios-requests"

import { IMAGE_URL_ORIGINAL, IMAGE_URL_300 } from "../../constants/imagesUrl"


import './single-movie-page.scss'

export const SingleMoviePage = () => {
    const [movieDetails, setMovieDetails] = useState(null)
    const [movieCredits, setMovieCredits] = useState(null)
    const [similarMovies, setSimilarMovies] = useState(null)
    const [recMovies, setRecMovies] = useState(null)
    const [videos, setVideos] = useState([])
    const [videoUrl, setVideoUrl] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getMovieDetails(id, setMovieDetails)
        getMovieCredits(id, setMovieCredits)
        getSimilarMovies(id, setSimilarMovies)
        gerRecommendationsMovies(id, setRecMovies)
        getVideo(id, setVideos)
    }, [id])

    return (
        <div className="single_page">
            <div className="single_header">
                <img src={`${IMAGE_URL_ORIGINAL}${movieDetails?.backdrop_path}`} alt={movieDetails?.backdrop_path} className="header_image" />
                <h2 className="header_title">{movieDetails?.title}</h2>
                <div className="movie_duration">
                    <ion-icon name="hourglass-outline" />
                    - {movieDetails?.runtime} min
                </div>
                <div className="movie_tagline">
                    {`${movieDetails?.tagline}`}
                </div>
            </div>
            <div className="movie_desc">
                {movieDetails?.overview}
            </div>
            <div className="movie_videos">
                <h2 className="movie_videos-title">Videos</h2>
                <Videos videos={videos} videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
            </div>
            <div className="movie_cast">
                <h2 className="cast_title">Actors:</h2>
                <div className="cast">
                    {movieCredits?.cast?.filter((_, index) => index <= 4)?.map(({ name, character, profile_path, credit_id }) => (
                        <ActorCard
                            key={credit_id}
                            name={name}
                            character={character}
                            profile_path={profile_path}
                            IMAGE_URL_300={IMAGE_URL_300}
                        />
                    )
                    )}
                </div>
            </div>
            {similarMovies?.length > 0 ?
                <div className="similar_movies-block">
                    <h3 className="similar_title">Similar movies</h3>
                    <SimilarMovies similarMovies={similarMovies} />
                </div>
                :
                <div>No similar movies</div>
            }
            {recMovies?.length > 0 ?
                <div className="recommend_movies-block">
                    <h3 className="recommend_title">Recommend movies</h3>
                    <RecommendationsMovies recMovies={recMovies} />
                </div>
                :
                <div>No recommend movies</div>
            }
        </div>
    )
}