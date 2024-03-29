import { useEffect, useState } from "react";
import { Tabla } from "./Tabla";
import './Index.css'
import { actualizarProductos, borrarProductos, getProductos, guardarProductos } from "../Servicios/Productos";
import Ingreso from "./Ingreso";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Index() {

    const [productos, setProductos] = useState([])

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        marca: "",
        categoria: "",
        descripcionCorta: "",
        foto: "",
        envio: ""
    })

    const [editarId, setEditarId] = useState(null)
    const [borrarId, setBorrarId] = useState(null)

    //CONTROLES DE MODAL
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        async function pedir() {
            const productos = await getProductos()
            setProductos(productos)
        }
        pedir()
    }, [])


    function onChange(e) {
        const { type, id, checked, value } = e.target
        setProducto({ ...producto, [id]: type === "checkbox" ? checked : value })
    }

    async function onSubmit(e) {
        e.preventDefault()
        const productosClon = [...productos]

        if (!editarId) {
            //Guardo en la nube
            const productoGuardado = await guardarProductos(producto)

            //Guardo en forma local
            //const productosClon = [...productos]
            productosClon.push(productoGuardado)

        } else {
            const id = editarId
            const productoActualizado = await actualizarProductos(id, producto)

            //LOCAL

            const index = productosClon.findIndex(p => p.id === productoActualizado.id)
            productosClon.splice(index, 1, producto)
            //setProductos(productosClon)

            setEditarId(null)
        }

        setProductos(productosClon)
        borrarForm()
    }

    function borrarForm() {
        setProducto({
            nombre: "",
            precio: "",
            stock: "",
            marca: "",
            categoria: "",
            descripcionCorta: "",
            foto: "",
            envio: ""
        })
    }

    function formInvalid() {
        const noValido =
            !producto.nombre ||
            !producto.precio ||
            !producto.stock ||
            !producto.marca ||
            !producto.categoria ||
            !producto.descripcionCorta ||
            !producto.foto

        return noValido
    }

    function editar(id) {
        if (!editarId || editarId !== id) {
            setEditarId(id)
            setProducto(productos.find(p => p.id === id))
        } else {
            setEditarId(null)
            borrarForm()
        }
    }

    function borrar(id) {
        if (id) {
            setBorrarId(id)
            handleShow()
        }
    }

    async function goBorrar() {
        const id = borrarId

        if (id) {
            //remoto
            const productoEliminado = await borrarProductos(id)

            //LOCAL
            const productosClon = [...productos]
            const index = productosClon.findIndex(p => p.id === productoEliminado.id)
            productosClon.splice(index, 1)
            setProductos(productosClon)
        }
        handleClose()
    }



    return (
        <div className="Alta">

            <h1>Alta de productos</h1>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Desea eliminar {productos.find(p => p.id === borrarId)?.nombre}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={goBorrar}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>

            <Ingreso producto={producto} onChange={onChange} onSubmit={onSubmit} editarId={editarId} invalid={formInvalid()} />

            <hr />

            <h2>Lista de productos disponibles</h2>
            <Tabla productos={productos} editar={editar} borrar={borrar} editarId={editarId}></Tabla>
            <table></table>

        </div>




    )
}