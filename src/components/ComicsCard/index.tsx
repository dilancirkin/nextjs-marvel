import { Comic } from "@/src/models/types";
import Image from "next/image";

interface ComicCardProps {
  character: Comic;
}

const ComicsCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <div className="card w-full bg-base-200 shadow-xl">
      <Image
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        width={200}
        height={200}
      />
      <div className="card-body">
        <h2 className="card-title">{comic.title}</h2>
        
      </div>
    </div>
  );
};

export default ComicsCard;
