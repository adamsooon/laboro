import React from "react";
import { Helmet } from "react-helmet";
import domek from "../img/contact/kontakt_domek.svg";
import koperta from "../img/contact/kontakt_koperta.svg";
import telefon from "../img/contact/kontakt_telefon.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";


const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="pl" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar location={location}/>
      <div>{children}</div>
      <section className="contact section-content" id="contact">
        <div className="container">
          <h2 className="section-header white">Kontakt</h2>
          <div className="contact-content">
            <figure className="contact-logo">
              <img src={domek} alt="Logo Little Sprouts" />
            </figure>
            <div className="contact-details">
              <ul className="contact-list">
                <li className="contact-list-item">
                  <figure className="contact-icon-container">
                    <img src={telefon} alt="contact phone number" className="contact-icon" />
                  </figure>
                  <a href="tel:999999999">999 999 999</a>
                </li>
                <li className="contact-list-item mail">
                  <figure className="contact-icon-container">
                    <img src={koperta} alt="contact e-mail address" className="contact-icon" />
                  </figure>
                  <a href="mailto:kontakt@kontakt.pl">kontakt@kontakt.pl</a>
                </li>
                <li className="contact-list-item mail">
                  <figure className="contact-icon-container">
                    <img src={koperta} alt="contact e-mail address" className="contact-icon" />
                  </figure>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.messenger.com/t/FundacjaLaboro">Facebook messenger</a>
                </li>
                <li className="contact-list-item">
                  <figure className="contact-icon-container">
                    <img src={domek} alt="our location" className="contact-icon" />
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
        style={{ width: '100%', height: 400 }}
        allowFullScreen
        loading="lazy"
        title="Gdzie jesteśmy? Kolejowa 12b"
      />
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
