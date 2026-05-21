"use client"
import Paginador from "../components/paginador/paginador"
import type { ResponseC } from "@/types/types"
import { useState, useEffect } from "react"
import api from "@/api/api"
import CharacterComponent from "../components/character/character"
import "./page.css"

const CharacterPage = () =>{

    const [charactersData, setCharactersData]=useState<ResponseC|null>(null)

    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState<boolean>(true)
    const [error, setError]=useState<string>("")

    const fetchCharacters = async()=>{
        try{
            await api.get(`/character/?page=${page}`).then((e)=>{
                setCharactersData(e.data)
            }).finally(()=>{
                setLoading(false)
                setError("")
            })
        }catch(e){
            setError(String(e))
        }
    }
    useEffect(()=>{
        fetchCharacters()
    },[page])
    return (
        <div className="containerMain">
            <h1>Bienvenido a personajes</h1>
            {loading && <p>Loading ....</p>}
            
            {charactersData && charactersData.results.map((c)=>{
                return (
                    <CharacterComponent key={c.id} character={c}></CharacterComponent>
                )
            })}
            {error && <p>Error: {error}</p>}

            <Paginador next={!!charactersData?.info.next} previous={!!charactersData?.info.prev} page={page} setPage={(e)=>setPage(e)}></Paginador>

        </div>
    )
}

export default CharacterPage;