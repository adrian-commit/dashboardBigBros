import React,{useState, useEffect} from 'react';

const Home = () => {
    const url= 'http://localhost:3000/api/products/'

    const [products, setProducts]= useState([]);

    const productsFetch= async() => {
        const resp = await fetch(url)
        const respJson = await resp.json()
        setProducts(respJson.products)
         }
        useEffect(() => {
            productsFetch()
            ;
        }, []);
       
     console.log(products)
     console.log(setProducts)
    return (
        <div>
         {!products
                  ? "cargando"
                  : products.map((product, index) => {
                      return (
                        <React.Fragment key={product.id}>
                          <div>
                            <div key={index.id}>{product.name}</div>
                            <div key={index.id}>{product.price}</div>
                            <div key={index.id}>{product.description}</div>
                            <div key={index.id}>{product.amount}</div>
                          </div>
                        </React.Fragment>
                      );
                    })}   
        </div>
    );
}

export default Home;
