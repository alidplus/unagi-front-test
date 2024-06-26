import { memo, useMemo } from 'react';
import { LazyImage } from '../components/LazyImage';
import { formatDate } from '../lib/formatter';
import { TCard } from '../types';
import { Box, Card, Tag, Title } from './styled';

interface RenderPlayerCardProps {
  card: TCard;
}

export function RenderPlayerCard({ card }: RenderPlayerCardProps) {
  const { fullName, dob, imageUrl } = useMemo(() => {
    const player = card.player,
      fullName = `${player.firstname} ${player.lastname}`,
      dob = formatDate(player.birthday),
      imageUrl = player.image;

    return {
      fullName,
      dob,
      imageUrl,
    };
  }, [card]);

  return (
    <Card hoverable>
      <div className="aspect-ratio">
        <LazyImage className="card-image" src={imageUrl} alt={fullName} />
      </div>
      <Title>{fullName}</Title>
      <Box vertical justify="center">
        <Tag>DOB: {dob}</Tag>
      </Box>
    </Card>
  );
}

const CardsAreEqual = (
  props1: RenderPlayerCardProps,
  props2: RenderPlayerCardProps
) => props1.card.id === props2.card.id;

const PlayerCard = memo(RenderPlayerCard, CardsAreEqual);

export default PlayerCard;
