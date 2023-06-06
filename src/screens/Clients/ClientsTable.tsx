export default function ClientsTable(props: { data: [] }) {
    return (
        <>{props.data.length >= 1 ? <span>Nenhum cliente foi encontrado!</span> : <></>}</>
    )
}