import { Stack, TextField, Button } from "@mui/material";
import { useState } from "react";
import Brand from "../../global/Brand";
import { useNavigate } from "react-router-dom";
import {credentials} from "../../../global/login.ts";

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
    <form onSubmit={handleSubmit}>
      <Stack className={"login-form"} spacing={2}>
        <Brand isBlue />
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
        {invalid && <span style={
          color: "red"
        }></span>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <span>Esqueceu seu login ou senha?</span>
        <a href="">Entre em contato com o administrador</a>
      </Stack>
    </form>
  )
}
