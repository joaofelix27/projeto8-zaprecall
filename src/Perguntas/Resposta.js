export default function Resposta(props) {
    return (
        <>
         <div className="perguntasVerso">
            <h1>{props.R}</h1>
            <div className="statusResposta">
                <button onClick={function(){
                    props.setIcon("close-circle")
                    props.setPergunta(false)
                    props.setClasse("closed")
                }  
             } >Não lembrei</button>
             <button onClick={function(){
                    props.setIcon("help-circle")
                    props.setPergunta(false)
                    props.setClasse("question")
                }  
             } >Quase não lembrei</button>
             <button onClick={function(){
                    props.setIcon("checkmark-circle")
                    props.setPergunta(false)
                    props.setClasse("check")
                }  
             } >Zap!</button>
            </div>
        </div >
        </>
    )
}