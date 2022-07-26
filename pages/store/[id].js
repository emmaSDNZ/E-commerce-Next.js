import React from 'react'
import Layaout from '../../componentes/Layaout'
import Product from '../../componentes/Product'
import { getItemData, getPathsFromIds } from '../../lib/utils'

export default function ProductPage({productInfo}) {
  return (
    <Layaout>
      <Product item={productInfo} showAs="Page" />  
    </Layaout>
  )
}

export async function getStaticPaths(){
    const paths = await getPathsFromIds()
    
    return {
        paths: paths,
        fallback: false, 

    }
}

export async function getStaticProps({params}){
    const id = params.id;
    const product = await getItemData(id)

    return {
        props:{
            productInfo: product
        }
    }

}
