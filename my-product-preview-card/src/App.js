import React from 'react';
import ProductCard from './ProductCard';

const product = {
    name: "Enchanted Elegance",
    description: "Indulge in the essence of pure sophistication with Enchanted Elegance. This exquisite perfume captivates the senses with a harmonious blend of floral and woody notes, creating an aura of timeless elegance. Perfect for every occasion, Enchanted Elegance is the ultimate accessory to elevate your presence and leave an unforgettable impression.",
    oldPrice: "132",
    price: "99.99",
    
};

const containerStyle = {
  display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffebcd',
}

function App() {
    return (
        <div style={containerStyle}>
            <ProductCard product={product} />
        </div>
    );
}

export default App;
