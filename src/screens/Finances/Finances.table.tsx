import { Button } from "@mui/material";
import { IFinances } from "../../global/types";

export default function FinancesTable(props: {data: IFinances[]}){
    return(
        <>{props.data.length < 1 ? <span>Não foram encontrados dados financeiros!</span> : <>
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
                <span>Ano</span>
                <span>Mês</span>
                <span>Saldo</span>
                <span>Baixar Relatório</span>
            </div>
            <>{props.data.map((item: IFinances) =>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "30% 13% 36% 10% 10%",
                    justifyItems: "start",
                    alignItems: "center"
                }}>
                    <span>{item?.year!}</span>
                    <span>{item?.month!}</span>
                    <span style={{
                        color: item?.amount < 0 ? "red" : "green",
                        fontWeight: "900"
                    }}>{item?.amount!}</span>
                    <Button variant="text" onClick={()=> window.open(item?.fileURL)}>
                        
                    </Button>
                </div>
            )}
            </>
        </>}</>
    )
}