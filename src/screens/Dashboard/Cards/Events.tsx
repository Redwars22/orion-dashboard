import { TextField, Button, Stack, Card } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {IEvent} from "../../../global/types";
import React from "react";

export default function EventsComponent(props: {
    data: IEvent[]
}) {
    const [date, setDate] = React.useState("");
    const [event, setEvent] = React.useState([]);
    
    return (
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem"
        }}>
            <h2>Eventos</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <div style={{
                maxWidth: "150px",
                marginLeft: "auto",
                marginRight: "auto"
              }}>
                <DatePicker value={date} onChange={(value)=> {
                    const handleVal = () => {
                      let val = value!.split(" ");
                      let val2 = [val[1], val[2], val[3]]; 
                      return val2;
                    }

                    const val = handleVal();

                    setDate(value ? value : "");    
                    window.alert(val)
                }}
                />
              </div>
            </LocalizationProvider>
            <span>Nenhuma data selecionada ou não há nenhum evento previsto para a data selecionada!</span>
        </Card>
    )
}
