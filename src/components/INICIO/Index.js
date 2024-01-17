import { useEffect, useState } from 'react'
import './Index.css'
import { getProductos } from '../Servicios/Productos'
import { Card } from './Card'
import { useLocalStorage } from '../Hooks/useLocalStorage'


export function Index() {

    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    
    useEffect(() => {
        async function pedir() {
            const productos = await getProductos()
            setProductos(productos)
        }
        pedir()
    }, [])

    function agregarCarritoID(id) {

        const producto = productos.find(p => p.id === id)

        const carritoClon = [...carrito]

        let productoCarrito = carritoClon.find(c => c.id === producto.id)

        if (!productoCarrito) {
            producto.cantidad = 1
            carritoClon.push(producto)

        } else if (productoCarrito.cantidad < productoCarrito.stock) {
            productoCarrito.cantidad++
        } 

        setCarrito(carritoClon)

    }

    return (
        <div className="Inicio">

            <div className="inicio">
                <div className="section-cards">
                    <div className="section-cards-header">
                        <h1>FUNKOS</h1>
                    </div>


                    <div className="cards-container">
                        {productos.map((producto, index) =>
                            <Card key={index} producto={producto} agregarCarritoID={agregarCarritoID} />
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}