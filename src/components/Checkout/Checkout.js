import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/config"


const Checkout = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [ordenId, setOrdenId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }

        const ordensRef = collection(db, 'ordenNueva')

        addDoc(ordensRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrdenId(doc.id)
                terminarCompra()
            })
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
                    type={'text'}
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
                    type={'text'}
                    className="form-control"
                    placeholder="Ingresa tu celular."
                />

                <button type="submit" className="btn btn-danger my-2">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout