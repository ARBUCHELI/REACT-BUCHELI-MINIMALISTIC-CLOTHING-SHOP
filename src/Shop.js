import React, { useState, useEffect } from 'react';
import { get } from './fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }
  }, [items, selectedCategory]);

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1 style={{fontFamily: 'impact', color: '#451e3e'}}>Clothes and Accessories</h1>
      <nav>
        {categories.map((category) => (
          <button style={{color: '#c0c2ce', fontFamily: "impact", fontSize: '1.2em', marginRight: '7px', padding: '0.1em 0.5em 0.1em 0.5em', backgroundColor: '#451e3e', border: 'solid #051e3e 2px', borderRadius: '5px'}} key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2 style={{fontFamily: 'impact'}}>{selectedCategory}</h2>
      <ul style={{fontWeight: 'bolder'}}>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}