import Card from "@mui/material/Card";
import styles from "../../../styles/dashboard.module.scss";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

export default function SalesComponent(props: {
    gainsOrLosses: number,
	dailyAverage: number,
	annualGainsOrLosses: number
}) {
    return (<Card variant={"outlined"} sx={{
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        flex: 1
    }}>
        <h2>Resumo de vendas</h2>
        <div style={{
            marginLeft: "auto",
            marginRight: "auto",
            margin: "0.75rem"
        }}>{props.gainsOrLosses > 0 ? <TrendingUpIcon fontSize='large' color="success" /> : <TrendingDownIcon fontSize="large" color="warning"/>}</div>
        <span className={props.gainsOrLosses > 0 ? styles.moneyGreen : styles.moneyRed}>+R$ {props.gainsOrLosses}</span>
        <span>Média diária: +R${props.dailyAverage.toFixed(2)}</span>
 <span>Total anual: +RS{props.annualGainsOrLosses.toFixed(2)}</span>
    </Card>)
}
