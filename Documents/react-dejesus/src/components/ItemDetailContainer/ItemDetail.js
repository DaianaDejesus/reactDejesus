import 'bootstrap/dist/css/bootstrap.min.css';
import '../ItemListContainer/ItemListContainer.css'

    const ItemDetail = ({item}) => {
        
        return (
            <div className="producto">
                <img src={item.img}/>
                <h3 className='prod-text'>{item.nombre}</h3>
                <p className='prod-text'>{item.desc}</p>
                <h6 className='prod-text'>Id: {item.id}</h6>
                <h6 className='prod-text'> Stock: {item.stock}</h6>
                <h4 className='prod-text'>Precio: {item.precio}</h4>
            </div>
        )
    }
    
    export default ItemDetail



