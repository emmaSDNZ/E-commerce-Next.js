import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { convertToPath } from '../lib/utils'
import AddButton from './addButton'
import style from '../styles/product.module.css'

export default function Product({item, showAs, qty = 0}) {
  
    if(showAs === "Page"){
        return (
            <div className={style.page}>
                <div className={style.image}>
                <Image 
                    src={item.data.imag}
                    alt={item.data.description}
                    width={800}
                    height={800}/>
                </div>

                <div className={style.info}>
                    <div>
                        <h2>{item.data.title}</h2>
                    </div>
                    <div className={style.price}>${item.data.price}</div>
                    <div>{item.data.description}</div>
                    <div><AddButton item={item} /></div>
                </div>
            </div>
        )
    }
    if(showAs === "ListItem"){
        return(
            <div className={style.listItem}>
                <div>
                <Image 
                    src={item.imag}
                    alt={item.description}
                    width={100}
                    height={100}
                    />
                </div>
                <div>
                    <div><h3>{item.title}</h3></div>
                    <div>{item.price}</div>
                    {qty === 0 ? '' : <div>{qty} units</div> }
                    {qty === 0 ? '' :<div>Subtotal${qty * item.price}</div>}
                   
                </div>
            </div>
        )
    }
    return (
        <div className={style.item}>
            <div>
                <Link href={`/store/${convertToPath(item.title)}`}> 
                <a>
                    <Image 
                    src={item.imag}
                    alt={item.description}
                    width={500}
                    height={500}
                    />
                </a>
                </Link>
            </div>

            <div>
                <h3>
                <Link href={`/store/url-componente`}> 
                    <a>{item.title}</a>
                </Link>
                </h3>
            </div>

            <div>${item.price}</div>
            <div><AddButton item={item}/></div>
        </div>
    )
  
}
