import styles from "../../styles/dashboard.module.scss";
import ClientsTable from "./ClientsTable";
import React from "react";

export default function ClientsScreen() {
    const [data, setData] = React.useState<{
        name: string;
        address: string;
        phoneNumber: string;
    }[]|[]>([]);

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
                marginRight: "auto"
            }}>
                <h2>Lista de Clientes</h2>
            </div>
            <ClientsTable data={data} />
        </div>
    );
}