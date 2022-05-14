export default function Resposta(props) {
    return (
        <>
         <div className="perguntasVerso">
            <h1>{props.R}</h1>
            <div className="statusResposta">
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </div>
        </div >
        </>
    )
}