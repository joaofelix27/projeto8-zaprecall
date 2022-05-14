import React from 'react'
import Resposta from "./Resposta";
import PerguntaReal from "./PerguntaReal";

export default function Perguntaverso(props) {
    const [resposta, setResposta] = React.useState(false);
    return (
        <>
         {
             resposta === false ? <PerguntaReal setResposta={setResposta} Q={props.Q} />  : <Resposta R={props.R}/>
        }
        </>
    )
       
}
