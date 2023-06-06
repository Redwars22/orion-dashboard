import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ClientsTable(props: {
    data: {
        name: string;
        address: string;
        phoneNumber: string;
        id: string;
        CPF: string;
    }[]
}) {

    return (
        <>{props.data.length < 1 ? <span>Nenhum cliente foi encontrado!</span> : <>
        <span>{props.data.length} cliente(s) encontrado(s)</span>
            <div style={{
                display: "grid",
                gridTemplateColumns: "30% 13% 36% 10% 10%",
                justifyItems: "start",
                fontWeight: "bold",
                borderBottomWidth: "1px",
                borderBottomColor: "grey",
                borderBottomStyle: "solid",
            }}>
                <span>Nome</span>
                <span>CPF</span>
                <span>Endereço</span>
                <span>Telefone</span>
                <span>Contato</span>
            </div>
            <>{props.data.map((item: {
                name: string;
                address: string;
                phoneNumber: string;
                id: string;
                CPF: string;
            }) =>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "30% 13% 36% 10% 10%",
                    justifyItems: "start",
                    alignItems: "center"
                }}>
                    <span>{item?.name!}</span>
                    <span>{item?.CPF!}</span>
                    <span>{item?.address!}</span>
                    <span>{item?.phoneNumber!}</span>
                    <Button variant="text">
                        <WhatsAppIcon color="success"/>
                    </Button>
                </div>
            )}
            </>
        </>}</>
    )
}