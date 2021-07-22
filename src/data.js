// You don't need to look at this, but you can if you want!
//
// In this modele, we use some functions like Math.random(), 
// Math.floor(), and Array.from() to generate some fake data.
// When building user interfaces, it can be helpful to 
// mock out simplified versions of the data that our code
// will eventually fetch from backend servers

const exportedVariable = {
    "/categories": ["Shirts", "Pants", "Shoes", "Accessories"],
    "/items?category=Shirts": ["T-Shirts", "Casual", "Formal", "Athletic", "Long-sleeve T-Shirts"],
    "/items?category=Pants": ["Long Pants", "Sweat Pants", "Shorts", "Swimwear", "Elegant"],
    "/items?category=Shoes": ["Athletic", "Professional", "Casual", "Walking", "Hiking"],
    "/items?category=Accessories": ["Hats", "Wallets", "Belts", "Sunglasses", "Watches"]
  };

export default exportedVariable;