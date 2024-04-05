import { CardProject } from "~/components/shared/card-project";

export function Projects() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col select-none flex-wrap items-start justify-center gap-4">
        <h1>Project</h1>
        <h5>Showcase of my frontend development journey.</h5>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center lg:place-items-stretch">
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </div>
  );
}
