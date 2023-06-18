import { Button, TextField, SpeedDial, SpeedDialAction } from "@mui/material";
import styles from "../../styles/dashboard.module.scss";
import React from "react";
import { IProjects } from "../../global/types";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';

export default function ProjectsScreen() {
  const [data, setData] = React.useState<{
    todo: IProjects[] | [];
    doing: IProjects[] | [];
    done: IProjects[] | [];
  }>({
    todo: [],
    doing: [],
    done: [],
  });

  React.useEffect(() => {
    async function getBusinessData() {
      const data = await fetch("./api.json");
      const response = await data.json();

      const todoItems = response.business.projects.filter(
        (item: IProjects) => item.status === "todo"
      );
      const doingItems = response.business.projects.filter(
        (item: IProjects) => item.status === "doing"
      );
      const doneItems = response.business.projects.filter(
        (item: IProjects) => item.status === "done"
      );

      setData((s) => ({
        todo: todoItems,
        doing: doingItems,
        done: doneItems,
      }));
    }

    getBusinessData();
  }, []);

  const ColumnHeader = (props: {
    status: "todo" | "doing" | "done";
    amount: number;
  }) => {
    const title = () => {
      switch (props.status) {
        case "todo":
          return "Não iniciado";
        case "doing":
          return "Em progresso";
        case "done":
          return "Concluído";
      }
    };

    return (
      <div
        style={{
          padding: "5px",
          margin: "10px"
        }}
      >
        <span
          style={{
            padding: "5px",
            borderRadius: "5px",
            backgroundColor:
              props.status === "todo"
                ? "#eba11a"
                : props.status === "doing"
                  ? "#2d63dd"
                  : props.status === "done"
                    ? "#37d360"
                    : "black",
            color: "white",
          }}
        >
          {title()}
        </span>
        <span style={{
          fontWeight: "bold",
          color: props.status === "todo"
            ? "orange"
            : props.status === "doing"
              ? "blue"
              : props.status === "done"
                ? "green"
                : "black",
          marginLeft: "5px"
        }}>{props.amount}</span>
      </div>
    );
  };

  return (
    <div className={styles.dashboard}>
      <div
        className={styles.row}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2>Projetos</h2>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        <TextField
          id="filled-basic"
          label="Digite aqui para pesquisar"
          variant="filled"
        />
        <Button variant="contained">Pesquisar</Button>
        <Button variant="contained">Novo Item</Button>
        <Button variant="contained" color="error">Lixeira</Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "33% 33% 33%",
          columnGap: "10px"
        }}
      >
        <div style={{
          backgroundColor: "#ebe9e9",
          borderRadius: "10px"
        }}>
          <ColumnHeader status={"todo"} amount={data.todo?.length} />
          <>{data.todo?.map((item) => <div style={{
            backgroundColor: "#ff5722",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            textAlign: "left",
            cursor: "move"
          }}>
            <span style={{ fontSize: "12px" }}><strong>{item?.title}</strong></span>
            <p style={{ fontSize: "12px" }}>{item?.description}</p>
            <span style={{ fontSize: "10px" }}>{item?.date} - {item?.owner}</span>
          </div>)}</>
        </div>
        <div style={{
          backgroundColor: "#ebe9e9",
          borderRadius: "10px"
        }}>
          <ColumnHeader status={"doing"} amount={data.doing?.length} />
          <>{data.doing?.map((item) => <div style={{
            backgroundColor: "#00bcd4",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            textAlign: "left",
            cursor: "move"
          }}>
            <span style={{ fontSize: "12px" }}><strong>{item?.title}</strong></span>
            <p style={{ fontSize: "12px" }}>{item?.description}</p>
            <span style={{ fontSize: "10px" }}>{item?.date} - {item?.owner}</span>
          </div>)}</>
        </div>
        <div style={{
          backgroundColor: "#ebe9e9",
          borderRadius: "10px",
          cursor: "move"
        }}>
          <ColumnHeader status={"done"} amount={data.done?.length} />
          <>{data.done?.map((item) => <div style={{
            backgroundColor: "#009688",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            margin: "5px",
            textAlign: "left"
          }}>
            <span style={{ fontSize: "12px" }}><strong>{item?.title}</strong></span>
            <p style={{ fontSize: "12px" }}>{item?.description}</p>
            <span style={{ fontSize: "10px" }}>{item?.date} - {item?.owner}</span>
          </div>)}</>
        </div>
      </div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<AddIcon />}
      >
        {[
          {
            key: "search",
            icon: <SearchIcon/>,
            name: "Pesquisar"
          },
          {
            key: "newitem",
            icon: <AddBoxIcon />,
            name: "Novo Item"
          },
          {
            key: "lixeira",
            icon: <DeleteOutlineIcon />,
            name: "Lixeira"
          }
        ].map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
