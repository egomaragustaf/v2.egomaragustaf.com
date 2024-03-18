import { Link } from "@remix-run/react";
import { cn } from "~/utils/cn";
import { getCurrentYear } from "~/utils/datetime";

export function Footer() {
  return (
    <footer className="mt-40 space-y-4 p-4">
      <SiteFooterSource />
    </footer>
  );
}

function SiteFooterSource() {
  return (
    <section
      className={cn(
        "flex flex-col flex-wrap items-center justify-between gap-2 rounded-md bg-muted/30 p-4 sm:flex-row"
      )}>
      <p className="text-center text-sm sm:text-left">
        <span>&copy; {getCurrentYear()}, </span>
        <Link to="https://github.com/egomaragustaf">Ego Maragustaf</Link>
      </p>
      <span>
        <Link
          to="https://github.com/egomaragustaf/v2.egomaragustaf.com"
          className="text-sm">
          Gtihub
        </Link>
      </span>
    </section>
  );
}
