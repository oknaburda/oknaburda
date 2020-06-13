import React from "react"
import { useField } from "formik"


const TextField = props => {
  const { name, label } = props
  const [field, meta] = useField(props)

  return (
    <div className="contact-form__items-group">
      <label className="contact-form__label" htmlFor={name}>
        {label}
        <input
          {...field}
          {...props}
          className={`contact-form__field contact-form__text-field ${
            meta.touched && meta.error
              ? "contact-form__field--error"
              : ""
          }`}
        />
      </label>
      {meta.error && meta.touched ? (
        <div className="contact-form__error-group">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

export default TextField
