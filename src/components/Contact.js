import React from "react";
import domek from "../img/contact/kontakt_domek.svg";
import koperta from "../img/contact/kontakt_koperta.svg";
import telefon from "../img/contact/kontakt_telefon.svg";

export default function Contact() {
  return (
    <>
      <section
        className="section contact"
        id="kontakt"
      >
        <div className="container">
          <h3 className="has-text-weight-semibold is-size-2 custom-header">
            Kontakt
          </h3>
          <div className="columns is-multiline">
            <div className="is-parent column is-6 contact-logo-wrapper">
              <figure className="contact-logo">
                <img src={domek} alt="Logo Little Sprouts" />
              </figure>
            </div>
            <div className="is-parent column is-6">
              <ul className="contact-list">
                <li className="contact-list-item">
                  <figure className="contact-icon-container">
                    <img
                      src={telefon}
                      alt="contact phone number"
                      className="contact-icon"
                    />
                  </figure>
                  <a href="tel:579634849">579 634 849</a>
                </li>
                <li className="contact-list-item mail">
                  <figure className="contact-icon-container">
                    <img
                      src={koperta}
                      alt="contact e-mail address"
                      className="contact-icon"
                    />
                  </figure>
                  <a
                    href="mailto:laboro@poczta.fm"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    laboro@poczta.fm
                  </a>
                </li>
                <li className="contact-list-item">
                  <figure className="contact-icon-container">
                    <img
                      src={domek}
                      alt="our location"
                      className="contact-icon"
                    />
                  </figure>
                  <address>ul. Kolejowa 12b</address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.5682549570693!2d23.13707497771366!3d53.13589546918725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc72b64354b3%3A0x5591111e8fbd8450!2sKolejowa%2012b%2C%2015-701%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1619784304275!5m2!1spl!2spl"
        className="map"
        allowFullScreen
        loading="lazy"
        title="Gdzie jesteśmy? Kolejowa 12b"
      />
    </>
  );
}
