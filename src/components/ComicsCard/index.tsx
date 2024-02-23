import { Comic } from "@/src/models/types";

interface ComicCardProps {
  comic: Comic;
}

const ComicsCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
<div className="w-80 h-full text-center max-w-xl bg-dark dark:bg-gray-800 border border-gray-200 rounded shadow dark:border-gray-700">
  <img
    className="p-2 rounded-t-lg w-full h-auto"
    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
    alt={comic.title}
  />
</div>


  );
};

export default ComicsCard;
