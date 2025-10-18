import { ItemType } from "./classes";

export type Item = {
  itemType: ItemType;
}

export type Inventory = {
  items: Item[];
}

export type Member = {
  name: string;
  health: number;
  isDealer: boolean;
  lockCounter: number;
  inventory: Inventory;

}

export type GameStatus = {
  isAcitve: boolean;
  winner?: Member;
};

export type Opponets = {
    currentMember: Member;
    passiveMember: Member;
}


