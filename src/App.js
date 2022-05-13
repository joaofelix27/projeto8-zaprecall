import React from 'react'
import TelaFlashcards from "./TelaFlashcards"
import TelaInicial from "./TelaInicial";
export default function App () {
    const [tela, setTela] = React.useState(false);
    return(
        <>
        {
             tela === false ? <TelaInicial setTela={setTela} /> : <TelaFlashcards/>
        }
       
        </>
    )
}