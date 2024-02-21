export interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail:{
        path:string,
        extension:string
    }
    comics:{
      items:{
        name:string,
        resourceURI :string
      },
      available:number
    }
  }

  export interface Comic{
    id: number;
    title: string;
    thumbnail:{
      path:string,
      extension:string
    }
  }

  export interface CharacterWrapper {
    results: Character[];
  }

  export interface ComicWrapper {
    results: Comic[];
  }