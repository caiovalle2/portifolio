'use client'
import { useState } from "react";
import Image from "next/image";
import Tags from "../tags/Tags";

interface CardItem {
  image: string;
  title: string;
  description: string;
  tags: { img: string; label: string }[];
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
              <Tags tags={card.tags} />
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="fixed top-0 right-0 h-screen w-1/3 bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full h-screen p-8 overflow-auto relative transition-transform duration-300">
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
            <h2 className="text-3xl text-black font-bold mb-4">{selectedCard.title}</h2>
            <p className="text-gray-700 mb-4">{selectedCard.description}</p>
            <Tags tags={selectedCard.tags} />
          </div>
        </div>
      )}
    </>
  );
}
