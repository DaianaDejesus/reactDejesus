import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from "../../firebase/config"
import useForm from "../../hooks/userForm"


const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        if (values.nombre.length < 2) {
            alert('Nombre no corresponde.')
            return
        }

        if (values.email.length < 2) {
            alert('Email no corresponde.')
            return
        }
        
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenNueva')
        const productosRef = collection(db, 'productos')
        
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const productos = await getDocs(q)

        const sinStock = []

        productos.docs.forEach((doc) => {
            const itemEnCarrito = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemEnCarrito.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemEnCarrito.cantidad
                })
            } else {
                sinStock.push(itemEnCarrito)
            }
        })

        if (sinStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)
                            setOrdenId(doc.id)
                            terminarCompra()
                        })
                })
        } else {
            alert("Hay items sin stock")
            console.log(sinStock)
        }
    }

    if (ordenId) {
        return (
            <div className='container'>

                <div className='container-fluid my-2 backgroundMain'>
                    <h2 className="texto"> ¡Compra exitosa! </h2>
                </div>
                <div className='container-fluid my-2 backgroundMain'>
                    <h3 className="texto">
                        Tu número de compra es: <b>{ordenId}</b>
                    </h3>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container-fluid backgroundMain">
            <form onSubmit={handleSubmit}>
                <label className="textoLabel form-label">Nombre y apellido</label>
                <input
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'nombre'}
                    className="form-control"
                    placeholder="Ingresa tu nombre y apellido."
                />

                <label className="textoLabel form-label">Email</label>
                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    className="form-control"
                    placeholder="Ingresa tu email."
                />

                <label className="textoLabel form-label">Teléfono</label>

                <input
                    name="telefono"
                    onChange={handleInputChange}
                    value={values.telefono}
                    type={'telefono'}
                    className="form-control"
                    placeholder="Ingresa tu celular."
                />

                <button type="submit" className="btn btn-danger my-2">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout