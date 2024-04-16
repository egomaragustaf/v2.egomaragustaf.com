import { CardProject } from "~/components/shared/card-project";

export function Projects() {
  return (
    <div className="space-y-10">
      <section className="flex flex-col select-none flex-wrap items-start justify-center gap-4">
        <h1 className="text-primary">Projects</h1>
        <h5>Showcase of my frontend development journey.</h5>
      </section>
      <section className="site-section space-y-10">
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </div>
  );
}
