import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

function CookiesBar() {
  const [isHidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
    localStorage.setItem("isCookieApproved", true);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window) {
      setHidden(localStorage.getItem("isCookieApproved", false));
    }
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <section className="hero is-small is-hero-cookies">
      <div className="hero-body">
        <p>
          Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
          poziomie. Więcej infomacji w{" "}
          <Link
            to="/polityka-prywatnosci"
            aria-label="zobacz politykę prywatności"
          >
            polityce prywatności
          </Link>
          .
        </p>
        <button onClick={handleClick}>Zgadzam się</button>
      </div>
    </section>
  );
}

export default CookiesBar;
