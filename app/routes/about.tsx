import type { MetaFunction } from "@remix-run/node";
import { About } from "~/components/contents/about";
import { Layout } from "~/components/layout/layout";
import { BackgroundGridSmall } from "~/components/shared/background";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Route() {
  return (
    <Layout>
      <div className="mx-auto min-h-screen w-full max-w-7xl space-y-20 px-4 sm:space-y-32">
        <section className="site-section mt-20">
          <BackgroundGridSmall />
          <About />
        </section>
      </div>
    </Layout>
  );
}
