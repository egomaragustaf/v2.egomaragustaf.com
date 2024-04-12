import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/contents/hero";
import { Layout } from "~/components/layout/layout";
import { BackgroundGridLarge } from "~/components/shared/background";

export const meta: MetaFunction = () => {
  return [
    { title: "Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="site-container space-y-20 sm:space-y-32">
        <section className="site-section mt-20">
          <BackgroundGridLarge />
          <Hero />
        </section>
      </div>
    </Layout>
  );
}
