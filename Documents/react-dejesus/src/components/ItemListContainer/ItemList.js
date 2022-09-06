import Item from "./Item"

const ItemList = ({productos = []}) => {

  return (
    <div className="container-fluid products">
      {productos.map((prod) =>
    
        <Item producto={prod} key={prod.id} />
      )}
    </div>
  )
}


export default ItemList