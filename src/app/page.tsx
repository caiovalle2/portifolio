import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import { experiences } from "../../data/data";

export default function Home() {
  return (
    <div>
      <Resume></Resume>
      <Experience experiences={experiences}></Experience>
      <Projects></Projects>
    </div>
  );
}
