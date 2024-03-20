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
        <ul className="flex flex-col font-semibold text-xl items-end gap-6 mt-10">
          {configNavigationItems.map((navItem) => (
            <NavItemLinkMenu
              key={navItem.path}
              onOpenChange={setOpen}
              navItem={navItem}
            />
          ))}
        </ul>
      </SheetContent>
    </Sheet>
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
    <>
      <NavItemLink
        navItem={navItem}
        onClick={() => {
          navigate(navItem.path.toString());
          onOpenChange?.(false);
        }}
      />
    </>
  );
}
