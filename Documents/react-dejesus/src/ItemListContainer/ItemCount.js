import { useState } from "react"



const ItemCount = ({ stock, inicial }) => {




    const [count, setCount] = useState(1);


    const handleSumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        else {
            console.log('No hay stock.')
        }
    }

    function handleRestar() {
        if (count > inicial) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        if (count <= stock) {
            console.log("Se añadió al carrito", count)
        }

    }

    return (
    
        <div className="container my-5">
            <button className="mx-2 btn btn-danger" onClick={handleRestar}> - </button>
            <span>{count}</span>
            <button className="mx-2 btn btn-danger" onClick={handleSumar}> + </button>
            <button className='my-2 btn btn-danger' disabled={stock <= 0} onClick={() => onAdd(count)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount