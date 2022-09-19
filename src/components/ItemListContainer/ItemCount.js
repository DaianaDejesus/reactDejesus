import { Button } from "reactstrap"


const ItemCount = ({stock, handleAgregar, count, setCount}) => {


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
            <Button className="mx-2 btn btn-danger" onClick={handleRestar}
            disabled= {count === 1 }> - </Button>
            <span>{count}</span>
            <Button className="mx-2 btn btn-danger" onClick={handleSumar} disabled= {count === stock }> + </Button>
            <Button className='mx-2 btn btn-danger' onClick={()=> handleAgregar(count)}>Añadir al carrito</Button>
        </div>
    )
}

export default ItemCount