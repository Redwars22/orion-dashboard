import Card from "@mui/material/Card";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import FaceIcon from '@mui/icons-material/Face';
import PollIcon from '@mui/icons-material/Poll';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { fakerPT_BR } from '@faker-js/faker';

export default function FinancesChartComponent() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const labels = ['Jun', 'Jul', 'Aug']

    return (
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1,
            backgroundColor: "#151b1c"
        }}>
            <h2>Resumo Financeiro</h2>
            <Line
                datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Lucros e Vendas',
                            data: labels.map(() => fakerPT_BR.datatype.number({ min: -1000, max: 1000 })),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: 'Despesas',
                            data: labels.map(() => fakerPT_BR.datatype.number({ min: -1000, max: 1000 })),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        },
                    ],
                }}
            />
        </Card>
    )
}