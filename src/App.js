import { useState, useEffect } from "react";
import List from "./List";

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemId, setItemId] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const listItems = await response.json();
        const itemNames = listItems.map((item) => item.name);
        const itemIds = listItems.map((item) => item.id);

        setItems(listItems);
        setItemName(itemNames);
        setItemId(itemIds);
      } catch (err) {
        console.log(err.stack);
      }
    };


    fetchItems();
  }, []);

  return (
    <div className="App">
      <List items={items} />
    </div>
  );
}

export default App;
