import { TCollection } from '../types';
import { API_BASE } from '../constants';
import { getCardImage } from './url';
import { getErrorMessage } from './errors';

interface SuccessFetchCards {
  cards: TCollection;
}

interface FailedFetchCards {
  error: string;
}

export async function fetchCards(): Promise<
  SuccessFetchCards | FailedFetchCards
> {
  try {
    const res = await fetch(API_BASE + '/cards');
    const data: TCollection = await res.json();

    const cards = data.map((card) => ({
      ...card,
      player: {
        ...card.player,
        image: getCardImage(card),
      },
    }));

    return { cards };
  } catch (e: unknown) {
    return { error: getErrorMessage(e) };
  }
}

export function isSuccessFetchCards(
  res: SuccessFetchCards | FailedFetchCards
): res is SuccessFetchCards {
  return !!('cards' in res);
}
