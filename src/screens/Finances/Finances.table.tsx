import { Button } from "@mui/material";
import { IFinances } from "../../global/types";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import styles from "../../styles/layout.module.scss";

export default function FinancesTable(props: { data: IFinances[] }) {
    return (
        <>{props.data.length < 1
            ? <span>Não foram encontrados dados financeiros!</span>
            : <>
                <div className={styles.financialDataTableHeader}>
                    <span>Ano</span>
                    <span>Mês</span>
                    <span>Saldo</span>
                    <span>Baixar Relatório</span>
                </div>
                <>{props.data.map((item: IFinances) =>
                    <div className={styles.financialDataTable}>
                        <span>{item?.year!}</span>
                        <span>{item?.month!}</span>
                        <span style={{
                            color: item?.amount < 0 ? "#ff1744" : "#4caf50",
                            fontWeight: "900"
                        }}>R$ {item?.amount!}</span>
                        <Button variant="contained" color="error" onClick={() => window.open(item?.fileURL)}>
                            <SystemUpdateAltIcon />
                            Baixar relatório
                        </Button>
                    </div>
                )}
                </>
            </>}
        </>
    )
}