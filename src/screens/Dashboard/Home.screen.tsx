import { useState, useEffect, useRef } from 'react';

import styles from "../../styles/dashboard.module.scss";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import SalesComponent from './Cards/Sales';
import FinancesChartComponent from './Cards/FinancesChart';
import TasksComponent from './Cards/Tasks';
import EventsComponent from './Cards/Events';
import {IOrionAPI} from "../../global/types";
import LockPersonIcon from '@mui/icons-material/LockPerson';

export default function HomeScreen() {
    const [data, setData] = useState<null | {
        business: IOrionAPI
    }>(null);

    useEffect(() => {
        async function getBusinessData() {
            const data = await fetch("./api.json");
            const response = await data.json();

            setData(response)
        }

        getBusinessData();
    }, [])

    return (<div className={styles.dashboard}>
        <div>
            <LockPersonIcon/>
            <span>
                Você está no modo somente visualização porque sua conta não tem permissões de edição. Contate seu administrador.
            </span>
        </div>
        <div className={styles.row} style={{
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <h2>Painel de controle da {data?.business?.companyName}</h2>
        </div>
        <div className={styles.row}>
            <SalesComponent gainsOrLosses={data?.business?.dailyGainsOrLosses!}
                annualGainsOrLosses={data?.business?.annualGainsOrLosses!}
                dailyAverage={data?.business?.dailyAverage!}
            />
            <FinancesChartComponent />
        </div>
        <div className={styles.row}>
            <TasksComponent data={data?.business?.projects!}/>
            <EventsComponent />
        </div>
    </div>
    )
}
