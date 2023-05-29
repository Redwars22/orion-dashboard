import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import { TextField, Button, Stack, Card } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
import {fakerPT_BR} from '@faker-js/faker';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);

  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLogged(true);
  };

  const Brand = (props: {isBlue: boolean}) => (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      fontFamily: "Roboto Slab",
      color: props.isBlue ? "#2577fa" : "#fff"
    }}>
        <BubbleChartIcon fontSize='large'/>
        <h2>ΟΡΙΟΝΜΠÓΡΔ</h2>
    </div>
  )

  const LoginForm = () => (
    <form onSubmit={handleSubmit}>
      <Stack className={"login-form"} spacing={2}>
        <Brand isBlue/>
        <TextField
          label="Username"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <span>Esqueceu seu login ou senha?</span>
        <a href="">Entre em contato com o administrador</a>
      </Stack>
    </form>
  )

const labels = ['Jun', 'Jul', 'Aug']


  return (
    <div className="App">
      {!logged && <LoginForm />}
      {logged && <div style={{display: "flex", maxWidth: "100vw"}}>
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
        <Brand isBlue={false}/>
          <Button variant="text"  sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <PieChartIcon/>
            Dashboard
          </Button>
          <Button sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <FaceIcon/>
            Clientes
          </Button>
          <Button sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <PollIcon/>
            Financeiro
          </Button>
          <Button sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <SportsScoreIcon/>
            Projetos
          </Button>
          <Button sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <BarChartIcon/>
            Relatório
          </Button>
          <Button sx={{
              color: "#fff",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-start"
            }}>
            <SettingsIcon/>
            Configurações
          </Button>
        </Stack>
      </div>
      <div style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "calc(80vw - 3rem)",
        width: "calc(80vw - 3rem)",
        minWidth: "calc(80vw - 3rem)",
        gap: "0.5rem",
      }}>
            <div style={{
        padding: "0.5rem",
        display: "flex",
        gap: "1rem",
        width: "fill-parent"
      }}>
        <Card variant={"outlined"} sx={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          flex: 1
        }}>
          <h2>Resumo de vendas</h2>
          <span style={{
            color: "#00bf63",
            fontSize: "2rem",
            fontWeight: "900"
          }}>+R$ 9817117,99</span>
          <span>Média diária +R${(Math.random() * 999999).toFixed(2)}</span>
        </Card>
        <Card variant={"outlined"} sx={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "10px",
          flex: 1
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
        </div>
              <div style={{
        padding: "0.5rem",
        display: "flex",
        gap: "1rem",
                maxWidth: "calc(80vw - 3rem)",
        width: "calc(80vw - 3rem)",
        minWidth: "calc(80vw - 3rem)",
      }}>
        <Card variant={"outlined"} sx={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "10px",
          flex: 1
        }}>
          <h2>Tarefas</h2>
          <ol>
            <li>Tarefa 1</li>
            <li>Tarefa 2</li>
            <li>Tarefa 3</li>
          </ol>
        </Card>
        <Card variant={"outlined"} sx={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          borderRadius: "10px",
          flex: 1
        }}>
          <h2>Eventos</h2>
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider>
        </Card>
        </div>
      </div>
      </div>}
    </div>
  );
}

export default App;