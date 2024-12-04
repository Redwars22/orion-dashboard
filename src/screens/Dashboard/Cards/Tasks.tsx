import Card from "@mui/material/Card";
import { IProjects } from "../../../global/types";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TasksComponent(props: {
  data: IProjects[]
}) {
  const navigate = useNavigate();

  const getTaskStatus = (status: string) => {
    return <strong
      style={{
        color: status === "todo" ? "#ff5722" : status === "doing" ? "#00bcd4" : status === "done" ? "#009688" : "#000"
      }}
    >
      {status === "todo" ? "NÃO INICIADO" : status === "doing" ? "EM PROGRESSO" : status === "done" ? "CONCLUÍDO" : ""}
    </strong>
  }

  const tasks = () => {
    const _tasks: IProjects[] = [];

    for (let i = 0; i < 3; i++) {
      if (props.data[i]) {
        _tasks.push(props.data[i]);
      } else {
        break;
      }
    }

    return _tasks;
  }

  return (
    <Card variant={"outlined"} sx={{
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
      paddingBottom: "0.5rem",
      borderRadius: "10px",
      flex: 1,
      backgroundColor: "#151b1c"
    }}>
      <h2>Tarefas</h2>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "flex-start",
        marginLeft: "0.5rem"
      }}>
        {props.data && tasks()!.map((item: IProjects) => <span>
          {getTaskStatus(item.status)} - {item?.title} ({item?.owner})
        </span>)}
      </div>
      <Button sx={{ marginTop: "0.75rem" }} type="submit" variant="contained" color="primary" onClick={() => navigate("/projects")}>
        Ver todas as tarefas
      </Button>
    </Card>
  );
}
