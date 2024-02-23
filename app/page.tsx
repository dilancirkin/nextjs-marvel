import { useState, useEffect } from 'react';
import { getCharacters } from "@/src/utils/api";
import CharacterCard from "@/src/components/CharacterCard";
import { LoadMore } from '@/src/components/LoadMore';

export default async function Home() {
  const characters =await getCharacters(0, 30);

  return (
    <div className="p-10">
      <img
        className="w-full object-cover"
        src="https://pbs.twimg.com/media/CQRG7KvUwAAKmc2?format=jpg&name=medium"
        alt=""
      />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold underline text-yellow-600">MARVEL CHARACTERS</h1>
      </div>
      <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 items-center mt-5 px-10 py-10">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
        <LoadMore/>
          
      </div>
     
    </div>
  );
}
