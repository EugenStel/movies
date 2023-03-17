import { useEffect } from 'react'
import { YOUTUBE_VIDEO_URL } from '../../constants/youtubeVideoLink'

import './videos.scss'

export const Videos = ({ videos, videoUrl, setVideoUrl }) => {

    useEffect(() => {
        setVideoUrl(`${YOUTUBE_VIDEO_URL}${videos[0]?.key}`)
    }, [setVideoUrl, videos])

    return (
        <div className="movie_video-block">
            <iframe
                className='movie_video-video'
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder='0'
            />
            <div className="movie_video-playlist">
                <p className='movie_video-playlist-title'>Click on the link below to show video</p>
                <div className="playlist">
                {videos?.map(({ id, key, name, type }) => (
                    <button key={id} className='movie_video-link' onClick={() => setVideoUrl(`${YOUTUBE_VIDEO_URL}${key}`)} >
                        <span className='movie_video-name'>{name}</span>
                        <span className='movie_video-name'>Type: {type}</span>
                    </button>
                ))}
                </div>
                
            </div>
        </div>
    )
}