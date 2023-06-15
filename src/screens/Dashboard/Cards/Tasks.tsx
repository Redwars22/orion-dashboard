import Card from "@mui/material/Card";
import { IProjects } from "../../../global/types";
import React from "react";

export default function TasksComponent(props: {
    data: IProjects[]
}){
    return(
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1
        }}>
            <h2>Tarefas</h2>
            <ol>
                <>{props.data.map((item: IProjects) => <li>{item?.title}</li>)}</>
            </ol>
        </Card>
    );
}
