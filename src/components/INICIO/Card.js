import './Card.css'

export const Card = props => {

const { producto, agregarCarritoID} = props

    return (
        <div className="Card">
            
            <section>
                <img src={producto.foto} alt="" />
                <h3>{producto.nombre}</h3>
                <p><b className="precio">Precio:</b> ${producto.precio}</p>
                <p><b>Detalles:</b> {producto.descripcionCorta}</p>

                <div className="btn-group">
                    <button onClick={()=> agregarCarritoID(producto.id)}> Comprar </button>
                </div>
            </section>
        </div>
    )
}