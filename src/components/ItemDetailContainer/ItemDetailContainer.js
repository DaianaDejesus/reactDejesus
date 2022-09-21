import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, 'productos', itemId)

        getDoc(itemRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() =>{
                setLoading(false)
            })
    }, [])

    return (
        <div className="backgroundMain">
            {
                loading
                ? <h2 className="texto">Aguarde un segundo...</h2>
                : <ItemDetail item={item} />
            }
            

        </div>
    )
}

export default ItemDetailContainer