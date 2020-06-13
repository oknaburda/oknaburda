import React from "react"
import ContactForm from "../components/contact-form"


const ContactFormSection = () => (
  <section className="cmb-xsm-4 cmb-md-6 cmb-8">
    <div className="container">
      <h2 className="section-header">Formularz kontaktowy</h2>
    </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1">
          <ContactForm/>
        </div>
      </div>
    </div>
  </section>
)

export default ContactFormSection
