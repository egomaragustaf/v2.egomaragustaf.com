import type { MetaFunction } from "@remix-run/node";
import { About } from "~/components/contents/about";
import { Layout } from "~/components/layout/layout";
import { BackgroundGridPage } from "~/components/shared/background";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Route() {
  return (
    <Layout>
      <div className="site-container space-y-20 sm:space-y-32">
        <section className="site-section mt-10 lg:mt-20">
          <BackgroundGridPage />
          <About />
        </section>
      </div>
    </Layout>
  );
}
