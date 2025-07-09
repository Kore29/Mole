import React, { useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [refresh, setRefresh] = useState(0);

  const triggerRefresh = () => {
    setRefresh(prev => prev + 1);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ItemList refreshTrigger={refresh} onRefreshNeeded={triggerRefresh} />
    </div>
  );
}

export default App;