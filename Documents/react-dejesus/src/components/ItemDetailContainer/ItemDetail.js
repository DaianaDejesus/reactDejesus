import 'bootstrap/dist/css/bootstrap.min.css';
import '../ItemListContainer/ItemListContainer.css'
import ItemCount from '../ItemListContainer/ItemCount'
import { useState } from "react"



    const ItemDetail = ({item}) => {
        const {  id, nombre, precio, img, stock, desc, categoria } = item;
        
        const [cantidad, setCantidad] = useState(1)
   
        const handleAgregar = (count) => {
            const itemToCart = {
                id: item.id,
                precio: item.precio,
                nombre: item.nombre,
                stock: item.stock
        }

        count > 0 ? console.log(itemToCart) : console.log("no se puede agregar");
            }

        
        return (
            <div className="producto">
                <img src={img} alt="imgProducto" />
                <h3 className='prod-text'>{nombre}</h3>
                <p className='prod-text'>{desc}</p>
                <h6 className='prod-text'>Id: {id}</h6>
                <h6 className='prod-text'> Stock: {stock}</h6>
                <h4 className='prod-text'>Precio: {precio}</h4>
                <h4 className='prod-text'>Categoría: {categoria}</h4>


                   
                
                   <ItemCount 
                        stock={stock}
                        count={cantidad}
                        setCount={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            


            </div>
        )
    }
    
    export default ItemDetail



