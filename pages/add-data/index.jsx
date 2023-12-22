// CreateProductPage.js

import React from 'react';
import ProductForm from './ProductForm';
import axios from 'axios';

const CreateProductPage = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('/api/products', values);
      
  
      if (response.status === 200 || response.status === 201) {
        // console.log('Product added successfully!');
        alert('Product added successfully!');
        // Reset the form or redirect to another page if needed
      } else {
        console.error('Failed to add product.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };
  

  return (
    <div className='pt-28'>
      <h1>Create Product</h1>
      <div className='flex flex-col items-center justify-center mx-auto min-h-full'>
        <ProductForm onSubmit={handleSubmit} />
      </div>
      
    </div>
  );
};

export default CreateProductPage;
