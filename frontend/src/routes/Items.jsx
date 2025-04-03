import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedItemIdAtom, upiLinkSelector } from "../atoms.js";

function Items() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useRecoilState(selectedItemIdAtom);
  
    useEffect(() => {
      async function fetchItems() {
        try {
          const response = await axios.get("http://localhost:5151/api/items");
          setItems(response.data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      }
      fetchItems();
    }, []);
  
    return (
      <div className="flex flex-wrap gap-4 p-4">
        {items.length > 0 ? (
          items.map((item) => (
            <button
              key={item.id}
              className={`p-2 border ${
                selectedItem === item.id ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedItem(item.id)}
            >
              {item.name} - ₹{item.price}
            </button>
          ))
        ) : (
          <p>Loading items...</p>
        )}
      </div>
    );
  }
  
  export default Items;