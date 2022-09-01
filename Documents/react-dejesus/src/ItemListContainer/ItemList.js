import Item from './Item'
import React from 'react'
const ItemList = ({items = []}) => {

  return (
    <div className="container my-5">
      {items.map((item) =>
    
        <Item producto={item} key={item.id} />
      )}
    </div>
  )
}


export default ItemList