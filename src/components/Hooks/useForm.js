/* import { event } from "jquery" */
import { useState } from "react"

const useForm = (initialData, validarForm) => {
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState(initialData)

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })

        const err = validarForm(form)

        if (err === null) {
            setErrors({})
        } else {
            setErrors(err)
        }

        return errors

    }

    return { handleChange, form, errors }
}

export default useForm