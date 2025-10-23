import { useEffect, useState } from 'react';
import { TMember, TWeapon } from '../../../backend/models/types'
import { chargeMessage, drinkWater, dropCharge, healthUp, makeShot, useHandcuffs, useKnife } from '../../../backend/models/functions';
import './styles.css';

export const MainPage = () => {
    const initOpponent: TMember = { health: 6, inventory: [], isSkipping: false, maxHealth: 10, name: 'Диллер' };
    const initPlayer: TMember = { health: 6, inventory: [], isSkipping: false, maxHealth: 10, name: 'Игрок' };
    const initWeapon: TWeapon = { charges: [0, 1, 0, 1, 0, 1, 0, 1], isDoubleDmg: false }

    const [player, setPlayer] = useState<TMember>(initPlayer);
    const [opponent, setOpponent] = useState<TMember>(initOpponent);
    const [weapon, setWeapon] = useState<TWeapon>(initWeapon);
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    console.log(player);
    console.log(opponent);
    console.log(weapon);

    // ToDo:
    // ✔ добавить кнопки на остальные предметы (игроку)
    // ✔ реализовать псевдодействия оппонента
    // - добавить генерацию инвентаря
    // - поправить сброс наручников после двух выстрелов подряд
    // - добавить выстрел в себя

    const stupidOpponent = () => {
        setOpponent(healthUp(opponent));
        setTimeout(() => { }, 2000);

        setPlayer(makeShot(player, weapon))
        // сбрасываем дабл урон (на всякий)
        setWeapon({ ...weapon, isDoubleDmg: false })
        setTimeout(() => { }, 2000);

        // сбрасываем наручники (на всякий)
        setPlayer({ ...player, isSkipping: false });
        setTimeout(() => { }, 2000);
    }

    useEffect(() => {
        if (isWaiting) {
            stupidOpponent();
            setTimeout(() => { }, 1000);
            // проверка на наручники игрока
            // if (player.isSkipping) {
            //     console.log('> *анимация проверки наручников на игроке*');
            //     setTimeout(() => { }, 2000);
            //     stupidOpponent();
            // }
            setIsWaiting(false);
        }

    }, [isWaiting])


    return (
        <div className='main-container'>
            <div className='head-container'>
                <div className='member-info'>{player.name} - [{player.health}]</div>
                {/* <div className='round-info'>Round {data.round || 1}</div> */}
                <div className='member-info'>{opponent.name} - [{opponent.health}]</div>
            </div>
            <div className='game-container'>
                <button disabled={isWaiting} onClick={() => {
                    setOpponent(makeShot(opponent, weapon))
                    // сбрасываем дабл урон (на всякий)
                    setWeapon({ ...weapon, isDoubleDmg: false })
                    setIsWaiting(!opponent.isSkipping);
                }
                }>Выстрел!</button>
                <button disabled={isWaiting} onClick={() => setOpponent(useHandcuffs(opponent))}>Повесить наручники</button>
                <button disabled={isWaiting} onClick={() => setWeapon(dropCharge(weapon))}>Покурить</button>
                <button disabled={isWaiting} onClick={() => chargeMessage(weapon)}>Рация</button>
                <button disabled={isWaiting} onClick={() => setPlayer(drinkWater(player))}>Вода</button>
                <button disabled={isWaiting} onClick={() => setPlayer(healthUp(player))}>Бинты</button><button disabled={isWaiting} onClick={() => setWeapon(useKnife(weapon))}>Ножовка</button>
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