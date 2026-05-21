"use client";
import api from "@/api/api";
import type { Character } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./pageextra.css"
import { useParams } from "next/navigation";

const CharacterById = () =>{
    const {id}=useParams()
    const [character, setCharacter] = useState<Character|null>(null)

    const router=useRouter()
    useEffect (()=>{
        api.get(`/character/${id}`).then((e)=>{
            setCharacter(e.data)
        })
    },[])

    return (
        <div className="ContainerExtra">
            <h1>{character?.name}</h1>
            <img src={character?.image} alt={character?.name}></img>
            <p>Name: {character?.name}</p>
            <p>Episodes: </p>
            {character?.episode.map((e)=>{
                return(
                    <p key={e} className="link">{e}</p>
                )
            })}
            <button onClick={()=>{router.back()}}>volver</button>
        </div>
    )
}
export default CharacterById;