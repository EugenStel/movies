import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip, Pagination, Navigation } from "swiper"

import { IMAGE_URL_500 } from '../../constants/imagesUrl'

import "swiper/css"
import "swiper/css/effect-flip"
import "swiper/css/pagination"
import "swiper/css/navigation"

import './similar.scss'

export const SimilarMovies = ({ similarMovies }) => (
    <div className="similar_movies">
        <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
        >
            {similarMovies?.map(({ poster_path, title, id }) => (
                <SwiperSlide key={id}>
                    <img src={`${IMAGE_URL_500}${poster_path}`} alt="poster_path" />
                    <span className='similar_name'>{title}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
)
