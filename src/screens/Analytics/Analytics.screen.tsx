import styles from "../../styles/dashboard.module.scss";
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

export default function Analytics(){
    const RenderChart = (props: {
        title: string;
        children: React.ReactNode;
    }) => {
        return(<div style={{
            margin: "0.75rem"
        }}>
            <h2>{props?.title}</h2>
            <>{props?.children}</>
        </div>);
    }

    const GenderChart = () => {
        const labels = ["Masculino", "Feminino"];

        return(
            <Line
                datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "",
                            data: labels.map(() => fakerPT_BR.datatype.number({ min: -1000, max: 1000 })),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                    ],
                }}
            />
        )
    }

    return(
        <div className={styles.dashboard}>
            <h2>Relatórios</h2>
            <p>Resumo do perfil dos clientes que consomem seus produtos</p>
            <RenderChart title="Gênero">
                <GenderChart/>
            </RenderChart>
            <RenderChart title="Faixa Etária">
                <></>
            </RenderChart>
            <RenderChart title="Região">
                <></>
            </RenderChart>
            <RenderChart title="Plataforma">
                <></>
            </RenderChart>
            <RenderChart title="Avaliações">
                <></>
            </RenderChart>
            <h2>Comentários</h2>
        </div>
    );
}