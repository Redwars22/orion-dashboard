import { Button } from "@mui/material";
import { IFinances } from "../../global/types";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

export default function FinancesTable(props: {data: IFinances[]}){
    return(
        <>{props.data.length < 1 ? <span>Não foram encontrados dados financeiros!</span> : <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "25% 25% 25% 25%",
                justifyItems: "start",
                fontWeight: "bold",
                borderBottomWidth: "1px",
                borderBottomColor: "grey",
                borderBottomStyle: "solid",
            }}>
                <span>Ano</span>
                <span>Mês</span>
                <span>Saldo</span>
                <span>Baixar Relatório</span>
            </div>
            <>{props.data.map((item: IFinances) =>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "25% 25% 25% 25%",
                    justifyItems: "start",
                    alignItems: "center"
                }}>
                    <span>{item?.year!}</span>
                    <span>{item?.month!}</span>
                    <span style={{
                        color: item?.amount < 0 ? "red" : "green",
                        fontWeight: "900"
                    }}>R$ {item?.amount!}</span>
                    <Button variant="text" onClick={()=> window.open(item?.fileURL)}>
                        <SystemUpdateAltIcon/>
                    </Button>
                </div>
            )}
            </>
        </>}</>
    )
}