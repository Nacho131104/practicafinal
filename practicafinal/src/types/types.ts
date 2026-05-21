




export type ResponseC  = {
    info: Info,
    results: Character[]
}

export type Info ={
    count: number,
    pages: number,
    next: string,
    prev: string,
}

export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    location: string [],
    image: string,
    episode: string [],
    url: string,
}

