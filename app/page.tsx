import { getCharacters } from "@/src/utils/api";
import CharacterCard from "@/src/components/CharacterCard";

export default async function Home() {
  const characters = await getCharacters();
  console.log(characters);
  if (!characters) {
    return <h1>Loading...</h1>;
  }

  return (
    <main>
      <div className="container text-center mt-10">
        <h1 className="text-3xl font-bold underline">Characters</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-10">
          {characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </main>
  );
}
