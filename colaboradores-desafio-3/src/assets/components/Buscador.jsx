const Buscador = ({buscaColaborador}) => {
    const enviar = (e) => {
    buscaColaborador(e.target.value)
    }
     
    return(
    
        <form>
    
            <input type="search" placeholder="Busca aca al colaborador" onChange={enviar} className="form-control" role="search"/>
    
        </form>
    )
    
    }
    
    export default Buscador;