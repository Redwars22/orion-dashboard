import {Avatar, Card, CardContent, Typography, Button, Rating, CardActions} from "@mui/material";
import {IAthenaComment} from "../../global/types";

export default function CommentCard(props: IAthenaComment){
    return(
        <Card sx={{ maxWidth: 275 }}>
        <CardContent>
        <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "0.25rem"
        }}><Avatar sx={{ bgcolor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }}>
            {props.name.split(" ").map((char) => char.charAt(0)).join("")}
        </Avatar>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.name}
          </Typography>
            <Rating name="read-only" value={props.rating} readOnly />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.date}
          </Typography>
            </div>
            <div style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start"
            }}>
          <Typography variant="body2">
              {props.comment}
          </Typography>
                </div>
        </CardContent>
        <CardActions>
          <Button size="small">Responder</Button>
        </CardActions>
      </Card>
    );
}
