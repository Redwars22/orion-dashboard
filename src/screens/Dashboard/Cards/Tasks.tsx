import Card from "@mui/material/Card";
import { IProjects } from "../../../global/types";
import React from "react";

export default function TasksComponent(props: {
    data: IProjects[]
}){
  
    const getTaskStatus = (status: string) => {
      return <strong
      style={{
        color: status === "todo" ? "#ff5722" : status === "doing" ? "#00bcd4" : status === "done" ? "#009688" : "#000"
      }}
      >
        {status === "todo" ? "NÃO INICIADO" : status === "doing" ? "EM PROGRESSO" : status === "done" ? "CONCLUÍDO" : ""}
      </strong>
    }
  
    return(
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1
        }}>
            <h2>Tarefas</h2>
            <ol>
                <>{props.data && props.data!.map((item: IProjects) => <span>
                  {getTaskStatus(item.status)} - {item?.title} ({item?.owner})
                </span>)}</>
            </ol>
        </Card>
    );
}
