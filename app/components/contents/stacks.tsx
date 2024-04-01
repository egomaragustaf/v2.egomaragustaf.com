import { Link } from "@remix-run/react";
import {
  SiNextdotjs,
  SiReact,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

export function Stacks() {
  return (
    <section className="flex flex-col items-start justify-center gap-4">
      <h4>Favorite Tech Stack & Tools</h4>

      <TooltipProvider>
        <ul className="flex item-center gap-6">
          {techStackItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-primary transition duration-500">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to={item.url}>{item.icon}</Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ul>
      </TooltipProvider>
    </section>
  );
}

export const techStackItems = [
  {
    name: "Typescript",
    icon: <SiTypescript size={32} />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <SiReact size={32} />,
    url: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={32} />,
    url: "https://tailwindcss.com/",
  },
  {
    name: "Remix",
    icon: <SiRemix size={28} />,
    url: "https://remix.run/",
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs size={32} />,
    url: "https://nextjs.org/",
  },
  {
    name: "Visual Studio",
    icon: <SiVisualstudio size={32} />,
    url: "https://code.visualstudio.com/",
  },
];
