import React from "react"

const LocationSection = () => (
  <section className="cmb-xsm-4 cmb-md-6 cmb-8">
    <div className="container">
      <div className="location">
        <h2 className="section-header section-header--offset">Lokalizacja</h2>

        <div className="row">
          <div className="col-12 col-md-7 col-xl-8">
            <h3 className="location__header">Centrum Stolarki Okiennej <span className="location__header--accent">Krzysztof Burda</span>
            </h3>
            <p className="text">32-400 Myślenice, ul. 3-go Maja 14c</p>
            <p className="text">tel./fax <a href="tel:+48122741003" title="tel./fax: +48 12 274 10 03"
                                            className="link link--white">+48 12 274 10 03</a></p>
            <p className="text">tel. kom. <a href="tel:+48601530589" title="tel./kom: +48 601 530 589"
                                             className="link link--white">+48 601 530 589</a></p>
            <a href="mailto:centrumstolarki@okna-drzwi-myslenice.pl"
               title="email: centrumstolarki@okna-drzwi-myslenice.pl"
               className="link link--white">centrumstolarki@okna-drzwi-myslenice.pl</a>
          </div>
          <div className="col-12 col-md-5 col-xl-4">
            <p className="text cmt-3">Bank: BPH S.A. Oddział Myślenice</p>
            <p className="text">Numer konta: 51051515055151515</p>
            <p className="text">NIP: 681-142-26-43 <span role="img" aria-label="icon">&#9899;</span> REGON: 356291852</p>
            <a href="https://goo.gl/maps/ffA3Egv2dYMQ5urv5"
               target="_blank"
               title="Zobacz mapę dojazdu"
               rel="noreferrer"
               className="link link--accent link--white cmt-2">Zobacz mapę
              dojazdu <span role="img" aria-label="icon">&#8594;</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default LocationSection
