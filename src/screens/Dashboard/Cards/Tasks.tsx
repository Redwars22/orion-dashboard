import Card from "@mui/material/Card";
import { IProjects } from "../../../global/types";
import React from "react";

export default function TasksComponent(props: {
    data: IProjects[]
}){
    const [events, setEvents] = React.useState<string[] | []>([]);

    if(props.data.length > 0)
        for(let i = 0; i < props.data.length; i++)
            setEvents([...events, props.data[i]);

    return(
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1
        }}>
            <h2>Tarefas</h2>
            <ol>
                <>{events.map((item) => <li>{item}</li>)}</>
            </ol>
        </Card>
    );
}
