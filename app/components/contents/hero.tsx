import { Button } from "~/components/ui/button";
import { cn } from "~/utils/cn";

export function Hero() {
  return (
    <div className="space-y-10">
      <header>
        <section className="flex flex-col select-none flex-wrap items-start justify-center gap-2 sm:gap-4">
          <h3>Nice to meet you! 👋 </h3>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            I&apos;m{" "}
            <span className="underline underline-offset-[16px] decoration-wavy decoration-primary">
              Ego
            </span>{" "}
            Maragustaf
          </h1>
          <p className="text-lg font-semibold">
            a <b className="text-primary">Front-end Developer</b> who design
            beautifuly simple things, and love what I do
          </p>
          <div className="flex gap-6">
            <Button variant="default">Explore More</Button>
          </div>
        </section>
      </header>

      <article>
        <section>
          <h4>Favorite Tech Stack</h4>
        </section>
      </article>
    </div>
  );
}
