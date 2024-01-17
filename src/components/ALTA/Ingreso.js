import "./Ingreso.css"
/* import useForm from "../Hooks/useForm" */

export default function Ingreso(props) {

    const { nombre, precio, foto, stock, descripcionCorta, envio, marca, categoria } = props.producto
    const { onChange, onSubmit, editarId, invalid } = props

    return (
        <div className="Ingreso">
            <form className="alta-form" onSubmit={onSubmit} >
                <div className="form-group">
                    <label htmlFor="nombre">Nombre*</label>
                    <input type="text" id="nombre" className="form-control" value={nombre} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="precio">Precio*</label>
                    <input type="number" id="precio" className="form-control" value={precio} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="stock">Stock*</label>
                    <input type="number" id="stock" className="form-control" value={stock} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="marca">Marca*</label>
                    <input type="text" id="marca" className="form-control" value={marca} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="categoria">Categoría*</label>
                    <input type="text" id="categoria" className="form-control" value={categoria} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="descripcionCorta">Descripción Corta*</label>
                    <input type="text" id="descripcionCorta" className="form-control" value={descripcionCorta} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group">
                    <label htmlFor="foto">Foto*</label>
                    <input type="text" id="foto" className="form-control" value={foto} onChange={onChange} required placeholder="Campo requerido"  />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" id="envio" className="form-check-input" checked={envio} onChange={onChange} />
                    <label htmlFor="envio">Envío</label>
                </div>

                <button disabled={invalid} className={`btn btn-${editarId ? 'warning' : 'success'} mt-3 mb-5`}> {editarId ? "Actualizar" : "Enviar"}</button>
            </form>
        </div>
    )
}