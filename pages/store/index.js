import Layaout from "../../componentes/Layaout";
import { getItems } from "../../services/itemsService";
import Product from "../../componentes/Product";
import styleItems from '../../styles/product.module.css'

export default function Index({products}){
    return (
        <Layaout title="Store">
            <h1>STORE</h1>
            <div className={styleItems.items}>
                 {products && products.map((item)=>
            
                <Product 
                    key={item.id} 
                    item={item} 
                    showAs="Default"/>
                )}

            </div>
           
            
        </Layaout>
    )
}

export async function getStaticProps(){
    const res = await getItems()
  
    return {
      props: {
        products: res,
      }
    }
  }