import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "react-qr-code";

function App() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Fetch items from API
    axios.get("http://localhost:5151/items/show")
      .then(response => {
        console.log(response); 
        setItems(response.data); 
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Select an Item</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {items.map((item) => (
          <button key={item._id} onClick={() => handleItemClick(item)}>
            {item.itemName} - ₹{item.itemValue}
          </button>
        ))}
      </div>

      {selectedItem && (
        <div style={{ marginTop: "20px" }}>
          <h2>QR Code for {selectedItem.itemName}</h2>
          <QRCode value={`upi://pay?pa=upi_id@bank&pn=${selectedItem.itemName}&am=${selectedItem.itemValue}`} size={200} />
        </div>
      )}
    </div>
  );
}

export default App;
