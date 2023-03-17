import { TRENDING_TIME_WINDOW } from '../../../constants/trendingsTimeWindow'
import './time-window.scss'

export const TimeWindow = ({ timeWindow, setTimeWindow }) => (
    <div className="time_window">
        <span className="time_window_small">Trending list for:</span>
        <span className="time_window_large">View the trending list for the day or for the week:</span>
        <button
            type="button"
            className={timeWindow === TRENDING_TIME_WINDOW.day ? "time_window-btn selected" : "time_window-btn"}
            onClick={() => setTimeWindow(TRENDING_TIME_WINDOW.day)}
        >
            {TRENDING_TIME_WINDOW.day}
        </button>
        <button
            type="button"
            className={timeWindow === TRENDING_TIME_WINDOW.week ? "time_window-btn selected" : "time_window-btn"}
            onClick={() => setTimeWindow(TRENDING_TIME_WINDOW.week)}
        >
            {TRENDING_TIME_WINDOW.week}
        </button>
    </div>
)
