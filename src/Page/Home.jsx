import React, { useContext } from 'react'
import CartContext from '../cartContext/CartContext'
import ProductsDetails from '../../public/ProductsDetails'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
function Home() {
    // const value  = useContext(CartContext)
    const {cartProducts, setCartProducts} = useContext(CartContext);
    // console.log(cartProducts, setCartProducts)


  return (
    <div className='flex mx-5'>
        <Shop cartProducts={ProductsDetails}  />
        <Cart cartProducts={cartProducts}   /> 
        </div>
  )
}

export default Home