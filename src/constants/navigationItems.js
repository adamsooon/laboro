export const NAVBAR = "navbar";
export const FOOTER = "footer";

export const homePageNav = {
  name: "Strona główna",
  path: "/",
  destinations: [NAVBAR, FOOTER]
};

export const projectsPageNav = {
  name: "Projekty",
  path: "/projekty",
  destinations: [NAVBAR, FOOTER]
};
export const documentsPageNav = {
  name: "Dokumenty",
  path: "/dokumenty",
  destinations: [NAVBAR, FOOTER]
};
export const contactsPageNav = {
  name: "Kontakt",
  path: "/#kontakt",
  destinations: [NAVBAR, FOOTER],
};
export const privatePolicyNav = {
  name: "Polityka Prywatności",
  path: "/static/polityka_prywatnosci.pdf",
  destinations: [FOOTER],
  isStaticLink: true
};
export const navigationItems = [
  homePageNav,
  projectsPageNav,
  documentsPageNav,
  contactsPageNav,
  privatePolicyNav,
  // {
  //   name: "Produkty",
  //   path: "/products",
  //   destinations: [FOOTER],
  // }
];
