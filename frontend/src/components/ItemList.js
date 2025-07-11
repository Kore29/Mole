import React, { useEffect, useState } from 'react';
import { getItems } from '../services/itemService';
import ItemCard from './ItemCard';

function ItemList({ refreshTrigger }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(setItems);
  }, [refreshTrigger]);

  if (items.length === 0) return <p>No hay productos.</p>;

  return (
    <>
      <div className='item-list'>
        {items.map(item => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

export default ItemList;