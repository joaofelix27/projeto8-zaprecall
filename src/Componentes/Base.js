export default function Base (props) {
    return (
        <div className="baseInicial">
            <h1>
            {props.contador}/{props.total} CONCLUÍDOS
            </h1>
            
        </div>

    )
}