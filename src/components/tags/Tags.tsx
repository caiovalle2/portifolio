import Image from "next/image";

interface Tag {
  img: string;
  label: string;
}

interface TagsProps {
  tags: Tag[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {tags.map((item, index) => (
        <li
          key={index}
          className="flex items-center bg-black text-white p-1 px-4 rounded-full gap-2 font-bold"
        >
          {item.img ? <Image src={item.img} alt={item.label} width={20} height={20} /> : null}
          <h2>{item.label}</h2>
        </li>
      ))}
    </ul>
  );
}