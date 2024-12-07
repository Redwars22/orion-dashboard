import {Alert, AlertTitle} from "@mui/material";

export default function ReadOnly() {
    return (
        <div>
        <Alert severity="error">
            <AlertTitle>Modo somente leitura</AlertTitle>
            Sua conta não tem permissões de edição. Contate seu administrador.
        </Alert>
        </div>
    )
}