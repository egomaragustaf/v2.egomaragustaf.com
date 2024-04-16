import { Link } from "@remix-run/react";
import { getCurrentYear } from "~/utils/datetime";
import { BackgroundGridFooter } from "~/components/shared/background";

export function Footer() {
  return (
    <footer className="mt-40 space-y-4 p-4">
      <SiteFooterSource />
    </footer>
  );
}

function SiteFooterSource() {
  return (
    <section className="relative site-section py-10">
      <BackgroundGridFooter />
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-flow-col">
        <div className="col-span-3 space-y-4">
          <h5>Hello!</h5>
          <p>
            I&apos;m Ego - a front-end developer, blogger, and learner. Thanks
            for checking out my site!
          </p>

          <p className="text-left">
            <span>&copy; {getCurrentYear()} </span>
            <Link to="https://github.com/egomaragustaf">Ego Maragustaf</Link>
          </p>
        </div>
        <ul className="space-y-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
        <ul className="space-y-4">
          <li>Blog</li>
          <li>Notes</li>
          <li>T.I.L</li>
        </ul>
        <ul className="space-y-4">
          <li>Blog</li>
          <li>Notes</li>
          <li>T.I.L</li>
        </ul>
      </div>
    </section>
  );
}
