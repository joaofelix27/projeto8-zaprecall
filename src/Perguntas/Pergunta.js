export default  function Perguntas(props){
    return (
        <div onClick={()=> props.setPergunta(true) } className="perguntas">
        <h1> Pergunta {props.index} </h1>
            <ion-icon class="play1" name="play-outline"></ion-icon>
        </div >
    )
}