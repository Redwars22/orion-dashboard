import {Alert, AlertTitle} from "@mui/material";

export default function ReadOnly() {
    return (
        <div style={{
            maxWidth: "150px"
        }}>
        <Alert severity="info">
            <AlertTitle>Modo somente leitura</AlertTitle>
            Você está no modo somente visualização porque sua conta não tem permissões de edição. Contate seu administrador.
        </Alert>
        </div>
    )
}