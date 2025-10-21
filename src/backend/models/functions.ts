import { TMember, TWeapon } from './types';

export const makeShot = (opponent: TMember, weapon: TWeapon): TMember => {
    return {
        ...opponent,
        health: opponent.health - (weapon.isDoubleDmg ? 2 : 1)
    }
}

/**
 * выброс следующего патрона 
 * (для предмета "сигареты")
 */
export const dropCharge = (weapon: TWeapon): void => {
    weapon.charges.splice(0, 1);
}

/**
 * узнать какой патрон следующий
 * (для предмета "батарейка для рации")
 */
export const chargeMessage = (weapon: TWeapon): void => {
    console.log("Следующий патрон:", weapon.charges[0]);
    weapon.charges[0];
}

/**
 * хилл/анлак (рандом)
 * (для предмета "зараженная вода")
 */
export const drinkWater = (currentPlayer: TMember): void => {
    const healthPoints = [-1, 2];
    currentPlayer.health += healthPoints[Math.floor(Math.random() * 2)];
}

/**
 * обычный хилл
 * (для предмета "бинты")
 */
export const healthUp = (currentPlayer: TMember): void => {
    currentPlayer.health += 1;
}

/**
 * дабл дамаг на оружие
 * (для предмета "ножовка)
 */
export const useKnife = (weapon: TWeapon): void => {
    weapon.isDoubleDmg = true 
}

/**
 * для пр
 * (для предмета "ножовка)
 */
export const useHandcuffs = (opponent: TMember): TMember => {
    return {
        ...opponent,
        isSkipping: true
    }
}
