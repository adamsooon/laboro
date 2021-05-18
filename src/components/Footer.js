import React from "react";
import { v4 } from "uuid";
import chunk from "lodash/chunk";
import NavItem from "./NavItem";
import { navigationItems, FOOTER } from "../constants/navigationItems";

function Footer({ facebookUrl }) {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            {chunk(
              navigationItems.filter(({ destinations }) =>
                destinations.includes(FOOTER)
              ),
              3
            ).map((group) => (
              <div className="column is-3" key={v4()}>
                <section className="menu">
                  <ul className="menu-list">
                    {group.map((groupItem) => (
                      <NavItem item={groupItem} key={v4()} />
                    ))}
                  </ul>
                </section>
              </div>
            ))}
            <div className="column is-3 social">
              <section className="social-menu">
                <iframe
                  className="social-menu-like"
                  src={`https://www.facebook.com/plugins/like.php?href=${facebookUrl}&width=72&layout=button&action=like&size=large&share=false&height=65&appId`}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                  title="Polub nas na facebooku"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
