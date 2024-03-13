import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-6xl flex flex-col justify-center items-center">
        <h1 className="text-xl">Welcome to egomaragustaf.com</h1>
        <p className="text-blue-500 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          numquam harum tempore dolorem nam, id nostrum ipsa reprehenderit est
          culpa iure eligendi nemo, sit et fugit, unde beatae earum eius.
        </p>
      </div>
    </div>
  );
}
