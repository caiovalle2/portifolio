'use client'
import { useState } from "react";
import Image from "next/image";
import Tags from "../tags/Tags";

interface CardItem {
  image: string;
  title: string;
  description: string;
  tags: { img: string; label: string }[];
  githubLink: string;
}

interface CardsProps {
  cardsData: CardItem[];
}

export default function Cards({ cardsData }: CardsProps) {
  const [selectedCard, setSelectedCard] = useState<CardItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white w-[400px] text-black shadow-lg rounded-lg overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedCard(card)}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={200}
              className="object-cover h-[200]"
            />
            <div className="flex flex-col gap-4 p-4 mt-2">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-gray-700 line-clamp-4">{card.description}</p>
              <Tags tags={card.tags.slice(0, 3)} />
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed top-0 right-0 h-screen w-full md:w-1/3 bg-opacity-50 flex justify-end z-50 md:p-8">
          <div className="bg-gray-900 p-8 w-full rounded-lg md:rounded-xl shadow-2xl overflow-auto relative transition-transform duration-300">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-3xl"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>

            <Image
              src={selectedCard.image}
              alt={selectedCard.title}
              width={600}
              height={300}
              className="object-cover h-[300] rounded-xl mb-4"
            />
            <h2 className="text-4xl text-white font-bold mb-4">{selectedCard.title}</h2>
            <p className="text-gray-400 mb-2">{selectedCard.description}</p>
            <a
                href={selectedCard.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 mb-4 p-2 rounded-full border-2 border-gray-700 bg-gray-800 hover:bg-gray-700"
                aria-label="Ver projeto no GitHub"
              >
                <Image
                  src="/github.png"
                  alt="GitHub Icon"
                  width={30}
                  height={30}
                />
                <span className="ml-2 text-white font-bold">GitHub</span>
              </a>
            <Tags tags={selectedCard.tags} />
          </div>
        </div>
      )}
    </>
  );
}
