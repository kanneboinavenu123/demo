import React,{ useState } from "react";

function Work() {
  const [search, setSearch] = useState("");
  const fruits = [  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Custard Apple",
  "Date",
  "Dragonfruit",
  "Durian",
  "Fig",
  "Gooseberry",
  "Grapes",
  "Guava",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Lime",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Melon",
  "Mulberry",
  "Orange",
  "Papaya",
  "Passion Fruit",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Raspberry",
  "Starfruit",
  "Strawberry",
  "Tamarind",
  "Watermelon"];

  // step 4
  const results = fruits.filter(fruit =>
    fruit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* step 1 */}
      <input 
        type="text" 
        placeholder="Search..." 
        value={search}
        onChange={e => setSearch(e.target.value)} 
      />
      <ul>
        {results.map((fruit, i) => (
        <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>

  );
}

export default Work;
