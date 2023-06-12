import styles from "../../styles/dashboard.module.scss";

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

    return(
        <div className={styles.dashboard}>
            <h2>Relatórios</h2>
            <p>Resumo do perfil dos clientes que consomem seus produtos</p>
            <RenderChart title="Gênero">
                <></>
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