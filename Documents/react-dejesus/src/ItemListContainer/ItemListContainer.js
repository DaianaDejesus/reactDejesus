import './ItemListContainer.css'
import './ItemCount'
import ItemCount from './ItemCount'

const ItemListContainer = ({saludo}) => {

    return(
        <section className='backgroundMain'>
            <p className="texto">
                {saludo}
            </p> 
            <ItemCount stock='5' inicial= '1' /> 
    
        </section>
           
    )
}
export default ItemListContainer