import { useEffect, useMemo, useState } from 'react';

import PlayerCard from '../components/PlayerCard';
import { Box, ControlBar, Label, Loading, Radio } from '../components/styled';
import { ErrorMessage } from '../components/styled/Message';
import { fetchCards, isSuccessFetchCards } from '../lib/api';
import { TCollection, TPlayer } from '../types';

export const Collection = () => {
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState<TCollection>([]);
  const [sortKey, setSortKey] = useState<keyof TPlayer>('lastname');
  const [sortType, setSortType] = useState<'asc' | 'des'>('asc');

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

  const sortedCollection = useMemo(() => {
    return [...collection].sort((c1, c2) => {
      const v1 = c1.player[sortKey],
        v2 = c2.player[sortKey];
      return v1.localeCompare(v2) * (sortType === 'asc' ? 1 : -1);
    });
  }, [collection, sortKey, sortType]);

  /**
   * Step 1: Render the card
   */
  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  return (
    <Box padding="md" gap="lg">
      <ControlBar justify="space-between">
        <Box vertical gap="lg">
          <Label>Sort By:</Label>
          <Radio
            type="radio"
            value="lastname"
            id="lastname"
            checked={sortKey === 'lastname'}
            onChange={() => setSortKey('lastname')}
          />
          <label htmlFor="lastname">Last Name</label>
          <Radio
            type="radio"
            value="firstname"
            id="firstname"
            checked={sortKey === 'firstname'}
            onChange={() => setSortKey('firstname')}
          />
          <label htmlFor="firstname">First Name</label>
          <Radio
            type="radio"
            value="birthday"
            id="birthday"
            checked={sortKey === 'birthday'}
            onChange={() => setSortKey('birthday')}
          />
          <label htmlFor="birthday">Birthday</label>
        </Box>
        <Box vertical gap="lg">
          <Radio
            type="radio"
            value="asc"
            id="asc"
            checked={sortType === 'asc'}
            onChange={() => setSortType('asc')}
          />
          <label htmlFor="asc">A-Z</label>
          <Radio
            type="radio"
            value="des"
            id="des"
            checked={sortType === 'des'}
            onChange={() => setSortType('des')}
          />
          <label htmlFor="des">Z-A</label>
        </Box>
      </ControlBar>
      <Box vertical wrap justify="start" gap="lg">
        {sortedCollection.map((card) => (
          <PlayerCard key={card.id} card={card} />
        ))}
      </Box>
    </Box>
  );
};
