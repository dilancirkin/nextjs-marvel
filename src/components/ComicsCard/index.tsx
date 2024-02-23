import { Comic } from "@/src/models/types";

interface ComicCardProps {
  comic: Comic;
}

const ComicsCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
<div >
  <img
    className="p-2 rounded-t-lg w-full h-80"
    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
    alt={comic.title}
  />
</div>


  );
};

export default ComicsCard;
