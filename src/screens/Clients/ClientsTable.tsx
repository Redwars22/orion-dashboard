export default function ClientsTable(props: { data: any[] }) {
    return (
        <>{props.data.length < 1 ? <span>Nenhum cliente foi encontrado!</span> : <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "33% 33% 13%"
            }}>
                <span>Nome</span>
                <span>Endereço</span>
                <span>Telefone</span>
            </div>
            {props.data.map(() => {
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "33% 33% 13%"
                }}>
                    <span>{props.data?.name!}</span>
                    <span>{props.data?.address!}</span>
                    <span>{props.data?.phoneNumber!}</span>
                </div>
            })}
        </>}</>
    )
}