import type { MetaFunction } from "@remix-run/node";
import { Layout } from "~/components/layout/layout";
import { BackgroundGrid } from "~/components/shared/background";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <BackgroundGrid>
        <div className="site-container">
          <section className="site-section flex flex-col gap-6">
            <h3>Nice to meet you!</h3>
            <h1 className="text-4xl lg:text-6xl font-bold">
              I&apos;m{" "}
              <span className="text-primary underline underline-offset-[16px]">
                Ego Maragustaf
              </span>
            </h1>
            <p className="text-lg">
              a <b>front-end developer</b> who design beautifuly simple things,
              and love what I do
            </p>
            <div className="flex gap-6">
              <Button>Get in Touch</Button>
              <Button variant="outline">Resume</Button>
            </div>
          </section>
        </div>
      </BackgroundGrid>
    </Layout>
  );
}
