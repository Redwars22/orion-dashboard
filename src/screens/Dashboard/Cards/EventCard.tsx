import styles from "../../../styles/eventscard.module.scss";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

interface IEventCardData {
    uuid: string;
    title: string;
    description: string;
}

export default function EventCard(props: IEventCardData) {
    const handleInfoButton = () => {
        alert(props.description);
    }

    const handleOpenInCalendar = () => {
        window.open(`https://andreweventscalendar.tk/events/uuid=${props.uuid}`);
    }

    return (
        <div className={styles.eventsContainer}>
            <CalendarMonthIcon />
            <span className={styles.eventTitle}>{props.title}</span>
            <IconButton aria-label="delete" size="large" color="secondary" onClick={handleInfoButton}>
                <InfoIcon fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="delete" size="large" color="primary" onClick={handleOpenInCalendar}>
                <VisibilityIcon fontSize="inherit" />
            </IconButton>
        </div>
    )
}