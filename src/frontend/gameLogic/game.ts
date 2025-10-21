import { TMember, TWeapon } from "../../backend";

export class Game {
    weapon: TWeapon;
    members: TMember[];
    stepCount: number;

    constructor(weapon: TWeapon, members: TMember[], stepCount: number) {
        this.weapon = weapon;
        this.members = members;
        this.stepCount = stepCount;
    }
}