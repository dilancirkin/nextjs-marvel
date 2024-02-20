import { detailCharacter } from '@/src/utils/api';
import Image from 'next/image';

interface CharacterDetailProps {
  params: {
    id: string;
  };
}

const CharacterDetail: React.FC<CharacterDetailProps> = async ({ params }) => {
  const { id } = params;
  const character = await detailCharacter(id);
  const { thumbnail, name, description } = character.results[0];

  return (
    <div className='container flex flex-col gap-5 items-center'>
      <Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={name}
        width={500}
        height={400}
      />
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-3xl font-bold mb-4'>{name}</h1>
        <p className='text-sm font-light'>{description}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;