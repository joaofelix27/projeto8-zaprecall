import Topo from "./Topo"
import Base from "./Base"
import Perguntas from "./Perguntas"

export default function TelaFlashcards() {
    const perguntas =[
        {
            nome: "teste1"
        },
        {
            nome: "teste2"
        },
        {
            nome: "teste3"
        },
        {
            nome: "teste4"
        }
    
    ]
    return (
        <div className="telaFlashcards">
            <Topo />
            {perguntas.map((pergunta,index) =>(
                <Perguntas
                index1={index+1}
                />
            )
                )}
            <Base />
        </div>
    )

}