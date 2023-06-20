import React from "react";
import styles from "../../styles/dashboard.module.scss";
import { Stack, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function SettingsScreen() {
  const [data, setData] = React.useState({});
  const [form, setFormData] = React.useState<{
    twoFactorAuth: boolean
  }>({
    twoFactorAuth: true
  });

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
      <Stack spacing={2} sx={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "375px"
      }}>
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
              fullWidth
            />
            <TextField id="filled-basic" label="Filled" variant="filled" fullWidth />
            <InputLabel id="demo-simple-select-label">
              Habilitar autenticação de dois fatores
            </InputLabel>
            <h3>Segurança</h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.twoFactorAuth}
              label="Habilitar autenticação de dois fatores"
              onChange={(e) => setFormData((s)=>({
                ...s,
                twoFactorAuth: e.target.value
              }))}
              fullWidth
            >
              <MenuItem value={true}>Habilitado</MenuItem>
              <MenuItem value={false}>Desabilitado</MenuItem>
            </Select>
            <InputLabel id="demo-simple-select-label">
              Escolher administrador
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Administrador"
              onChange={() => { }}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
            <TextField
              id="filled-basic"
              label="Senha antiga"
              variant="filled"
              type="password"
              fullWidth
              disabled
            />
            <TextField
              id="filled-basic"
              label="Senha nova"
              variant="filled"
              type="password"
              fullWidth
              disabled
            />
            <Button variant="outlined" color="success" disabled>
              Salvar
            </Button>
            <h3>Ativação e Backup</h3>
            <span>
              O Orionboard está ativado até 08/06/2024!
              <br />
              Chave de produto: 9KDE4-9YOP2-5643W-NDKJP-Z345I
            </span>
            <Button variant="outlined" color="info" disabled>
              Alterar chave de produto
            </Button>
            <hr />
            <Button variant="outlined" color="secondary">
              Exportar todos os dados
            </Button>
            <Button variant="outlined" color="warning" disabled>
              Excluir empresa
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
}
