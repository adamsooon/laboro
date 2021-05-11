import React from "react";
import { v4 } from "uuid";
import chunk from "lodash/chunk";
import NavItem from './NavItem'
import { navigationItems, FOOTER } from "../constants/navigationItems";

import facebook from "../img/social/facebook.svg";

function Footer() {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            {chunk(
              navigationItems.filter(({ destinations }) =>
                destinations.includes(FOOTER)
              ),
              2
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
            <div className="column is-4 social">
              <section className="menu">
                <a
                  title="facebook"
                  href="https://www.facebook.com/FundacjaLaboro"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
