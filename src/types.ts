export interface TPlayer {
  firstname: string;
  lastname: string;
  birthday: string;
  image: string;
}

export interface TCard {
  id: number;
  player: TPlayer;
}

export type TCollection = TCard[];
