"use client"
import type { Character } from "@/types/types"
import { useRouter } from "next/navigation"
import "./character.css"


const CharacterComponent = ({character}:{character:Character}) =>{
    const router=useRouter()
    return (
        <div className="characterContainer">
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name}/>
            <p>Gender: {character.gender}</p>
            <p>Specie: {character.species}</p>
            <button >Ver mas</button>
        </div>
    )
}

export default CharacterComponent;