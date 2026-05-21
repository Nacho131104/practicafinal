import "./paginador.css"

const Paginador = ({next,previous,page,setPage}:{next:boolean, previous:boolean,page: number, setPage:(page:number)=>void}) =>{

    return (
        <div className="paginadorContainer">
            {previous && <button onClick={()=>{setPage(page-1)}} > {"<-"}</button>}
            <p>{page}</p>
            {next && <button onClick={()=>{setPage(page+1)}} > {"->"}</button>}
        </div>
    )
}

export default Paginador;