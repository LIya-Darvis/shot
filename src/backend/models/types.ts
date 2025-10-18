

/**
 * price - на будущее (для магазина)
 */
export type Item = {
  id: number;
  name: string;
  price?: number;
}

export type Weapon = {
  charges: number[];
  isDoubleDmg: boolean;
}

export type Member = {
  name: string;
  health: number;
  inventory: Item[];
  isSkipping: 
}


// export enum ItemType {
//   HEALTHUP,
//   MAGNIFIER, // лупа
//   KNIFE,
//   HANDCUFFS, // наручники
//   BEER,
// }

// export type Item = {
//   itemType: ItemType;
// }

// export type Inventory = {
//   items: Item[];
// }

// export type Member = {
//   name: string;
//   health: number;
//   isDealer: boolean;
//   lockCounter: number;
//   inventory: Inventory;

// }

// export type GameStatus = {
//   isAcitve: boolean;
//   winner?: Member;
// };

// export type Opponets = {
//     currentMember: Member;
//     passiveMember: Member;
// }


