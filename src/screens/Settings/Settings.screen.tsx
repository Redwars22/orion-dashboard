import React from "react";
import styles from "../../styles/dashboard.module.scss";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function SettingsScreen() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    async function getBusinessData() {
      const data = await fetch("./api.json");
      const response = await data.json();

      setData(response.business);
    }

    getBusinessData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div
        className={styles.row}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Configurações</h2>
      </div>
      <div>
        <h3>Detalhes da Empresa</h3>
        <div
          style={{
            display: "flex",
            gap: "0.3rem",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <TextField
            id="filled-basic"
            label="Nome da Empresa"
            variant="filled"
          />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <InputLabel id="demo-simple-select-label">
            Habilitar autenticação de dois fatores
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Habilitar autenticação de dois fatores"
            onChange={() => {}}
          >
            <MenuItem value={10}>Sim</MenuItem>
            <MenuItem value={20}>Não</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-label">
            Escolher administrador
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Administrador"
            onChange={() => {}}
          >
            <MenuItem value={10}>1</MenuItem>
            <MenuItem value={20}>2</MenuItem>
            <MenuItem value={30}>3</MenuItem>
          </Select>
          <Button variant="outlined" color="success">
            Salvar
          </Button>
          <hr />
          <TextField
            id="filled-basic"
            label="Senha antiga"
            variant="filled"
            type="password"
          />
          <TextField
            id="filled-basic"
            label="Senha nova"
            variant="filled"
            type="password"
          />
          <Button variant="outlined" color="success">
            Alterar Senha
          </Button>
          <hr />
          <span>
            O Orionboard está ativado até 08/06/2024!
            <br />
            Chave de produto: 9KDE4-9YOP2-5643W-NDKJP-Z345I
          </span>
          <Button variant="outlined" color="success">
            Alterar chave de produto
          </Button>
          <hr />
          <Button variant="outlined" color="success">
            Exportar todos os dados
          </Button>
          <Button variant="outlined" color="success">
            Excluir empresa
          </Button>
        </div>
      </div>
    </div>
  );
}
