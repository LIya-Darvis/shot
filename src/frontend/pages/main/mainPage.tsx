import { Member } from "../../../backend/models/types"
import './styles.css';

type TProps = {
    player?: Member,
    dealer?: Member,
    round?: number,
}

export const MainPage = (data: TProps) => {

    return (
        <div className='main-container'>
            <div className='head-container'>
                <div className='member-info'>{data.player?.name || 'Player'} - [{data.player?.health || '5'}]</div>
                <div className='round-info'>Round {data.round || 1}</div>
                <div className='member-info'>{data.dealer?.name || 'Dealer'} - [{data.dealer?.health || '5'}]</div>
            </div>
            <div className='game-container'>
                <div className=''></div>
            </div>
        </div>
    )
}