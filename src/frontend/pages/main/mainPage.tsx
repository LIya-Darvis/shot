import { useRef, useState } from 'react';
import { TMember, TWeapon } from '../../../backend/models/types'
import './styles.css';
import { makeShot, useHandcuffs } from '../../../backend/models/functions';

export const MainPage = () => {
    const initOpponent: TMember = { health: 2, inventory: [], isSkipping: false, maxHealth: 4, name: 'Диллер' };
    const currentPlayer: TMember = { health: 2, inventory: [], isSkipping: false, maxHealth: 4, name: 'Игрок' };
    const initWeapon: TWeapon = { charges: [0, 1, 0, 1, 1], isDoubleDmg: false }

    const [opponent, setOpponent] = useState<TMember>(initOpponent);
    const [player, setPlayer] = useState<TMember>(currentPlayer);
    const [weapon, setWeapon] = useState<TWeapon>(initWeapon);

    const healthRef = useRef(opponent.health);

    console.log(opponent);

    // ToDo:
    // - добавить кнопки на остальные предметы (игроку)
    // - добавить генерацию инвентаря
    // - реализовать псевдодействия оппонента

    return (
        <div className='main-container'>
            <div className='head-container'>
                <div className='member-info'>{player.name} - [{healthRef.current}]</div>
                {/* <div className='round-info'>Round {data.round || 1}</div> */}
                <div className='member-info'>{opponent.name} - [{opponent.health}]</div>
            </div>
            <div className='game-container'>
                <div className=''>
                    <button onClick={() => setOpponent(makeShot(opponent, weapon))}>Выстрел!</button>
                    <button onClick={() => setOpponent(useHandcuffs(opponent))}>Повесить наручники</button>
                </div>
            </div>
        </div>
    )
}

// export const Button = (props) => {
//     return (
//         <> {symbol === 'plus' && <Icon className='fa fa-plus-circle' />}
//             <button onClick={props.onClick} />
//         </>
//     );
// }