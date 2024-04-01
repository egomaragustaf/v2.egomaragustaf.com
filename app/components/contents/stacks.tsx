import {
  SiNextdotjs,
  SiReact,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
} from "react-icons/si";

interface StackItem {
  name: String;
  icon: String;
  url: String;
}

export function Stacks() {
  return (
    <section className="flex flex-col items-start justify-center gap-4">
      <h4>Favorite Tech Stack & Tools</h4>
      <ul className="flex items-center gap-6">
        {techStackItems.map((item) => (
          <li
            key={item.name}
            className="hover:text-primary transition duration-500">
            {item.icon}
          </li>
        ))}
      </ul>
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
