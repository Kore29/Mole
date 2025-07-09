import React from 'react';

function ItemCard({ item }) {
  return (
    <div class="item-card">
      <h3>{item.name}</h3>
      <p>Categoría: {item.category}</p>
      <p>Precio: {item.price} €</p>
      <p>Stock: {item.stock}</p>
      {item.imageUrl && (
        <img src={item.imageUrl} alt={item.name} style={{ width: '100%' }} />
      )}
    </div>
  );
}

export default ItemCard;
