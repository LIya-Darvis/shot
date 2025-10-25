import { useEffect, useState } from 'react';
import { TMember, TWeapon } from '../../../backend/models/types'
import { chargeMessage, drinkWater, dropCharge, healthUp, makeShot, useHandcuffs, useKnife } from '../../../backend/models/functions';
import './styles.css';

export const MainPage = () => {
    const initOpponent: TMember = { health: 6, inventory: [], isSkipping: false, maxHealth: 10, name: 'Диллер' };
    const initPlayer: TMember = { health: 6, inventory: [], isSkipping: false, maxHealth: 10, name: 'Игрок' };
    const initWeapon: TWeapon = { charges: [0, 1, 0, 1, 1, 1, 1, 1], isDoubleDmg: false }

    const [player, setPlayer] = useState<TMember>(initPlayer);
    const [opponent, setOpponent] = useState<TMember>(initOpponent);
    const [weapon, setWeapon] = useState<TWeapon>(initWeapon);
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    console.log(weapon);

    // ToDo:
    // ✔ добавить кнопки на остальные предметы (игроку)
    // ✔ реализовать псевдодействия оппонента
    // - добавить генерацию инвентаря
    // - поправить сброс наручников после двух выстрелов подряд
    // = добавить выстрел в себя

    // На неизвесттое будущее
    // - добавить заклинивание оружия
    // - добавить магазин предметов (перед раундом)

    const stupidOpponent = () => {
        // setOpponent(healthUp(opponent));

        const { newTarget, newWeapon } = makeShot(player, weapon);

        const newCharges = [...weapon.charges];
        newCharges.pop();

        setPlayer(newTarget);
        setWeapon(newWeapon)

        // сбрасываем наручники (на всякий)
        // setPlayer({ ...player, isSkipping: false });
    }

    useEffect(() => {
        if (isWaiting) {
            stupidOpponent();
            // проверка на наручники игрока
            // if (player.isSkipping) {
            //     console.log('> *анимация проверки наручников на игроке*');
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
                    const { newTarget, newWeapon } = makeShot(opponent, weapon);
                    setOpponent(newTarget);
                    setWeapon(newWeapon);
                    setIsWaiting(!opponent.isSkipping);
                }
                }>Выстрел!</button>
                <button disabled={isWaiting} onClick={() => {
                    const { newTarget, newWeapon } = makeShot(player, weapon);
                    const newCharges = [...weapon.charges];
                    const currentCharge = newWeapon.charges[newWeapon.charges.length - 1];

                    setPlayer(newTarget)
                    // сбрасываем дабл урон (на всякий)
                    setWeapon({ ...weapon, charges: newCharges, isDoubleDmg: false })
                    setIsWaiting(currentCharge === 1 ? true : false);
                }
                }>Выстрел в себя</button>
                <button disabled={isWaiting} onClick={() => setOpponent(useHandcuffs(opponent))}>Повесить наручники</button>
                <button disabled={isWaiting} onClick={() => setWeapon(dropCharge(weapon))}>Покурить</button>
                <button disabled={isWaiting} onClick={() => chargeMessage(weapon)}>Рация</button>
                <button disabled={isWaiting} onClick={() => setPlayer(drinkWater(player))}>Вода</button>
                <button disabled={isWaiting} onClick={() => setPlayer(healthUp(player))}>Бинты</button><button disabled={isWaiting} onClick={() => setWeapon(useKnife(weapon))}>Ножовка</button>
            </div>
        </div>
    )
}
