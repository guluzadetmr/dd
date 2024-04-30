// import React, { useEffect, useState } from 'react'
// import ProductCard from '../../Components/Cards/ProductCard'
// import axios from 'axios'
// import styles from "./Home.module.css";
// import Button from '../../Components/Buttons/Button'



// const Home = () => {


//     const [products, setProducts] = useState([]);
//    const getProducts  = () => { 
//     axios.get('https://dummyjson.com/products/category/smartphones')
//         .then(res => {
//             setProducts(res.data.products);
//         });
//    } ;
    

//   return (
//     <div className={styles.card}>
//       {products.map(item => <ProductCard item= {item} />)}
//       <Button text='Click' onclick={getProducts} />
//     </div>
//   );
// };

// export default Home
import React from 'react'
import ProductCard from "../../Components/Cards/ProductCard"
const Home = () => {
  return (
    <div>
      <ProductCard />
    </div>
  )
}

export default Home