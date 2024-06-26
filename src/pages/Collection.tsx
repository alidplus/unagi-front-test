import { useEffect, useState } from 'react';

import { fetchCollection } from '../lib/collection';

import { getCardImage } from '../lib/url';
import { TCollection } from '../types';
import './Collection.css';
import { formatDate } from '../lib/formatter';
import { LazyImage } from '../components/LazyImage';

export const Collection = () => {
  const [collection, setCollection] = useState<TCollection>([])

  useEffect(() => {
    // fetch data
    const data = fetchCollection();

    // normalize data
    const collection = data.map(card => ({
      ...card,
      player: {
        ...card.player,
        image: getCardImage(card)
      }
    }))

    // set collection
    setCollection(collection)
  }, [])

  /**
   * Step 1: Render the card
   */
  return (
    <div className='collection'>
      {collection.map(card => {
        const player = card.player,
          fullName = `${player.firstname} ${player.lastname}`,
          dob = formatDate(player.birthday)
          
        return (
          <div className='card' key={card.id}>
            <div className="aspect-ratio">
              <LazyImage className='card-image' src={card.player.image} alt={fullName}  />
            </div>
            <h1 className='card-title'>{fullName}</h1>
            <div className='card-content'>
              <span className='card-tag'>DOB: {dob}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
};
