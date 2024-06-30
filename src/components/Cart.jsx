import React, {useContext, useEffect, useState} from 'react'
import CartProduct from '../components/CartProduct'
import CartContext from '../cartContext/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const {cartProducts, setCartProducts} = useContext(CartContext)
  const [totalAmount , setTatalAmount] = useState(0)
  useEffect(() => {
    let Amount = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      Amount += cartProducts[i].quantity * cartProducts[i].price
    }
    setTatalAmount(Amount) 
  }, [cartProducts]);

  // decrese quantity
  function removeQuantity(val) {
    for (let i = 0; i < cartProducts.length; i++) {
      if(cartProducts[i].key ===val){
    // console.log("ho raha hai")

        let newCart = [...cartProducts];
        newCart[i].quantity = newCart[i].quantity - 1;
        // console.log(newCart)
        setCartProducts(newCart.filter(elem => elem.quantity !== 0))
        
      }
    }
    
  }
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

  // increse quantity
  function increseQuantity(val) {
    addToCartHandler(val)
  }

  return (
    <div className='flex flex-col gap-3 basis-[30%]'>
      <h3 className='text-2xl text-purple-600 font-bold'>Cart</h3>
        {
          cartProducts.length != 0 ?
          cartProducts.map(({img, name, price, quantity, key}, index) =>(
            <CartProduct img={img} name={name} price={price} quantity={quantity} ind={key} index={index} removeQuantity={removeQuantity} increseQuantity={increseQuantity}/>
          )) :(
            <p className='text-purple-600 text-3xl font-semibold text-center'>Add to Buy</p>
          )
        }

        <span className='text-purple-600 font-bold text-xl'>Total Amout:- <span className='text-black'>$ {totalAmount}</span></span>
        <Link to='checkout' className='px-3 py-2 rounded-2xl border-2 border-black bg-purple-700 text-white w-40 text-center font-bold'>Checkout</Link>
    </div>
  )
}

export default Cart