import { Button } from "@mui/material";
import { IFinances, IOrionAPI } from "../../global/types";
import styles from "../../styles/dashboard.module.scss"
import React from "react";
import FinancesTable from "./Finances.table";

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
                marginRight: "auto"
            }}>
                <h2>Detalhes financeiros</h2>
            </div>
            <hr style={{
                padding: "0.5rem",
                color: "grey",
                width: "1px",
            }} />
            <FinancesTable data={data} />
        </div>
    )
}