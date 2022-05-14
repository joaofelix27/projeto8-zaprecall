export default  function Perguntas(props){
    return (
        <div  className="perguntas">
        <h1> Pergunta {props.index} </h1>
            <ion-icon onClick={()=> props.setPergunta(true) } class="play1" name="play-outline"></ion-icon>
        </div >
    )
}