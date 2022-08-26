import './ItemListContainer.css'

const ItemListContainer = ({saludo}) => {

    return(
        <section className='backgroundMain'>
            <p className="texto">
                {saludo}
            </p>    
        </section>
    )
}
export default ItemListContainer