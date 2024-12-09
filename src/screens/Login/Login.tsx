import { Stack, TextField, Button, Typography, Input } from "@mui/material";
import { useState } from "react";
import Brand from "../../global/Brand";
import { useNavigate } from "react-router-dom";
import {credentials} from "../../global/login";

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(false);
  const [invalid, setInvalid] = useState(false)

	const navigate = useNavigate();

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if(username === credentials.username && password === credentials.password)
      navigate("/dashboard");
    else setInvalid(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginTop: "125px"
    }}>
      <Stack className={"login-form"} sx={{
        justifyContent: "center"
      }} spacing={2}>
        <Brand isBlue={false} />
        <TextField
          label="Nome de Usuário"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
          variant="filled"
          color="secondary"
        />
        <Input
          placeholder="Nome de Usuário"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
          color="primary"
        />
        <TextField
          label="Senha"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
          margin="normal"
          variant="filled"
          color="secondary"
        />
        {invalid && <Typography style={{
          color: "#FD6060"
        }}>Nenhum usuário com essas informações foi encontrado. Tente novamente!</Typography>}
        <Button type="submit" variant="contained" color="error">
          Login
        </Button>
        <Typography>Esqueceu seu login ou senha?</Typography>
        <a style={{
          color: "#FD6060"
        }} href="https://andrewnationdev.vercel.app/docs/projects/orionboard">Entre em contato com o administrador</a>
      </Stack>
    </form>
  )
}
