import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Layout } from "~/components/layout/layout";
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
      <div className="site-container">
        <section className="site-section flex flex-col gap-4">
          <h3>Hi!</h3>
          <h1>
            I’m <span className="text-primary">Ego Maragustaf</span>
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
    </Layout>
  );
}
