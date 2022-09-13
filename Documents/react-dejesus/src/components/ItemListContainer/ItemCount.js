import React, { useState } from "react"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"

const ItemCount = ({stock, handleAgregar}) => {

    let[count, setCount]= useState(0)

    const handleSumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        else {
            console.log('No hay stock.')
        }
    }

    const handleRestar = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
    
        <div className="prod-text">
            <Button className="mx-2 btn btn-danger" onClick={handleRestar}> - </Button>
            <span>{count}</span>
            <Button className="mx-2 btn btn-danger" onClick={handleSumar}> + </Button>
            <Button className='mx-2 btn btn-danger' onClick={()=> handleAgregar(count)}>Añadir al carrito</Button>
            <Link to="../cart" className="btn btn-danger mx-2">Terminar compra</Link>
        </div>
    )
}

export default ItemCount