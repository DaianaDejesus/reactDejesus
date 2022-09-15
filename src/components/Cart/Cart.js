import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Button } from "reactstrap"
import { BsFillTrashFill } from 'react-icons/bs'


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

    return (
        <div className='backgroundMain producto'>
            <h1 className="prod-text">Carrito.</h1>

            {cart.map((item) => (
                <div key={item.id}>
                    <h4 className='prod-text'>{item.nombre}</h4>
                    <p className='prod-text'>Precio: {item.precio}</p>
                    <small className='prod-text'>Stock disponible: {item.stock}</small>
                    <p className='prod-text'>Categoría: {item.categoria}</p>
                    <p className="prod-text"> Cantidad: {item.cantidad} </p>

                    <Button className="btn btn-danger" onClick={() => removeItem(item.id)}> <BsFillTrashFill /> </Button>
                </div>
            ))}

            <div>
                <h4 className="prod-text">Total: ${cartTotal()}</h4>
                <Button onClick={emptyCart} className="btn btn-danger mx-2"> Vaciar </Button>
            </div>
        </div>
    )
}
export default Cart