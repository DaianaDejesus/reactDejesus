import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { pedirDatos } from "../../helpers/pedirDatos"

import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { nombreId } = useParams()
    console.log(nombreId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!nombreId) {
                    setProductos(res)
                } else {
                    setProductos( res.find((prod) => prod.nombre === nombreId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [nombreId])


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