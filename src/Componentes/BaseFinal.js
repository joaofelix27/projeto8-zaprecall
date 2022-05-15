import React from 'react'
import sad from '../assets/images/sad.png'
import party from '../assets/images/party.png'
export default function BaseFinal(props) {

    return (
    <div className="baseFinal">
        <div className='topoBase'>
            {
                props.certas !== props.total ? <img src={sad} /> : <img src={party} />
            }
            {
                props.certas !== props.total ? <h1>Putz...</h1> : <h1 >Parabéns</h1>
            }

        </div>

        {
            props.certas !== props.total ? <h1 className='texto'>Ainda faltam alguns... Mas não desanime!</h1> : <h1 className='texto'>Você não esqueceu de nenhum flashcard!</h1>
        }
        <h1 className='texto'>
            {props.contador}/{props.total} CONCLUÍDOS
        </h1>   
        <div className="iconesFooter">
        {props.novosItens.map((item) =>(
                <ion-icon  class={item.classe} name={item.icone}></ion-icon> 
            )
                )} 

        </div>
        

    </div>

)
}