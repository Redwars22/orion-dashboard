import styles from "../../styles/dashboard.module.scss";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { fakerPT_BR } from '@faker-js/faker';
import {IAthenaAPI} from "../../global/types"

export default function Analytics(){
	const [analyticsData, setAnalyticsData] = React.useState<IAthenaAPI>();
	const [username, setUsername] = React.useState("andrewnation_sftw");

	React.useEffect(()=>{
		async function getAnalytics(){
			const analytics = await fetch("./athenaAPI.json");
			const res = await analytics.json();
			setAnalyticsData(res[username]);
		}
	}, [])

    const RenderChart = (props: {
        title: string;
        children: React.ReactNode;
    }) => {
        return(<div style={{
            margin: "0.75rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h2>{props?.title}</h2>
            <div style={{
                maxWidth: "300px",
                maxHeight: "300px",
            }}>{props?.children}</div>
        </div>);
    }

    const GenderChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: analyticsData?.clients?.labels!,
		  datasets: [
		    {
		      label: 'Clientes quanto a gênero',
		      data: analyticsData?.clients?.data!,
		      backgroundColor: [
		        'rgba(255, 99, 132, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(255, 206, 86, 0.2)'
		      ],
		      borderColor: [
		        'rgba(255, 99, 132, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(255, 206, 86, 1)'
		      ],
		      borderWidth: 1,
		    },
		  ],
		};

        return <Doughnut data={data} />
    }
	
    const AgeChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: ['0 a 9', '10 a 16', '16 a 18', '19 a 30', '30 a 55', '55+'],
		  datasets: [
		    {
		      label: 'Clientes quanto a faixa etária',
		      data: [1, 12, 317, 9872, 215, 39],
		      backgroundColor: [
		        'rgba(255, 99, 132, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(255, 206, 86, 0.2)',
		        'rgba(75, 192, 192, 0.2)',
		        'rgba(153, 102, 255, 0.2)',
		        'rgba(255, 159, 64, 0.2)',
		      ],
		      borderColor: [
		        'rgba(255, 99, 132, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(255, 206, 86, 1)',
		        'rgba(75, 192, 192, 1)',
		        'rgba(153, 102, 255, 1)',
		        'rgba(255, 159, 64, 1)',
		      ],
		      borderWidth: 1,
		    },
		  ],
		};

        return <Doughnut data={data} />
    }

    const GeographyChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: ['Sul', 'Norte', 'Nordeste', 'Sudeste', 'Centro-Oeste', 'Fora do Brasil'],
		  datasets: [
		    {
		      label: 'Clientes quanto a região',
		      data: [19987, 8192, 4317, 9872, 2215, 3219],
		      backgroundColor: [
		        'rgba(255, 99, 132, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(255, 206, 86, 0.2)',
		        'rgba(75, 192, 192, 0.2)',
		        'rgba(153, 102, 255, 0.2)',
		        'rgba(255, 159, 64, 0.2)',
		      ],
		      borderColor: [
		        'rgba(255, 99, 132, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(255, 206, 86, 1)',
		        'rgba(75, 192, 192, 1)',
		        'rgba(153, 102, 255, 1)',
		        'rgba(255, 159, 64, 1)',
		      ],
		      borderWidth: 1,
		    },
		  ],
		};

        return <Doughnut data={data} />
    }

    
    const PlataformChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: ['Site Desktop', 'Site Móvel', 'Aplicativo Android', 'Aplicativo iOS', 'Parceiros', 'Loja Física'],
		  datasets: [
		    {
		      label: 'Clientes quanto a plataforma que usaram para adquirir os produtos',
		      data: [2980, 987, 19876, 1892, 8215, 7219],
		      backgroundColor: [
		        'rgba(255, 99, 132, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(255, 206, 86, 0.2)',
		        'rgba(75, 192, 192, 0.2)',
		        'rgba(153, 102, 255, 0.2)',
		        'rgba(255, 159, 64, 0.2)',
		      ],
		      borderColor: [
		        'rgba(255, 99, 132, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(255, 206, 86, 1)',
		        'rgba(75, 192, 192, 1)',
		        'rgba(153, 102, 255, 1)',
		        'rgba(255, 159, 64, 1)',
		      ],
		      borderWidth: 1,
		    },
		  ],
		};

        return <Doughnut data={data} />
    }


    const RatingsChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: ['Péssimo', 'Ruim', 'Regular', 'Bom', 'Ótimo', 'Excelente'],
		  datasets: [
		    {
		      label: 'Satisfação dos usuários em relação aos serviços prestados',
		      data: [987, 89192, 4317, 19872, 92215, 3219],
		      backgroundColor: [
		        'rgba(255, 99, 132, 0.2)',
		        'rgba(54, 162, 235, 0.2)',
		        'rgba(255, 206, 86, 0.2)',
		        'rgba(75, 192, 192, 0.2)',
		        'rgba(153, 102, 255, 0.2)',
		        'rgba(255, 159, 64, 0.2)',
		      ],
		      borderColor: [
		        'rgba(255, 99, 132, 1)',
		        'rgba(54, 162, 235, 1)',
		        'rgba(255, 206, 86, 1)',
		        'rgba(75, 192, 192, 1)',
		        'rgba(153, 102, 255, 1)',
		        'rgba(255, 159, 64, 1)',
		      ],
		      borderWidth: 1,
		    },
		  ],
		};

        return <Doughnut data={data} />
    }

    return(
        <div className={styles.dashboard}>
            <h2>Relatórios</h2>
            <p>Resumo do perfil dos clientes que consomem seus produtos</p>
            <RenderChart title="Gênero">
                <GenderChart/>
            </RenderChart>
            <RenderChart title="Faixa Etária">
                <AgeChart/>
            </RenderChart>
            <RenderChart title="Região">
                <GeographyChart/>
            </RenderChart>
            <RenderChart title="Plataforma">
                <PlataformChart/>
            </RenderChart>
            <RenderChart title="Avaliações">
                <RatingsChart/>
            </RenderChart>
			<div>
        <h2>Comentários</h2>
				<div>
					<span>
						<strong>Naruto Uzumaki</strong>
					</span>
					<p>
						Lorem ipsum dolor sit amet amen lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
        </div>
    );
}
