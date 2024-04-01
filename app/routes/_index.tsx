import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/contents/hero";
import { Layout } from "~/components/layout/layout";
import { BackgroundGrid } from "~/components/shared/background";

export const meta: MetaFunction = () => {
  return [
    { title: "Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="mx-auto min-h-screen w-full max-w-7xl space-y-20 px-4 sm:space-y-32">
        <section className="site-section mt-20">
          <BackgroundGrid />
          <Hero />
        </section>
      </div>
    </Layout>
  );
}
