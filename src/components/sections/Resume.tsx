import Image from "next/image";
import Tags from "../tags/Tags";
import { skils } from "../../../data/data";

export default function Resume() {
  return (
    <section>
      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center text-white gap-6 p-10">
        <div className="rounded-full border border-white overflow-hidden">
          <Image
            src=""
            alt="profile picture"
            width={100}
            height={100}
          />
        </div>
        <h2>Caio Valle</h2>
        <h2 className="font-bold text-6xl">Engenheiro de Software</h2>
        
        <p className="text-center text-gray-400">Estudante de Engenharia da Computação com experiência em desenvolvimento 
  back-end (Django, DRF) e front-end (Next.js). Proficiente em automação com 
  Python e n8n, otimizando extração e integração de dados. Busco aplicar 
  conhecimentos em engenharia de software e dados para entregar soluções de valor.</p>
        <Tags tags={skils}></Tags>
      </div>
    </section>
  );
}
