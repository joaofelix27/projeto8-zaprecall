export default function Base(props) {
    return (
        <div className="baseInicial">
            <h1>
                {props.contador}/{props.total} CONCLUÍDOS
            </h1>
            <div className="iconesFooter">
                {props.novosItens.map((item) => (
                    <ion-icon class={item.classe} name={item.icone}></ion-icon>
                )
                )}

            </div>

        </div>

    )
}