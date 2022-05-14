import raioGrande from "../assets/images/image 1.png";
export default function TelaInicial ({setTela}) {
    return (
    <div className="telaInicial">
        < img className="raioGrande" src={raioGrande} alt="Raio" /> 
        <h1 className="titleInicial">ZapRecall</h1>
        <button className="botaoInicial" onClick={()=> setTela(true) }  >Iniciar Recall!</button>
     </div>
    )
    
}