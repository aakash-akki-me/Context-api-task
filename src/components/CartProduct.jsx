import React from 'react'

function CartProduct({img, ind, name, price, quantity, index, removeQuantity,increseQuantity}) {
  // console.log(img, ind, name, price, quantity, removeQuantity,increseQuantity)
  return (
    <div className='w-96 h-24 bg-white border-2 border-purple-700 rounded-2xl flex justify-between items-center text-white'>
        <div className="img w-28 h-full p-2 bg-white rounded-2xl border-r-2 " key={name}>
            <img src={img} className='w-36 h-full rounded-2xl' alt="product Img" />
        </div>
        <div className="details ">
            <p className='text-purple-600 text-xl font-semibold'>{name}</p>
            <p  className='text-purple-600 text-xl font-semibold'>$ {price}</p>
        </div>
        <div className="quantity flex flex-col mr-3">
            <button className='bg-purple-500 w-5 text-xl font-bold' onClick={() => increseQuantity(ind)}>+</button>
            <span  className='bg-white text-purple-600 w-5 text-xl font-bold text-center'>{quantity}</span>
            <button className='bg-purple-500 w-5 text-xl font-bold' onClick={() => removeQuantity(ind)}>-</button>
        </div>
    </div>
  )
}

export default CartProduct