"use client"
import Link from "next/link"
import "./navigator.css"
import { useRouter } from "next/navigation"
const opciones = [
    {name: "characters", url:"/character"},
    {name: "films", url: "/film"},
    {name: "Planets", url: "/planet"}
]

const NavigatorComponent = () =>{

    const router=useRouter()

    return (
        <div className="headerContainer">
            {opciones.map((o)=>{
                return (
                    <Link className="Link" key={o.name} href={o.url}>{o.name}</Link>
                )
            })}
        <button onClick={()=>{router.push("/")}}>Salir</button>
        </div>

    )
}

export default NavigatorComponent; 