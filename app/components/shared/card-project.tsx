import { Link } from "@remix-run/react";
import { Card, CardContent } from "~/components/ui/card";

export function CardProject() {
  return (
    <Card className="w-full max-w-sm md:max-w-full rounded-xl overflow-hidden flex flex-col md:flex-row mx-auto">
      <div className="aspect-card overflow-hidden">
        <img
          alt="Project 1"
          className="aspect object-top"
          height={225}
          src="https://placehold.co/400x225"
          style={{
            aspectRatio: "400/225",
            objectFit: "cover",
          }}
          width={400}
        />
      </div>
      <CardContent className="p-6">
        <div className="space-y-1.5">
          <h4 className="tracking-tight">Project Title</h4>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            possimus ab! Voluptates debitis animi est error ullam.
          </p>
          <ul className="flex flex-wrap gap-2 tracking-tight">
            <li className="bg-border/50 rounded-full px-3 py-1 text-gray-500 dark:text-gray-400">
              Next.js
            </li>
            <li className="bg-border/50 rounded-full px-3 py-1 text-gray-500 dark:text-gray-400">
              Tailwind CSS
            </li>
            <li className="bg-border/50 rounded-full px-3 py-1 text-gray-500 dark:text-gray-400">
              shadcn
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800" />
      </CardContent>
      <div className="border-t border-gray-200 dark:border-gray-800 md:hidden" />
      <CardContent className="p-6 md:hidden">
        <div className="grid gap-1.5">
          <Link
            className="flex items-center space-x-2.5 text-sm font-medium tracking-tight"
            to="#">
            <span>View on GitHub</span>
          </Link>
          <Link
            className="flex items-center space-x-2.5 text-sm font-medium tracking-tight"
            to="#">
            <span>Live Demo</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
