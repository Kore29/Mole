import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";
import "../styles.css";

function Dashboard() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleRefresh = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Mole</h1>
      <div className="container">
        <div className='items'>
          <h2>Items</h2>
          <ItemList className="item-list" refreshTrigger={refreshTrigger} />
        </div>
        <div className="item-form">
          <h2>Añadir Items</h2>
          <ItemForm onItemAdded={handleRefresh} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
