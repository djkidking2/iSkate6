import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import data from './Data'; // Import data from Data.js

// Styled components for UI elements

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Navigation = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: white;
    margin: 0 10px;
  }

  input[type="text"] {
    padding: 5px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    a {
      margin: 5px 0;
    }
  }
`;

const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d84315;
  }
`;

const HeartIcon = styled.span`
  color: #ff0000;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const CartIcon = styled.span`
  color: #333;
  cursor: pointer;
  font-size: 1.5rem;
  position: absolute;
  top: 8px;
  right: 40px;
`;

const Shop = () => {
  const [favorites, setFavorites] = useState([]); // Store favorite items
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [cart, setCart] = useState([]); // State for shopping cart

  useEffect(() => {
    // Set the state with the imported products data
    setProducts(data); // Use the 'data' variable, not 'response'
  }, []);

  // Function to handle adding items to the shopping cart
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setCart([...cart, product]);
    }
  };

  // Function to handle adding items to favorites
  const addToFavorites = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product && !favorites.some((fav) => fav.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  // Function to handle searching for products
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <HeroSection>
        <h2>New Hot Items</h2>
      </HeroSection>
      <Navigation>
        {/* Add your navigation links here */}
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
        <a href="/cart">
          <CartIcon>
            <FaShoppingCart />
          </CartIcon>
          Cart ({cart.length})
        </a>
        <a href="/checkout">Checkout</a>
        <a href="/account">My Account</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
        <a href="/faq">FAQ</a>
        <a href="/shipping-returns">Shipping & Returns</a>
        <a href="/blog">Blog</a>
        <a href="/promotions">Promotions</a>
        <a href="/reviews">Customer Reviews</a>
        <a href="/privacy-policy">Privacy Policy</a>
        
<a href="/sign-in">Sign In/Register</a>
        <a href="/customer-support">Customer Support</a>
      </Navigation>
      <h1>Shop</h1>
      <ShopContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <HeartIcon onClick={() => addToFavorites(product.id)}>
              <FaHeart />
            </HeartIcon>
            <ProductImage src={product.imgUrl} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton onClick={() => addToCart(product.id)}>Add to Cart</BuyButton>
          </ProductCard>
        ))}
      </ShopContainer>
      {/* Display favorite items */}
      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id}>{favorite.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Shop;




