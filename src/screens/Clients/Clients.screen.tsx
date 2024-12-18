import styles from "../../styles/dashboard.module.scss";
import ClientsTable from "./ClientsTable";
import React from "react";
import {IClients} from "../../global/types";

export default function ClientsScreen() {
    const [data, setData] = React.useState<IClients[]|[]>([]);

    React.useEffect(() => {
        async function getBusinessData() {
            const data = await fetch("./api.json");
            const response = await data.json();

            setData(response.business.clients)
        }

        getBusinessData();
    }, []);

    return (
        <div className={styles.dashboard}>
            <div className={styles.row} style={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "12px"
            }}>
                <h2>LISTA DE CLIENTES</h2>
            </div>
            <ClientsTable data={data} />
        </div>
    );
}