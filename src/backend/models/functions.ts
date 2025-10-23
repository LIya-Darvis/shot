import { TMember, TWeapon } from './types';


/**
 * выстрел  
 * (с учетом двойного урона)
 */
export const makeShot = (opponent: TMember, weapon: TWeapon): TMember => {
    return {
        ...opponent,
        health: opponent.health - (weapon.isDoubleDmg ? weapon.charges.pop() * 2 : weapon.charges.pop())
    }
}

/**
 * выброс следующего патрона 
 * (для предмета "сигареты")
 */
export const dropCharge = (weapon: TWeapon): TWeapon => {
    weapon.charges.pop()
    return {
        ...weapon,
    };
}

/**
 * узнать какой патрон следующий
 * (для предмета "батарейка для рации")
 */
export const chargeMessage = (weapon: TWeapon): number => {
    console.log("Следующий патрон:", weapon.charges[0]);
    return weapon.charges[weapon.charges.length - 1];
}

/**
 * хилл/анлак (+2 или -1)
 * (для предмета "зараженная вода")
 */
export const drinkWater = (currentPlayer: TMember): TMember => {
    const healthPoints = [-1, 2];
    return {
        ...currentPlayer,
        health: currentPlayer.health += healthPoints[Math.floor(Math.random() * 2)]
    }
}

/**
 * обычный хилл + 1
 * (для предмета "бинты")
 */
export const healthUp = (currentPlayer: TMember): TMember => {
    return {
        ...currentPlayer,
        health: currentPlayer.health += 1
    };
}

/**
 * дабл дамаг на оружие
 * (для предмета "ножовка)
 */
export const useKnife = (weapon: TWeapon): TWeapon => {
    return {
        ...weapon,
        isDoubleDmg: true
    }
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
