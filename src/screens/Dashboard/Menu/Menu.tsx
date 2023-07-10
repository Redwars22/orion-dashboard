import { Stack, Button } from "@mui/material";
import Brand from "../../../global/Brand";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import FaceIcon from '@mui/icons-material/Face';
import PollIcon from '@mui/icons-material/Poll';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from "react-router-dom";
import ReadOnly from "../../../global/ReadOnly";
import LogoutIcon from '@mui/icons-material/Logout';
import styles from "../../../styles/menu.module.scss";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <div className={styles.menu}>
            <Stack spacing={2}>
                <div className={styles.menuLabel}><Brand isBlue={false} /></div>
                <Button variant="text" sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={()=> navigate("/dashboard")}
                >
                    <PieChartIcon />
                    <span className={styles.menuLabel}>Dashboard</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={()=> navigate("/clients")}
                >
                    <FaceIcon />
                    <span className={styles.menuLabel}>Clientes</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={()=> navigate("/finances")}
                >
                    <PollIcon />
                    <span className={styles.menuLabel}>Financeiro</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={() => navigate("/projects")}    
                >
                    <SportsScoreIcon />
                    <span className={styles.menuLabel}>Projetos</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={() => navigate("/analytics")}
                >
                    <BarChartIcon />
                    <span className={styles.menuLabel}>Relatório</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={() => navigate("/settings")}
                >
                    <SettingsIcon />
                    <span className={styles.menuLabel}>Configurações</span>
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={() => navigate("/")}
                >
                    <LogoutIcon />
                    <span className={styles.menuLabel}>Sair</span>
                </Button>
                {true && <div className={styles.menuLabel}><ReadOnly/></div>}
            </Stack>
        </div>
    )
}
