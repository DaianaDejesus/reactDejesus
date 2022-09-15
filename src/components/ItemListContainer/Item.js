import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {

    return (
        <section className="backgroundMain">

            <div className='producto'>
                <img src={producto.img} alt="productosImg" />
                <h4 className='prod-text'>{producto.nombre}</h4>
                <p className='prod-text'>Precio: {producto.precio}</p>
                <small className='prod-text'>Stock disponible: {producto.stock}</small>
                <p className='prod-text'>Categoría: {producto.categoria}</p>
                <Link to={`/item/${producto.id}`} className="btn btn sm btn-outline-danger">Ver más</Link>

            </div>
            
        </section >

    )
}

export default Item