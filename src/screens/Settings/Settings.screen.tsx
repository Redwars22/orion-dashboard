import React from "react";
import styles from "../../styles/dashboard.module.scss"

export default function SettingsScreen(){
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        async function getBusinessData() {
            const data = await fetch("./api.json");
            const response = await data.json();

            setData(response.business)
        }

        getBusinessData();
    }, []);

    return (
        <div className={styles.dashboard}>
            <div className={styles.row} style={{
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <h2>Configurações</h2>
            </div>
            <hr style={{
                padding: "0.5rem",
                color: "grey",
                width: "1px",
            }} />
            <div>
                <h3>Detalhes da Empresa</h3>

            </div>
        </div>
    )
}