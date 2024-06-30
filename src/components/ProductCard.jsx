import React from 'react'

function ProductCard({elm , index,  addToCartHandler}) {
  
  const {name, img, price, key} = elm;
 
  return (
    <div className='w-52 h-80 border-2 rounded-lg bg-purple-400' key={name}>
        <div className="img border-b-2">
            <img className='w-full bg-white h-48 rounded-lg' src={elm.img}  alt="img" />
        </div>
        <div>
            <p className='text-xl font-semibold '>{elm.name}</p>
            <p className='text-base font-bold text-right mx-3'>$ {elm.price}</p>
            <button className='rounded-lg border-2 px-3 py-1 float-right mx-3 bg-black text-purple-500 text-base font-bold mt-2'  onClick={() => addToCartHandler(elm.key)} >Add to Cart</button>
        </div>
    </div>
  
  )
}

export default ProductCard