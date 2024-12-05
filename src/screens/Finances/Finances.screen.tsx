import { Button } from "@mui/material";
import { IFinances, IOrionAPI } from "../../global/types";
import styles from "../../styles/dashboard.module.scss"
import React from "react";
import FinancesTable from "./Finances.table";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

export default function FinancesScreen() {
    const [data, setData] = React.useState<IFinances[] | []>([]);

    React.useEffect(() => {
        async function getBusinessData() {
            const data = await fetch("./api.json");
            const response = await data.json();

            setData(response.business.finances)
        }

        getBusinessData();
    }, []);

    return (
        <div className={styles.dashboard}>
            <div className={styles.row} style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex",
                flexDirection: "column"
            }}>
                <h2>Detalhes financeiros</h2>
                <Button variant="contained" color="error" onClick={() => window.open("")}>
                    <SystemUpdateAltIcon />
                    Baixar relatório completo
                </Button>
            </div>
            <FinancesTable data={data} />
        </div>
    )
}
