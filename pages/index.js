
import Layaout from '../componentes/Layaout'
import Product from '../componentes/Product'
import { getLatestItes } from '../services/itemsService'
import style from '../styles/Home.module.css'
import styleProduct from '../styles/product.module.css'



export default function Home({items}) {
  return (
   <Layaout title ='Home'>
    <div>
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the summer 2022 Collection</h2>
            <p>
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
            </p>
          </div>
        </div>

      </div>
    </div>
    <h3>Latest Product</h3>
    <div className={styleProduct.items}>
      {items && 
      items.map((item)=>(
        <Product key={item.id} item={item} showAs="item"/>
      ))}
    </div>
   </Layaout>
  )
}

export async function getStaticProps(){
  const res= await getLatestItes()

  return {
    props: {
      items: res
    }
  }
}


