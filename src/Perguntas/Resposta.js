import React from 'react'
export default function Resposta(props) {
    return (
        <>
         <div className="perguntasVerso">
            <h1>{props.R}</h1>
            <div className="statusResposta">
                <button onClick={function(){
                    props.setIcon("close-circle");
                    props.setPergunta(false);
                    props.setClasse("closed");
                    props.setCor("vermelho");
                    props.setContador(props.setContador);
                }  
             } >Não lembrei</button>
             <button onClick={function(){
                    props.setIcon("help-circle");
                    props.setPergunta(false);
                    props.setClasse("question");
                    props.setCor("laranja");
                    props.setContador(props.setContador);
                }  
             } >Quase não lembrei</button>
             <button onClick={function(){
                    props.setIcon("checkmark-circle");
                    props.setPergunta(false);
                    props.setClasse("check");
                    props.setCor("verde");
                    props.setContador(props.setContador);
                }  
             } >Zap!</button>
            </div>
        </div >
        </>
    )
}