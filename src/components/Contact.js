import React from "react";
import { StaticQuery } from "gatsby";
import domek from "../img/contact/kontakt_domek.svg";
import koperta from "../img/contact/kontakt_koperta.svg";
import telefon from "../img/contact/kontakt_telefon.svg";

function Contact({ data }) {
  const { frontmatter: { contactData } } = data.markdownRemark;
  return (
    <>
      <section className="section contact" id="kontakt">
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
                  <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
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
                    href={`mailto:${contactData.email}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {contactData.email}
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
                  <address>{contactData.address}</address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src={`https://maps.google.com/maps?q=${contactData.address}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="map"
        allowFullScreen
        loading="lazy"
        title={`Gdzie jesteśmy? ${contactData.address}`}
      />
    </>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      query ContactQuery {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
          frontmatter {
            contactData {
              address
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} />}
  />
);
