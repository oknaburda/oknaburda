import React from "react"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import regex from "../utils/regex"
import TextField from "./contact-form/TextField"
import TextareaField from "./contact-form/TextareaField"
import CheckboxField from "./contact-form/CheckboxField"


const ContactForm = () => (
  <div className="contact-form">
    <Formik
      initialValues={{
        firstLastName: "",
        email: "",
        phone: "",
        companyName: "",
        message: "",
        acceptRules: false
      }}

      validationSchema={
        Yup.object({
          firstLastName: Yup.string(),
          email: Yup.string()
            .email("Nieprawidłowy adres e-mail")
            .required("* To pole jest wymagane"),
          phone: Yup.string()
            .matches(regex.phoneRegex, "Nieprawidłowy numer telefonu. Prawidłowy format: XXX-XXX-XXX"),
          companyName: Yup.string(),
          message: Yup.string()
            .max(255, "Pole powinno zawierać 255 lub mniej znaków")
            .required("* To pole jest wymagane"),
          acceptRules: Yup.bool()
            .test(
              "acceptRules",
              "* Akceptacja regulaminu jest wymagana",
              (value) => value === true
            )
            .required("* Akceptacja regulaminu jest wymagane")
        })
      }

      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 1000)
      }}
    >{props => (
      <Form onSubmit={props.handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 cpr-lg-3 cpr-5">
            <TextField id="firstLastName" name="firstLastName" type="text" label="Imię i nazwisko"
                       placeholder="Wpisz imię i nazwisko"/>
            <TextField id="email" name="email" type="email" label="Adres e-mail *" placeholder="Wpisz adres e-mail"/>
            <TextField id="phone" name="phone" type="text" label="Numer telefonu" placeholder="Wpisz numer telefonu"/>
            <TextField id="companyName" name="companyName" type="text" label="Nazwa firmy"
                       placeholder="Wpisz nazwę firmy"/>
          </div>
          <div className="col-12 col-md-7 col-lg-8 cpl-lg-3 cpl-5">
            <TextareaField id="message" name="message" label="Wpisz wiadomość *" rows="10"
                           placeholder="Wpisz treść wiadomości"/>
            <CheckboxField id="acceptRules" name="acceptRules" type="checkbox" label="Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z
                rozporządzeniem Parlamentu Europejskiego i Rady (UE) 27.04.2016 / 679 *"/>
          </div>
          <div className="col-12">
            <div className="contact-form__items-group">
              <button
                className="contact-form__button button button--accent"
                type="submit"
                disabled={props.isSubmitting || !props.isValid}
              >{props.isSubmitting ? "Wysyłanie wiadomości" : "Wyślij"}
              </button>
            </div>
          </div>
        </div>
      </Form>
    )}</Formik>
  </div>
)

export default ContactForm