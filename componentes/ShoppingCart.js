import React from 'react'
import { useAppContext } from './StateWrapper'
import Product from './Product'
import style from '../styles/shoppingcart.module.css'

export default function ShoppingCart() {
    const cart = useAppContext();

    function handleCloseCart(){
        cart.closeCart()
    }
  return (
    <div className={style.shoppingCart} style={{display: cart.isOpen? 'block' : 'none'}}>
        <button onClick={handleCloseCart}  className={style.close}>Close</button>

        {cart.items.length ===0 ? <div className={style.empty}>Cart is Empty</div>
        
        :  <>
         <h3>Your items</h3> 

        <div>
            {cart.items.map(item => 
            <Product
                key={item.id}
                item={item}
                showAs= "ListItem"
                qty={item.qty}
            />)}
        </div>
            </>}
       

      
    </div>
  )
}
