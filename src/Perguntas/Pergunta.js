export default  function Perguntas (props) {
    return (
        <div  className="perguntas">
        <h1 className={props.cor}> Pergunta {props.index} </h1>
            <ion-icon onClick={()=> props.setPergunta(true)} class={props.classe} name={props.icon}></ion-icon>
        </div >
    )
}
