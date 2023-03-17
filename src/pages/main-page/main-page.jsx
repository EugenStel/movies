import './main-page.scss'

export const MainPage = () => (
    <div className="main_page">
        <h2 className="main_title">Welcome</h2>
        <p className="main_content">
            Here you can find out which films are popular now, which films are trending, and which ones have the highest rating.
            You can find out the release date of the film, read the description, find out the slogan, find out the cast.</p>
        <p className="main_content">
            On the movie page, sections with similar films will be available, as well as with recommended ones, which are selected by AI.
        </p>
        <p className="main_content">
            If you are in Belarus or Russia, then the information may not be displayed. Try refreshing the page with VPN enabled.
        </p>
    </div>
)
