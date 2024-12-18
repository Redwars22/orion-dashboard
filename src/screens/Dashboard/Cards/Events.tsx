import { TextField, Button, Stack, Card } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IEvent } from "../../../global/types";
import React from "react";
import dayjs from 'dayjs';
import EventCard from "./EventCard";

export default function EventsComponent(props: {
  data: IEvent[]
}) {
  const [date, setDate] = React.useState("");
  const [eventsInThatDate, setEventsInThatDate] = React.useState<IEvent[] | []>([]);

  const events: IEvent[] = props.data;

  const updateFilteredEvents = React.useCallback((date: string) => {
    console.log(events, date)
    const eventsFiltered: IEvent[] = events?.filter((i: IEvent) => i.date === date);

    setEventsInThatDate(eventsFiltered);
  }, [date, events])

  const getEventCards = React.useCallback(() => <>
    {eventsInThatDate?.map((i: IEvent) => <EventCard title={i.title} uuid={i.uuid} description={i.description} />)}
  </>, [eventsInThatDate])

  return (
    <Card variant={"outlined"} sx={{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
      borderRadius: "10px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      backgroundColor: "#151b1c",
      color: "#fff"
    }}>
      <h2>EVENTOS</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{
          maxWidth: "150px",
          marginLeft: "auto",
          marginRight: "auto"
        }}>
          <DatePicker value={date} onChange={(value) => {
            if (value) {
              const formattedDate = dayjs(value).format('MM-DD-YYYY');
              setDate(formattedDate)
              updateFilteredEvents(formattedDate);
            }
          }}
          />
        </div>
      </LocalizationProvider>
      {eventsInThatDate?.length === 0 ?
        <span>Nenhuma data selecionada ou não há nenhum evento previsto para a data selecionada!</span> :
        <>{getEventCards()}</>}
    </Card>
  )
}
