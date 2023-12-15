// ProductForm.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Product.module.css'

const ProductFormSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
    image: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    slug: Yup.string().required('Required'),
    thumbnail: Yup.string().required('Required'),
    originalPrice: Yup.number().required('Required'),
    brand: Yup.string().required('Required'),
    rating: Yup.number().required('Required'),
    categories: Yup.string(),
  // Add validation for other fields as needed
});

const ProductForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    price: '',
    image: '',
    description: '',
    slug: '',
    thumbnail: '',
    originalPrice: '',
    brand: '',
    rating: '',
    categories: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ProductFormSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={styles.fieldInput} />
          <ErrorMessage name="name" component="div" className={styles.errorMessage} />
        </div>         
        
        <div className={styles.formGroup}>
          <label className={styles.formLabel}  htmlFor="price"  > Price:</label>
          <Field type="number" id="price" name="price" className={styles.fieldInput}/>
          <ErrorMessage name="price" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="image">Image:</label>
            <Field type="text" id="image" name="image"className={styles.fieldInput} />
            <ErrorMessage name="image" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="description">Description:</label>
            <Field type="text" id="description"className={styles.fieldInput} name="description" />
            <ErrorMessage name="description" component="div" className={styles.errorMessage}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="slug">Slug:</label>
            <Field type="text" id="slug" name="slug" className={styles.fieldInput} />
            <ErrorMessage name="slug" component="div" className={styles.errorMessage}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="thumbnail">Thumbnail:</label>
            <Field type="text" id="thumbnail"className={styles.fieldInput} name="thumbnail" />
            <ErrorMessage name="thumbnail" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="originalPrice">Original Price:</label>
            <Field type="number" id="originalPrice"  className={styles.fieldInput}name="originalPrice" />
            <ErrorMessage name="originalPrice" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="brand">Brand:</label>
            <Field type="text" id="brand" name="brand"  className={styles.fieldInput}/>
            <ErrorMessage name="brand" component="div" className={styles.errorMessage}/>
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="rating">Rating:</label>
            <Field type="number" id="rating" name="rating"className={styles.fieldInput} />
            <ErrorMessage name="rating" component="div"className={styles.errorMessage} />
        </div>

        <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="categories">categories:</label>
            <Field type="text" id="categories" name="categories" className={styles.fieldInput} />
            <ErrorMessage name="categories" component="div"className={styles.errorMessage} />
        </div>


        {/* Add similar blocks for other fields with their respective labels, ids, and names */}

        <div>
          <button type="submit" className={styles.submitButton} >Add Product</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ProductForm;
