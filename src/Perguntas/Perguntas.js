import React from 'react'
import Pergunta from "./Pergunta";
import Perguntaverso from "./Perguntaverso";
export default  function Perguntas(props){
    const [pergunta, setPergunta] = React.useState(false);
    const [icon,setIcon] = React.useState("play-outline");
    const [classe,setClasse] = React.useState("play1");
    const [cor,setCor] = React.useState("");
    return (
        <>
         {
             pergunta === false ? <Pergunta cor={cor} setPergunta={setPergunta} icon={icon} classe={classe} index={props.index1}/>  : <Perguntaverso contador={props.contador} setContador={props.setContador} setCor={setCor} Q={props.Q} setClasse={setClasse} setIcon={setIcon} setPergunta={setPergunta} index={props.index1} R={props.R}/>
        }
        </>
    )
}