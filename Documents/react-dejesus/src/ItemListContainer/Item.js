import React from "react"
const Item = ({ producto }) => {

    return (
        <section className="backgroundMain">


            <div className="texto">

            <img style={{height:200, width: 200}} src={producto.img}/>
            <p>
                {producto.id}
            </p>
            <h3>
                Precio: {producto.precio}             
            </h3>
            <h3>
                Stock disponible: {producto.stock}
            </h3>
            <h3>
                Descripción: {producto.desc}
            </h3>
            
            </div>

        </section>

    )
}

export default Item