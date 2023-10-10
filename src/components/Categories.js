import React from 'react';
import styled from 'styled-components';

// Styled components for category items
const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
`;

const CategoryItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ddd;
  }
`;

const Categories = () => {
  // Sample category data
  const categories = [
    'Clothing',
    'Electronics',
    'Accessories',
    'Home & Living',
    'Beauty & Personal Care',
    'Toys & Games',
  ];

  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryItem key={index}>{category}</CategoryItem>
      ))}
    </CategoryContainer>
  );
};

export default Categories;
