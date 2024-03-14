import { NavLink } from "@remix-run/react";
import { NavItem, configNavigationItems } from "~/components/config/navigation";
import { cn } from "~/utils/cn";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 items-center justify-between gap-2 bg-background p-4 transition-colors lg:flex">
      <ul className="flex items-center gap-2">
        {configNavigationItems.map((navItem) => (
          <NavItemLink key={navItem.path} navItem={navItem} />
        ))}
      </ul>
    </nav>
  );
}

export function NavItemLink({ navItem }: { navItem: NavItem }) {
  return (
    <li>
      <NavLink
        to={navItem.path}
        className={({ isActive }) =>
          cn(
            "focus-ring inline-flex select-none items-center gap-2 rounded-md px-2 py-1 font-semibold transition hover:bg-secondary",
            isActive && "text-primary"
          )
        }>
        <span>{navItem.text}</span>
      </NavLink>
    </li>
  );
}
