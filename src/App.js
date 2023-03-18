import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import UpdateProduct from './components/UpdateProduct'
import Footer from './components/Footer'
import About from './components/About'


function App() {

  const dbUrl = 'http://localhost:5000/products/';
  const [products, setProducts] = useState ([])
  const [productToUpdate, setProductToUpdate] = useState ([])
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showUpdateProduct, setShowUpdateProduct] = useState(false)

useEffect(()=>  {
    const getProducts = async () => {
      setProducts(await fetchProducts())
    }
    getProducts()
},[])

const fetchProducts = async () => {
  const res = await fetch(dbUrl)
  return res.json()
}

//Delete
const deleteProduct = async (id) => {
  await fetch(dbUrl + id, {
    method: 'DELETE',
  })
  setProducts(await fetchProducts())
}

//updateProduct
const updateProduct = async (id, task) => {
  await fetch(dbUrl + id,{
      method: 'PUT',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
  })
  setProducts(await fetchProducts())
  setShowUpdateProduct(!showUpdateProduct);
}

//Add
const addProduct =  async (task) => {
  await fetch(dbUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task)
  })
  setProducts(await fetchProducts())
  setShowAddProduct(!showAddProduct);
}

  return (
    <BrowserRouter>
        <Header onAdd={
            () => {
              setShowAddProduct(true);
              setShowUpdateProduct(false)
              }
          }
                showAdd={showAddProduct}
        />
        
        { 
          showAddProduct && <AddProduct onAdd={addProduct}/> 
        }

        { 
          showUpdateProduct && <UpdateProduct productToUpdate={productToUpdate} onUpdate={updateProduct} showUpdateProduct={showUpdateProduct} /> 
        }

        {
          products.length && (
            <Routes>
                <Route 
                  path="/products"
                  element = {
                    <ManyProducts 
                      products={products}
                      onDeleteMany={deleteProduct}
                      onUpdateMany={
                          (id)=>{
                            setProductToUpdate(products[id-1]);
                            setShowAddProduct(false);
                            setShowUpdateProduct(true)
                          }
                      } />
                  }
                />
            </Routes>
            )
        }
        
        <Routes>
          <Route 
            path='/'
            element={<About/>}
          />
        </Routes>
        
        <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
