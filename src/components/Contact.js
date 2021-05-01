import React from "react";
import domek from "../img/contact/kontakt_domek.svg";
import koperta from "../img/contact/kontakt_koperta.svg";
import telefon from "../img/contact/kontakt_telefon.svg";

export default function Contact() {
  return (
    <section
      className="section contact"
      style={{ backgroundColor: "#f4792b" }}
      id="kontakt"
    >
      <div className="container">
        <h3 className="has-text-weight-semibold is-size-2 custom-header text-white">Kontakt</h3>
        <div className="columns is-multiline">
          <div className="is-parent column is-6">
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
                <a href="tel:999999999">999 999 999</a>
              </li>
              <li className="contact-list-item mail">
                <figure className="contact-icon-container">
                  <img
                    src={koperta}
                    alt="contact e-mail address"
                    className="contact-icon"
                  />
                </figure>
                <a href="mailto:kontakt@kontakt.pl">kontakt@kontakt.pl</a>
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
  );
}
