import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects | Ego Maragustaf" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-6xl flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-xl">Projects</h1>
        <p className="text-blue-500 text-center max-w-4xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          numquam harum tempore dolorem nam, id nostrum ipsa reprehenderit est
          culpa iure eligendi nemo, sit et fugit, unde beatae earum eius.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
