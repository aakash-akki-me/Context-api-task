import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import ProductsDetails from '../../public/ProductsDetails'
import CartContext from '../cartContext/CartContext';

function Shop() {

  const {cartProducts, setCartProducts} = useContext(CartContext)
// add item to cart 
function addToCartHandler(num){
    
  for (let i = 0; i < cartProducts.length; i++) {
    if(cartProducts[i].key === num){
      let newCart = [...cartProducts];
      newCart[i].quantity = newCart[i].quantity + 1;
      setCartProducts(newCart)
      
      // console.log(newCart);
      
      return
    }
  }
  setCartProducts(prevCart => [...prevCart,ProductsDetails[num - 1]])
  // console.log(cartProducts);
  
}
  // console.log(cartProducts)

  return (
    <div className='flex gap-2 flex-wrap basis-[70%] min-w-[350px]'>
      {
        
          
        ProductsDetails.map((elm, index) => (
            <ProductCard elm={elm} index={index} addToCartHandler={addToCartHandler}  />
          ))
          
      }
      
        
    </div>
  )
}

export default Shop