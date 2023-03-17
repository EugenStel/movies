import { TimeWindow } from './time-window/time-window'
import { PAGE_TYPES } from '../../constants/pageTypes'

import { CARDS_VIEW } from '../../constants/cardsView'

import './cards-control.scss'

export const CardsControl = ({ viewCards, setViewCards, timeWindow, setTimeWindow, type }) => {

    const iconsColors = {
        active: '#229d80',
        default: '#ffffff'
    }

    return (
        <div className="card_control">
            {type === PAGE_TYPES.trending ? <TimeWindow timeWindow={timeWindow} setTimeWindow={setTimeWindow} /> : null}
            <div className="card_control-view">
                <button type='button' className='view_button' onClick={() => setViewCards(CARDS_VIEW.grid)}>
                    <ion-icon
                        name="grid-outline"
                        size="large"
                        style={viewCards === CARDS_VIEW.grid ? { color: iconsColors.active } : { color: iconsColors.default }}
                    />
                </button>
                <button type='button' className='view_button' onClick={() => setViewCards(CARDS_VIEW.list)}>
                    <ion-icon
                        name="list-outline"
                        size="large"
                        style={viewCards === CARDS_VIEW.list ? { color: iconsColors.active } : { color: iconsColors.default }}
                    />
                </button>
            </div>
        </div>
    )
}