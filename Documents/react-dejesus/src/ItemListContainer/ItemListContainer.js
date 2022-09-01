import { useEffect, useState } from "react"
import pedirDatos  from "../helpers/pedirDatos"
import './ItemListContainer.css'
import ItemCount from './ItemCount'
import ItemList from "./ItemList"



const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        pedirDatos().then((res) => {

                setItems(res)


            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
            })
    }, [])

    return (
        <section className='backgroundMain'>
            <p className="texto">
                {saludo}
            </p>
            <div>
                <ItemCount stock='5' inicial='1' />
            </div>

            <ItemList items={items} />
        </section>

    )
}


export default ItemListContainer