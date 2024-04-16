import type { MetaFunction } from "@remix-run/node";
import { Projects } from "~/components/contents/projects";
import { Layout } from "~/components/layout/layout";
import { BackgroundGridPage } from "~/components/shared/background";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Route() {
  return (
    <Layout>
      <div className="site-container space-y-20 sm:space-y-32">
        <section className="site-section mt-20">
          <BackgroundGridPage />
          <Projects />
        </section>
      </div>
    </Layout>
  );
}
