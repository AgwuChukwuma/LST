import { useState } from 'react';
import styles from '../styles/products.module.css';
import { useGetProductsQuery } from '../services/productsAPI';

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  discountPercentage: number;
  thumbnail: string;
}

const Products = () => {
  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);

  const { data, error, isLoading } = useGetProductsQuery({ limit, skip });

  const handleLoadMore = () => {
    setSkip(prev => prev + limit);
  };

  const products = data?.products || [];

  return (
    <div className={styles.app}>
      <main className={styles.mainContent}>
        <h2>Featured Products</h2>
        <h1>BESTSELLER PRODUCTS</h1>
        <p>Problems trying to resolve the conflict between</p>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching products</p>}

        <div className={styles.productGrid}>
          {products.map((product: Product) => (
            <div key={product.id} className={styles.productCards}>
              <img src={product.thumbnail} alt={product.title} />
              <div className={styles.productInf}>
                <h3>{product.title}</h3>
                <p>{product.brand}</p>
                <p>
                  <span className={styles.originalPrice}>${product.price}</span>{' '}
                  <span className={styles.discountedPrice}>
                    ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.loadMore} onClick={handleLoadMore}>
          LOAD MORE PRODUCTS
        </button>
      </main>
    </div>
  );
};

export default Products;
