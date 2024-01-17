import axios from "axios"

const URL_API_CARRITO = "https://6344335f242c1f347f812098.mockapi.io/carrito"

export async function enviarCarrito(carrito) {
    try {
        const rta = await axios.post(URL_API_CARRITO, { pedido: carrito }) //debe ser un objeto para enviar a mockapi
        return rta.data
    }
    catch (error) {
        console.log("Error Axios: ", error.message)
        return []
    }
}