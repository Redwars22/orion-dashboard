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

export default function Menu() {
    //const [path, setPath] = useState("");
    const navigate = useNavigate();

    return (
        <div style={{
            borderRightWidth: "2px",
            borderRightStyle: "solid",
            borderRightColor: "#e5e5e5",
            padding: "1rem",
            height: "calc(100vh - 2rem)",
            backgroundColor: "#2577fa",
            maxWidth: "20vw"
        }}>
            <Stack spacing={2}>
                <Brand isBlue={false} />
                <Button variant="text" sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}
                onClick={()=> navigate("/dashboard")}
                >
                    <PieChartIcon />
                    Dashboard
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
                    Clientes
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}>
                    <PollIcon />
                    Financeiro
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}>
                    <SportsScoreIcon />
                    Projetos
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}>
                    <BarChartIcon />
                    Relatório
                </Button>
                <Button sx={{
                    color: "#fff",
                    display: "flex",
                    gap: "0.5rem",
                    justifyContent: "flex-start"
                }}>
                    <SettingsIcon />
                    Configurações
                </Button>
            </Stack>
        </div>
    )
}