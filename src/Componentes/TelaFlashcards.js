import React from 'react'
import Topo from "./Topo"
import Base from "./Base"
import Perguntas from "../Perguntas/Perguntas"
import BaseFinal from './BaseFinal';

export default function TelaFlashcards() {
    const [contador, setContador] = React.useState(0);
    const [certas, setCertas] = React.useState(0);
    const [itens, setItens] = React.useState([]);
    const perguntas =[
        {
            Q: "O que é JSX?",
            R: "Uma extensão de linguagem do JavaScript"

        },
        {
            Q: "O React é __",
            R: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            Q: "Componentes devem iniciar com __",
            R: "letra maiúscula"
        },
        {
            Q: "Podemos colocar __ dentro do JSX",
            R: "expressões"
        }
        ,
        {
            Q: "O ReactDOM nos ajuda __ ",
            R: "interagindo com a DOM para colocar componentes React na mesma"
        }
        ,
        {
            Q: "Usamos o npm para __",
            R: "gerenciar os pacotes necessários e suas dependências"
        }
        ,
        {
            Q: "Usamos props para __",
            R: "passar diferentes informações para componentes"
        }
        ,
        {
            Q: "Usamos estado (state) para __ ",
            R: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        }
    
    ]
    function aumentarQtd() {
		setContador(contador+1);
        console.log(contador)
	}
    function aumentarQtd1() {
		setCertas(certas+1);
        console.log(certas)
	}
    function aumentarQtdIcones(novoitem) {
		const novoItens = [...itens, novoitem];
		setItens(novoItens);
        console.log(itens)
	}
    const arrayNovo=[...perguntas]
    arrayNovo.sort( () => Math.random() - 0.5) 
    return (
        <div className="telaFlashcards">
            <Topo />
            {arrayNovo.map((pergunta,index) =>(
                <Perguntas
                index1={index+1}
                Q={pergunta.Q}
                R={pergunta.R}
                setContador={aumentarQtd}
                contador={contador}
                setCertas={aumentarQtd1}
                certas={certas}
                setQtdIcones={aumentarQtdIcones}
                />
            )
                )} 
                {
                    contador !== arrayNovo.length ? <Base novosItens={itens} total={perguntas.length} contador={contador} /> : <BaseFinal novosItens={itens} certas={certas} total={perguntas.length} contador={contador}/>
                }
           
        </div>
    )

}