import { TCard, TPlayer } from '../types';

export function getCardImage(card: TCard): string {
  return (
    card.player.image ??
    `https://images.fotmob.com/image_resources/playerimages/${card.id}.png`
  );
}
