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
                    props.setContador();
                    props.setQtdIcones("close-circle","closed");
                }  
             } >Não lembrei</button>
             <button onClick={function(){
                    props.setIcon("help-circle");
                    props.setPergunta(false);
                    props.setClasse("question");
                    props.setCor("laranja");
                    props.setContador();
                    props.setCertas();
                    props.setQtdIcones("help-circle","question");
                }  
             } >Quase não lembrei</button>
             <button onClick={function(){
                    props.setIcon("checkmark-circle");
                    props.setPergunta(false);
                    props.setClasse("check");
                    props.setCor("verde");
                    props.setContador();
                    props.setCertas();
                    props.setQtdIcones("checkmark-circle","check");
                }  
             } >Zap!</button>
            </div>
        </div >
        </>
    )
}