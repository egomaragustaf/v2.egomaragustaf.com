import { Link } from "@remix-run/react";

import { Button } from "~/components/ui/button";
import { Stacks } from "~/components/contents/stacks";

export function Hero() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col select-none flex-wrap items-start justify-center gap-2">
        <h4>Hello, nice to meet you! 👋 </h4>
        <h1 className="mb-6">
          I&apos;m <span className="text-primary">Ego Maragustaf</span>
        </h1>
        <h6>
          a <b className="text-primary">Front-end Developer</b> who design
          beautifuly simple things, and love what I do
        </h6>
        <div className="flex gap-6 mt-6">
          <Button variant="default" asChild>
            <Link to="/about">Explore More</Link>
          </Button>
        </div>
      </section>
      <Stacks />
    </div>
  );
}
