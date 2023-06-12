import styles from "../../styles/dashboard.module.scss";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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
            <div style={{
                maxWidth: "300px",
                maxHeight: "300px"
            }}>{props?.children}</div>
        </div>);
    }

    const GenderChart = () => {
		ChartJS.register(ArcElement, Tooltip, Legend);
		
		const data = {
		  labels: ['Masculino', 'Feminino', 'Não informado'],
		  datasets: [
		    {
		      label: 'Clientes quanto a gênero',
		      data: [1237, 418, 12],
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