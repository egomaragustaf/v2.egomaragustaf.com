export type NavItem = {
  path: string;
  text: string;
};

export const configNavigationItems: NavItem[] = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/projects",
    text: "Projects",
  },
  {
    path: "/blog",
    text: "Blog",
  },
];
