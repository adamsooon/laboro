import React, { useEffect} from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import WebFont from 'webfontloader';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import useSiteMetadata from "./SiteMetadata";
import "./all.sass";

const TemplateWrapper = ({ children, location }) => {
  const { title, description } = useSiteMetadata();

  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Montserrat'],
        urls: [
            'https://fonts.googleapis.com/css?family=Montserrat:300,500,700&display=swap&subset=latin-ext'
        ]
    }
    });
  }, [])
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,500,700&display=swap&subset=latin-ext" rel="stylesheet"/>
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      
      <Navbar location={location} />
      <div>{children}</div>
      <Contact />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.5682549570693!2d23.13707497771366!3d53.13589546918725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffc72b64354b3%3A0x5591111e8fbd8450!2sKolejowa%2012b%2C%2015-701%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1619784304275!5m2!1spl!2spl"
        style={{ width: "100%", height: 400 }}
        allowFullScreen
        loading="lazy"
        title="Gdzie jesteśmy? Kolejowa 12b"
      />
      <Footer />
      <div className="wf-active wf-inactive" />
    </div>
  );
};

export default TemplateWrapper;
