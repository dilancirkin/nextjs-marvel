"use client";
import { detailCharacter, getCharacterComics } from "@/src/utils/api";
import ComicsCard from "@/src/components/ComicsCard";
import { MdChevronLeft, MdChevronRight,MdArrowBack } from "react-icons/md";

interface CharacterDetailProps {
  params: {
    id: string;
  };
}

const CharacterDetail: React.FC<CharacterDetailProps> = async ({params}) => {
  const { id } = params;
  const character = await detailCharacter(id);
  const { thumbnail, name, description } = character.results[0];

  const comics = await getCharacterComics(id);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };



  return (
<div className="p-10 relative">
<a href="/" className="absolute left-20 top-20">
  <MdArrowBack className="big-orange-arrow opacity-50 cursor-pointer hover:opacity-100" />
</a>
  <div className="container flex flex-col gap-5 items-center">
    <img
      src={`${thumbnail.path}.${thumbnail.extension}`}
      alt={name}
      width={500}
      height={400}
    />
  </div>
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl font-bold my-5">{name}</h1>
    <p className="text-sm font-light mb-10">{description}</p>
  </div>
  <div className="relative flex items-center">
    <MdChevronLeft
      className="opacity-50 cursor-pointer hover:opacity-100"
      onClick={slideLeft}
      size={40}
    />

    <div
      id="slider"
      className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
    >
      <div className="flex gap-5">
        {comics.results.map((comic) => (
          <ComicsCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
    <MdChevronRight
    className="opacity-50 cursor-pointer hover:opacity-100"
    onClick={slideRight}
    size={40}
  />
  </div>
</div>

  );
};

export default CharacterDetail;
