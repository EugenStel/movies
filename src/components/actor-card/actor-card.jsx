import './actor-card.scss'

export const ActorCard = ({ name, character, profile_path, IMAGE_URL_300 }) => (
    <div className='actor'>
        <img className="actor_img" src={`${IMAGE_URL_300}${profile_path}`} alt={profile_path} />
        <h3 className="actor_name">{name}</h3>
        <p>Character: {character}</p>
    </div>
)
