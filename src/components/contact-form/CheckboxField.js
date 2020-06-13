import React from "react"
import { useField } from "formik"


const CheckboxField = props => {
  const { name, label } = props
  const [field, meta] = useField(props)

  console.log(meta.error && meta.touched, meta.error, meta.touched)

  return (
    <div className="contact-form__items-group">
      <label className="contact-form__label contact-form__label--checkbox" htmlFor={name}>
        <input
          {...field}
          {...props}
          className="contact-form__checkbox-field"
        />
        <span
          className={`contact-form__custom-checkbox ${field.value ? "contact-form__custom-checkbox--checked" : ""} ${meta.touched && meta.error ? "contact-form__custom-checkbox--error" : ""}`}/>
        <p
          className={`contact-form__checkbox-label-text ${meta.touched && meta.error ? "contact-form__checkbox-label-text--error" : "" }`}>{label}</p>
      </label>
      {meta.error && meta.touched ? (
        <div className="contact-form__error-group">
          {meta.error}
        </div>
      ) : null}
    </div>
  )
}

export default CheckboxField
