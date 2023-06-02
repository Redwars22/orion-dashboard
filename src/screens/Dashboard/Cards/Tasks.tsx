import Card from "@mui/material/Card";

export default function TasksComponent(){
    return(
        <Card variant={"outlined"} sx={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            borderRadius: "10px",
            flex: 1
        }}>
            <h2>Tarefas</h2>
            <ol>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
                <li>Tarefa 3</li>
            </ol>
        </Card>
    );
}