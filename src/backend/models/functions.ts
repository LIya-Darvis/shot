import { TMember, TWeapon } from './types';

/**
 * выстрел  
 * (с учетом двойного урона)
 */
export const makeShot = (target: TMember, weapon: TWeapon): {newTarget: TMember, newWeapon: TWeapon} => {
    const newCharges = [...weapon.charges];
    const charge = newCharges.pop() || 0;

    const damage = weapon.isDoubleDmg ? charge * 2 : charge;
    
    return {
        newTarget: {
            ...target,
            health: target.health - damage
        },
        newWeapon: {
            ...weapon,
            charges: newCharges,
            isDoubleDmg: false
        }
    }
}

/**
 * выброс следующего патрона 
 * (для предмета "сигареты")
 */
export const dropCharge = (weapon: TWeapon): TWeapon => {
    const newCharges = [...weapon.charges];
    newCharges.pop()
    return {
        ...weapon,
        charges: newCharges
    };
}

/**
 * узнать какой патрон следующий
 * (для предмета "батарейка для рации")
 */
export const chargeMessage = (weapon: TWeapon): number => {
    console.log("Следующий патрон:", weapon.charges[weapon.charges.length - 1]);
    return weapon.charges[weapon.charges.length - 1];
}

/**
 * хилл/анлак (+2 или -1)
 * (для предмета "зараженная вода")
 */
export const drinkWater = (currentPlayer: TMember): TMember => {
    const healthPoints = [-1, 2];
    const healthUp = currentPlayer.health + healthPoints[Math.floor(Math.random() * 2)]
    return {
        ...currentPlayer,
        health: currentPlayer.maxHealth < healthUp ? currentPlayer.maxHealth : healthUp
    }
}

/**
 * обычный хилл + 1
 * (для предмета "бинты")
 */
export const healthUp = (currentPlayer: TMember): TMember => {
    const healthPlus = ++currentPlayer.health;
    return {
        ...currentPlayer,
        health: currentPlayer.maxHealth < healthPlus ? currentPlayer.maxHealth : healthPlus
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
