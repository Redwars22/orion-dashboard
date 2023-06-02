import { TextField, Button, Stack, Card } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function EventsComponent() {
    return (
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        }}>
            <h2>Eventos</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
            </LocalizationProvider>
            <span>Nenhuma data selecionada ou não há nenhum evento previsto para a data selecionada!</span>
        </Card>
    )
}