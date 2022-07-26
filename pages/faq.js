import Layaout from "../componentes/Layaout";
import style from '../styles/faq.module.css'

export default function fqa (){
    return (
        <Layaout title="FAQ">
           <div className={style.faq}>
           <h2>FAQ</h2>
            <div>
                <h3>Do you ship internationally?</h3>
                <p>
                    Yes, we ship internationlly. Make sure to sure to enter your entire 
                    international address in English characters. Don t forget the Postal Code!
                </p>
            </div>
           </div>
        </Layaout>
    )
}