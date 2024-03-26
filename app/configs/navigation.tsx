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
    path: "/projects",
    text: "Projects",
  },
  {
    path: "/about",
    text: "About",
  },
];
