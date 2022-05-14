import setinha from "../assets/images/setinha2.png"
import React from 'react-dom'
export default function Perguntaverso(props) {
    // const [resposta, setResposta] = React.useState(props.Q);
    return (
        //    <div className="perguntasVerso">
        //     <h1>{props.Q}</h1>
        //     <img src={setinha} onClick={() => setResposta(props.R)}  className="setinha"></img>
        //     </div >
        <div className="perguntasVerso">
            <h1>{props.R}</h1>
            <div className="statusResposta">
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </div>
        </div >
    )
}
