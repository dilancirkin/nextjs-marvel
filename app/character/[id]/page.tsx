"use client";
import { detailCharacter, getCharacterComics } from "@/src/utils/api";
import ComicsCard from "@/src/components/ComicsCard";
import { MdArrowBack } from "react-icons/md";

import Slider from "react-slick";

interface CharacterDetailProps {
  params: {
    id: string;
  };
}

const CharacterDetail: React.FC<CharacterDetailProps> = async ({ params }) => {
  const { id } = params;
  const character = await detailCharacter(id);
  const { thumbnail, name, description } = character.results[0];

  const comics = await getCharacterComics(id);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
      <div className="slider-container">
      <Slider {...settings}>
        {comics.results.map((comic) => (
          <ComicsCard key={comic.id} comic={comic} />
        ))}
     </Slider>
     </div>
    </div>
  );
};

export default CharacterDetail;
