import Image from "next/image"
import Cards from "../cards/Cards";
import { myProjects } from "../../../data/data";

export default function Projects(){
    
    return (
        <section className="my-8">
            <div className="mx-auto max-w-7xl mt-8 space-y-8 text-white">
            <h2 className="text-4xl font-bold">Projetos</h2>
            <Cards cardsData={myProjects} />
            </div>
        </section>
    )
    
}