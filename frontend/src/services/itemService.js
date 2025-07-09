const API_URL = 'http://localhost:5000/items';

export const getItems = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createItem = async (item) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  });
  return res.json();
};

export const deleteItem = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  return res.json();
};