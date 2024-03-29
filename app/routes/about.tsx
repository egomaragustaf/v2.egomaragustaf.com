import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Layout } from "~/components/layout/layout";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="site-container">
        <section className="site-section space-y-10">
          <h1 className="text-xl text-primary text-center">About Me</h1>
          <p className="text-center max-w-4xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            numquam harum tempore dolorem nam, id nostrum ipsa reprehenderit est
            culpa iure eligendi nemo, sit et fugit, unde beatae earum eius.
          </p>
        </section>
      </div>
    </Layout>
  );
}
