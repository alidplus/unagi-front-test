import { useEffect, useState } from 'react';

import PlayerCard from '../components/PlayerCard';
import { Box, Loading } from '../components/styled';
import { TCollection } from '../types';
import { fetchCards, isSuccessFetchCards } from '../lib/api';
import { ErrorMessage } from '../components/styled/Message';

export const Collection = () => {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState<TCollection>([]);

  useEffect(() => {
    async function asyncFetch() {
      const res = await fetchCards();
      console.log('rrr', { res });

      if (isSuccessFetchCards(res)) {
        setCollection(res.cards);
      } else {
        setError(res.error);
      }
      setLoading(false);
    }
    asyncFetch();
  }, []);

  /**
   * Step 1: Render the card
   */
  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  return (
    <Box vertical wrap justify="start" padding="md" gap="lg">
      {collection.map((card) => (
        <PlayerCard key={card.id} card={card} />
      ))}
    </Box>
  );
};
