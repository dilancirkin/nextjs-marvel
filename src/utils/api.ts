import { CharacterWrapper , ComicWrapper} from "../models/types";
import md5 from 'md5';

const URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_KEY= '01f80549575103b56a658fbe6b67dd17';
const PRIVATE_KEY = `be664ea704d82cc2646d41b606481f42dec80792`;

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp: string) => md5(timeStamp+PRIVATE_KEY+PUBLIC_KEY);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText)
      }
  const data = await response.json();
  return data.data as T;
}

export const getCharacters = async (offset: number,limit:number): Promise<CharacterWrapper> => {
  const url = `${URL}/characters?limit=${limit}&offset=${offset}&${query}`;
  const response = await fetch(url);
  return handleResponse<CharacterWrapper>(response);
}

export const detailCharacter = async (characterId: string): Promise<CharacterWrapper> => {
    const url = `${URL}/characters/${characterId}?${query}`;
    const response = await fetch(url);
    return handleResponse<CharacterWrapper>(response);
}

export const getCharacterComics = async (characterId: string): Promise<ComicWrapper> => {
  const url = `${URL}/characters/${characterId}/comics?orderBy=-onsaleDate&limit=10&${query}`;
  const response = await fetch(url);
  return handleResponse<ComicWrapper>(response);
}
  