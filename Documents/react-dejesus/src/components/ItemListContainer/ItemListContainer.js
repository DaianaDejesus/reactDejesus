import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { pedirDatos } from "../../helpers/pedirDatos"

import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoriaId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.categoria === categoriaId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoriaId])


    return (
        <section className='backgroundMain' >

            <div >
            {
                loading 
                ? <h2 className="texto">Cargando...</h2>
                : <ItemList productos={productos} />
            }
            </div>
            
        </section>

    )
}


export default ItemListContainer