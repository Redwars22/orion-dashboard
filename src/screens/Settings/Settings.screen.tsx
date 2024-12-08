import React from "react";
import styles from "../../styles/dashboard.module.scss";
import { Stack, Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { triggerToast } from "../../utils/toast";
import { ERROR_CODES } from "../../global/errors";

export default function SettingsScreen() {
  const [data, setData] = React.useState({});
  const [form, setFormData] = React.useState<{
    twoFactorAuth: boolean;
    admin: string[];
    selectedAdmin: string;
    businessName: string;
    CNPJ: string;
    productKey: string;
    expiryDate: string;
    readOnly: boolean;
  }>({
    twoFactorAuth: true,
    admin: [],
    selectedAdmin: "",
    businessName: "",
    CNPJ: "",
    productKey: "",
    expiryDate: "",
    readOnly: false
  });

  React.useEffect(() => {
    async function getBusinessData() {
      const data = await fetch("./api.json");
      const response = await data.json();

      setFormData(response.business.settings);
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
        <h2>CONFIGURAÇÕES</h2>
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
              alignItems: "center"
            }}
          >
            <TextField
              id="filled-basic"
              label="Nome da Empresa"
              variant="filled"
              color="error"
              focused
              fullWidth
              value={form.businessName}
              sx={{
                backgroundColor: "#2d2b2b",
              }}
            />
            <TextField id="filled-basic" label="CNPJ" variant="filled" color="error"
              focused fullWidth value={form.CNPJ} sx={{
                backgroundColor: "#2d2b2b",
              }}/>
            <h3>Segurança</h3>
            <InputLabel id="demo-simple-select-label" color="error"
              focused>
              Habilitar autenticação de dois fatores
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.twoFactorAuth}
              label="Habilitar autenticação de dois fatores"
              onChange={(e) => setFormData((s) => ({
                ...s,
                twoFactorAuth: Boolean(e.target.value === "true")
              }))}
              fullWidth
              color="error"
              sx={{
                backgroundColor: "#2d2b2b",
              }}
            >
              <MenuItem value={"true"}>Habilitado</MenuItem>
              <MenuItem value={"false"}>Desabilitado</MenuItem>
            </Select>
            <InputLabel id="demo-simple-select-label" color="error">
              Escolher administrador
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.selectedAdmin}
              label="Administrador"
              onChange={(e) => setFormData((s) => ({
                ...s,
                selectedAdmin: e.target.value
              }))}
              fullWidth
              color="error"
              sx={{
                backgroundColor: "#2d2b2b",
              }}
            >
              <>{form.admin.map((item) => <MenuItem value={`${item}`}>{item}</MenuItem>)}</>
            </Select>
            <br/>
            <TextField
              id="filled-basic"
              label="Senha antiga"
              variant="filled"
              type="password"
              fullWidth
              disabled
              color="error"
              focused
            />
            <TextField
              id="filled-basic"
              label="Senha nova"
              variant="filled"
              type="password"
              fullWidth
              disabled
              color="error"
              focused
            />
            <Button variant="contained" color="success">
              Salvar
            </Button>
            <br/>
            <h3>Ativação e Backup</h3>
            <span>
              O Orionboard está ativado até 08/06/2024!
              <br />
              Chave de produto: {form.productKey}
            </span>
            <Button variant="contained" color="error" onClick={() => {
              if(form.readOnly) triggerToast(ERROR_CODES.UNAVAILABLE_ACTION_READ_MODE)  
            }}>
              Alterar chave de produto
            </Button>
            <Button variant="contained" color="error">
              Exportar todos os dados
            </Button>
            <Button variant="contained" color="warning" onClick={() => {
              if(form.readOnly) triggerToast(ERROR_CODES.UNAVAILABLE_ACTION_READ_MODE)  
            }}>
              Excluir empresa
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
}
