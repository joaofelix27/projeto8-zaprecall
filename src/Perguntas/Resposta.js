import React from 'react'
import setinha from '../assets/images/setinha2.png'

export default function Resposta(props) {
    const [resposta, setResposta] = React.useState(false);
    return (
        <>
        <div className="perguntasVerso">
            {
                resposta == false ? <h1>{props.Q}</h1>: <h1>{props.R}</h1>
            } 
            {
                resposta == false ? <img src={setinha} onClick={() => setResposta(true)}  className="setinha"></img> : 
                 ( <div className="statusResposta">
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

                )
            } 
            </div >
        </>
    )
       
}
