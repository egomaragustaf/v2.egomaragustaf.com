import { Link, NavLink, NavLinkProps } from "@remix-run/react";
import { NavItem, configNavigationItems } from "~/components/config/navigation";
import { cn } from "~/utils/cn";
import { NavbarMenu } from "~/components/layout/navbar-menu";
import useScroll from "~/hooks/use-scroll";

export function Navbar() {
  const scrolled = useScroll(20);

  return (
    <>
      <NavbarLarge />
      <NavbarSmall />
    </>
  );
}

function NavbarSmall() {
  return (
    <nav
      className={cn(
        "sticky top-0 z-20 flex items-center justify-between gap-2 bg-background p-2 transition-colors lg:hidden"
      )}>
      <div className="flex items-center justify-between gap-2">
        <Link
          to="/"
          prefetch="intent"
          className="focus-ring block rounded-xs transition hover:opacity-75">
          <span>EGM</span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <>
          <NavbarMenu />
        </>
      </div>
    </nav>
  );
}

function NavbarLarge() {
  const scrolled = useScroll(20);
  return (
    <nav
      className={cn(
        "sticky top-0 z-40 hidden items-center justify-between gap-2 p-4 transition-colors lg:flex",
        { "bg-background/75 backdrop-blur-lg": scrolled }
      )}>
      <Link to="/">
        <h1 className="text-2xl font-bold">EGM</h1>
      </Link>

      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {configNavigationItems.map((navItem) => (
            <NavItemLink key={navItem.path} navItem={navItem} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function NavItemLink({
  navItem,
  onClick,
}: { navItem: NavItem } & Pick<NavLinkProps, "onClick">) {
  return (
    <li>
      <NavLink
        to={navItem.path}
        prefetch="intent"
        onClick={onClick}
        className={({ isActive }) =>
          cn(
            "focus-ring inline-flex select-none items-center gap-2 rounded-md px-2 py-1 font-bold transition hover:bg-secondary",
            isActive && "text-primary"
          )
        }>
        <span className="select-none">{navItem.text}</span>
      </NavLink>
    </li>
  );
}
