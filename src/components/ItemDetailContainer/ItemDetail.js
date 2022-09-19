import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react"
import { Link } from 'react-router-dom';
import {CartContext} from '../../context/CartContext'
import ItemCount from '../ItemListContainer/ItemCount'
import '../ItemListContainer/ItemListContainer.css'




const ItemDetail = ({ item }) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)
    

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            stock: item.stock,
            cantidad
        }

        console.log( isInCart(item.id))

        addToCart(itemToCart)
    }



    return (
        <div className="producto">
            <img src={item.img} alt="imgProducto" />
            <h3 className='prod-text'>{item.nombre}</h3>
            <p className='prod-text'>{item.desc}</p>
            <h4 className='prod-text'>Precio: {item.precio}</h4>
            <h4 className='prod-text'>Categoría: {item.categoria}</h4>
            {
                isInCart(item.id)
                    ?   <Link to="/cart" className="btn btn-danger my-2">Terminar compra.</Link>
                    :   <ItemCount
                            stock={item.stock}
                            count={cantidad}
                            setCount={setCantidad}
                            handleAgregar={handleAgregar}
                        />
            }
        </div>
    )
}

export default ItemDetail



