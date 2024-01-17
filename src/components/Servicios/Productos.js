import axios from "axios"

const URL_API_PRODUCTOS = "https://6344335f242c1f347f812098.mockapi.io/productos"

export async function getProductos() {
    try {
        const rta = await axios.get(URL_API_PRODUCTOS)
        return rta.data
    }
    catch (error) {
        console.log("Error Axios: ", error.message)
        return []
    }
}

export async function guardarProductos(producto) {
    try {
        const rta = await axios.post(URL_API_PRODUCTOS, producto)
        return rta.data
    }
    catch (error) {
        console.log("Error Axios: ", error.message)
        return []
    }
}

export async function actualizarProductos(id, producto) {
    try {
        const rta = await axios.put(URL_API_PRODUCTOS + id, producto)
        return rta.data
    }
    catch (error) {
        console.log("Error Axios: ", error.message)
        return []
    }
}

export async function borrarProductos(id) {
    try {
        const rta = await axios.delete(URL_API_PRODUCTOS + id)
        return rta.data
    }
    catch (error) {
        console.log("Error Axios: ", error.message)
        return {}
    }
}