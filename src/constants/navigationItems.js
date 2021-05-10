export const homePageNav = {
  name: "Strona główna",
  path: "/",
  isHeaderItem: true,
  isFooterItem: true,
};

export const projectsPageNav = {
  name: "Projekty",
  path: "/projekty",
  isHeaderItem: true,
  isFooterItem: true,
};
export const documentsPageNav = {
  name: "Dokumenty",
  path: "/dokumenty",
  isHeaderItem: true,
  isFooterItem: true,
};
export const contactsPageNav = {
  name: "Kontakt",
  path: "/#kontakt",
  isHeaderItem: true,
  isFooterItem: true,
};
export const navigationItems = [
  homePageNav,
  projectsPageNav,
  documentsPageNav,
  contactsPageNav,
  {
    name: "Produkty",
    path: "/products",
    isHeaderItem: true,
    isFooterItem: true,
  }
];
