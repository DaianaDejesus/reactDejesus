import { createContext, useState } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {

         setCart([...cart, item])
    }
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    }
    const emptyCart = () => {

        Swal.fire({
            title: '¿Deseas vaciar tu carrito?',
            icon: 'question',
            showCancelButton: true,
            background: '#FFB8C8',
            color: '#F6264e',
            confirmButtonColor: '#D3BCF6',
            cancelButtonColor: '#F6264e',
            cancelButtonText: 'No, lo quiero todo.',
            confirmButtonText: 'Sí, vaciar.'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
        })
    }
    return (
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                isInCart,
                cartQuantity,
                cartTotal,
                emptyCart,
                removeItem,
            }
        }>
            {children}
        </CartContext.Provider>
    )
}
