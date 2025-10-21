/**
 * price - на будущее (для магазина)
 */
export type TItem = {
  id: number;
  name: string;
  price?: number;
}

export type TWeapon = {
  charges: number[];
  isDoubleDmg: boolean;
}

export type TMember = {
  name: string;
  maxHealth: number;
  health: number;
  inventory: TItem[];
  isSkipping: boolean;
}

export enum TItemType {
  KNIFE,
  HANDCUFFS, // наручники
  BATTERY, // для рации
  WATER,
  CIGARETTES,
  BANDAGES, // бинты
}

export type TStep = {
  weapon: TWeapon;
  currentPlayer: TMember;
  opponent: TMember;
  currentItem: TItem;
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


