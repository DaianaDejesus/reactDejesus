
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "reactstrap";
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const productosCategoria = categoriaId
                    ? query(productosRef, where ('categoria', '==', categoriaId) )
                    : productosRef

        getDocs(productosCategoria)
            .then ((resp) => {
                const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                console.log(productosDB)

                setProductos(productosDB)
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
                ? <h2 className="texto">Cargando...
               <Spinner color="danger" />
                </h2>

                : <ItemList productos={productos} />

            }
            </div>
            
        </section>

    )
}


export default ItemListContainer