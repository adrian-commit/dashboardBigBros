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
          <main> <h2>Productos</h2> </main>
         {!products
                  ? "cargando"
                  : products.map((product, index) => {
                      return (
                        
                        <React.Fragment key={product.id}>
                          <div>
                          <main> <h4>********************************</h4> </main>
                            <h3> Tipo: </h3>
                            <div key={index.id}>{product.name}</div>
                            <h4> Precio: </h4>
                            <div key={index.id}>{product.price}</div>
                            <h4> Cantidad: </h4>
                            <div key={index.id}>{product.amount}</div>
                          </div>
                        </React.Fragment>
                      );
                    })}   
        </div>
    );
}

export default Home;
