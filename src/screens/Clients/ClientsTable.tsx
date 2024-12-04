import { Button } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IClients } from "../../global/types";
import styles from "../../styles/layout.module.scss";

export default function ClientsTable(props: {
    data: IClients[]
}) {
    const clientsTableData: IClients[] = props.data.sort((a, b) => {
        const clientA = a.name.toUpperCase();
        const clientB = b.name.toUpperCase();
        
        if (clientA < clientB) {
          return -1;
        }
        if (clientA > clientB) {
          return 1;
        }
        return 0;
      });

    return (
        <>{clientsTableData.length < 1
            ? <span>Nenhum cliente foi encontrado!</span>
            : <>
                <span>{clientsTableData.length} cliente(s) encontrado(s)</span>
                <div className={styles.clientsTableHeader}>
                    <span>Nome</span>
                    <span>CPF</span>
                    <span>Endereço</span>
                    <span>Telefone</span>
                    <span>Contato</span>
                </div>
                <>{clientsTableData.map((item: IClients) =>
                    <div className={styles.clientsTable}>
                        <span>{item?.name!}</span>
                        <span>{item?.CPF!}</span>
                        <span>{item?.address!}</span>
                        <span>{item?.phoneNumber!}</span>
                        <Button variant="contained" color="success" onClick={() => {
                            window.open(
                                `https://wa.me/${item?.phoneNumber?.replace("(", "")
                                    .replace(")", "")
                                    .replace("-", "")
                                    .replace(" ", "")}`
                            )
                        }}>
                            <WhatsAppIcon color="#fff" />
                        </Button>
                    </div>
                )}
                </>
            </>}
        </>
    )
}