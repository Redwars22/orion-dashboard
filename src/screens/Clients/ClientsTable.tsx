import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function ClientsTable(props: {
    data: {
        name: string;
        address: string;
        phoneNumber: string;
    }[]
}) {

    return (
        <>{props.data.length < 1 ? <span>Nenhum cliente foi encontrado!</span> : <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "33% 33% 13%",
                textAlign: "center"
            }}>
                <span>Nome</span>
                <span>Endereço</span>
                <span>Telefone</span>
            </div>
            <>{props.data.map((item: {
                name: string;
                address: string;
                phoneNumber: string;
            }) =>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "33% 33% 13% 13%",
                    textAlign: "center"
                }}>
                    <span>{item?.name!}</span>
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