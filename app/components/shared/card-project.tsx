import { SiRemix, SiTailwindcss, SiTypescript } from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export function CardProject() {
  return (
    <Card className="w-auto">
      <CardHeader>
        <CardTitle>Consneakers</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis,
          assumenda.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src="https://placehold.co/400x200"
          alt="consneakers"
          className="w-auto"
        />
      </CardContent>
      <CardContent>
        <div className="flex gap-4 items-center justify-start">
          <SiTypescript size={24} />
          <SiRemix size={20} />
          <SiTailwindcss size={24} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>Github</span>
        <span>Live preview</span>
      </CardFooter>
    </Card>
  );
}
