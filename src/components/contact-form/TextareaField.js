import React from "react"
import { useField } from "formik"


const TextareaField = props => {
  const {name, label} = props;
  const [field, meta]= useField(props)

  return (
    <div className="contact-form__items-group">
      <label className="contact-form__label" htmlFor={name}>
        {label}
        <textarea
          {...field}
          {...props}
          className={`contact-form__field contact-form__textarea-field ${
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

export default TextareaField
