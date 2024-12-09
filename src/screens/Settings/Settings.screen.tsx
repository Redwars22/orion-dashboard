import React from "react";
import styles from "../../styles/dashboard.module.scss";
import { Stack, Button, InputLabel, MenuItem, Select, TextField, Input } from "@mui/material";
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
              gap: "0.5rem",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <span>Nome da Empresa</span>
            <Input
          placeholder="Nome da Empresa"
          value={form.businessName}
          disabled={!form.readOnly}
          fullWidth
          sx={{
            color: "#f44336 !important"
          }}
        />
        <span>CNPJ</span>
        <Input
          placeholder="CNPJ"
          value={form.CNPJ}
          disabled={!form.readOnly}
          fullWidth
          sx={{
            color: "#f44336 !important"
          }}
        />
            <h3>Segurança</h3>
            <span>Autenticação de dois fatores</span>
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
            <span>Senha Antiga</span>
        <Input
          placeholder="Senha Antiga"
          type="password"
          value={form.CNPJ}
          disabled={!form.readOnly}
          fullWidth
          sx={{
            color: "#f44336 !important"
          }}
        />

<span>Senha Nova</span>
        <Input
          placeholder="Senha Nova"
          type="password"
          value={form.CNPJ}
          disabled={!form.readOnly}
          fullWidth
          sx={{
            color: "#f44336 !important"
          }}
        />
            <Button variant="contained" color="success" onClick={() => {
              if(form.readOnly) triggerToast(ERROR_CODES.COULD_NOT_SAVE)  
            }}>
              Salvar
            </Button>
            <br/>
            <h3>Ativação e Backup</h3>
            <span>
              O Orionboard está ativado até {form.expiryDate}!
              <br />
              Chave de produto: {form.productKey}
            </span>
            <Button variant="contained" color="error" onClick={() => {
              if(form.readOnly) triggerToast(ERROR_CODES.UNAVAILABLE_ACTION_READ_MODE)  
            }}>
              Alterar chave de produto
            </Button>
            <Button variant="contained" color="error" onClick={() => {
              if(form.readOnly) triggerToast(ERROR_CODES.UNAVAILABLE_ACTION_READ_MODE)  
            }}>
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
