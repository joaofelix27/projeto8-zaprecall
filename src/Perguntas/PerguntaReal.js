import setinha from '../assets/images/setinha2.png'
export default function PerguntaReal(props) {
    return (
        <>
            <div className="perguntasVerso">
            <h1>{props.Q}</h1>
            <img src={setinha} onClick={() => props.setResposta(true)}  className="setinha"></img>
            </div >
        </>
    )
}