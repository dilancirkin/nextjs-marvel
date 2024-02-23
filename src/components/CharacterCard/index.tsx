import { Character } from "@/src/models/types";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="w-full text-center bg-dark dark:bg-gray-800 border border-gray-200 rounded-lg shadow dark:border-gray-700">
      <figure>
        <img
          className="p-8 rounded-t-lg w-full h-80 object-cover"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={`${character.name}-Pic`}
        />
      </figure>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white mb-5">
            {character.name}
          </h5>
        </a>
        <div className="flex items-center justify-center">
          <a
            href={`character/${character.id}`}
            className="text-white bg-yellow-600 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Character Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
