import { useState } from "react";
import { NavLink, NavLinkProps, useNavigate } from "@remix-run/react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { cn } from "~/utils/cn";
import { NavItem, configNavigationItems } from "~/components/config/navigation";
import { NavItemLink } from "~/components/layout/navbar";

export function NavbarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <span>Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        <div className="mb-10 space-y-6">
          <SheetHeader className="flex items-start font-bold text-2xl gap-2">
            <NavLinkMenu
              to="/"
              onOpenChange={setOpen}
              className="rounded-xs transition hover:text-primary">
              <span>EGM</span>
            </NavLinkMenu>
          </SheetHeader>

          <ul className="flex flex-col font-semibold text-xl items-end gap-4">
            {configNavigationItems.map((navItem) => (
              <NavItemLinkMenu
                key={navItem.path}
                onOpenChange={setOpen}
                navItem={navItem}
              />
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavLinkMenu({
  to,
  onOpenChange,
  className,
  children,
}: {
  onOpenChange: (open: boolean) => void;
} & NavLinkProps) {
  const navigate = useNavigate();

  return (
    <NavLink
      to={to}
      onClick={() => {
        navigate(to.toString());
        onOpenChange?.(false);
      }}
      className={cn("focus-ring", className)}>
      {children}
    </NavLink>
  );
}

function NavItemLinkMenu({
  onOpenChange,
  navItem,
}: {
  onOpenChange: (open: boolean) => void;
  navItem: NavItem;
}) {
  const navigate = useNavigate();

  return (
    <NavItemLink
      navItem={navItem}
      onClick={() => {
        navigate(navItem.path.toString());
        onOpenChange?.(false);
      }}
    />
  );
}
