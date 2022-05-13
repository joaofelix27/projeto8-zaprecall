import React from 'react'
import Pergunta from "./Pergunta";
import Perguntaverso from "./Perguntaverso";
export default  function Perguntas(props){
    const [pergunta, setPergunta] = React.useState(false);
    return (
        <>
         {
             pergunta === false ? <Pergunta setPergunta={setPergunta} index={props.index1}/>  : <Perguntaverso Q={props.Q} index={props.index1} R={props.R}/>
        }
        </>
    )
}