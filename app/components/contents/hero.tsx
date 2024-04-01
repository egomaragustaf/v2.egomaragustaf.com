import { Button } from "~/components/ui/button";
import { Stacks } from "~/components/contents/stacks";

export function Hero() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col select-none flex-wrap items-start justify-center gap-2">
        <h3>Nice to meet you! 👋 </h3>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          I&apos;m{" "}
          <span className="underline underline-offset-[12px] decoration-wavy decoration-primary">
            Ego Maragustaf
          </span>
        </h1>
        <p className="text-lg font-semibold">
          a <b className="text-primary">Front-end Developer</b> who design
          beautifuly simple things, and love what I do
        </p>
        <div className="flex gap-6 mt-6">
          <Button variant="default">Explore More</Button>
        </div>
      </section>

      <Stacks />
    </div>
  );
}
