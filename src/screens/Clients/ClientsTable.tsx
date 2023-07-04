import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IClients } from "../../global/types";

export default function ClientsTable(props: {
    data: IClients[]
}) {
    return (
        <>{props.data.length < 1 ? <span>Nenhum cliente foi encontrado!</span> : <>
            <span>{props.data.length} cliente(s) encontrado(s)</span>
            <div style={{
                display: "grid",
                gridTemplateColumns: "25% 15% 36% 18% 8%",
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
            <>{props.data.map((item: IClients) =>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "25% 15% 36% 18% 8%",
                    justifyItems: "start",
                    alignItems: "center"
                }}>
                    <span>{item?.name!}</span>
                    <span>{item?.CPF!}</span>
                    <span>{item?.address!}</span>
                    <span>{item?.phoneNumber!}</span>
                    <Button variant="text" onClick={() => {
                        window.open(
                            `https://wa.me/${item?.phoneNumber?.replace("(", "")
                                .replace(")", "")
                                .replace("-", "")
                                .replace(" ", "")}`
                        )
                    }}>
                        <WhatsAppIcon color="success" />
                    </Button>
                </div>
            )}
            </>
        </>}</>
    )
}