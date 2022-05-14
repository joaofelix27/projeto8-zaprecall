import React from 'react'
import Resposta from "./Resposta";
import PerguntaReal from "./PerguntaReal";

export default function Perguntaverso(props) {
    const [resposta, setResposta] = React.useState(false);
    return (
        <>
         {
             resposta === false ? <PerguntaReal setResposta={setResposta} Q={props.Q} />  : <Resposta setIcon={props.setIcon} setContador={props.setContador} setCor={props.setCor} setClasse={props.setClasse} setPergunta={props.setPergunta} R={props.R}/>
        }
        </>
    )
       
}
