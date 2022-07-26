import React from 'react'
import style from '../styles/addbutton.module.css'
import { useAppContext } from './StateWrapper'

export default function addButton({item}) {
   
    const cart = useAppContext()

    function handleClick(){
        cart.addItemToCart(item)
    }
  return (
    <button className={style.button} onClick={handleClick}>Add to Cart</button>
  )
}
