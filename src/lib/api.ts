import { TCard, TCollection, TPlayer } from '../types';
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

interface SuccessSaveCard {
  player: TPlayer;
}

interface FailedSaveCard {
  error: string;
}

export async function saveCard(
  data: TPlayer
): Promise<SuccessSaveCard | FailedSaveCard> {
  try {
    const res = await fetch(API_BASE + '/cards', {
      body: JSON.stringify({ player: data }),
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const card: TCard = await res.json();

    console.log({ card });

    return card;
  } catch (e: unknown) {
    return { error: getErrorMessage(e) };
  }
}

export function isSuccessSaveCard(
  res: SuccessSaveCard | FailedSaveCard
): res is SuccessSaveCard {
  return !!('player' in res);
}
