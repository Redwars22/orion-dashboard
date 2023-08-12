interface IEventCardData {
    uuid: string;
    title: string;
    description: string;
}

export default function EventCard(props: IEventCardData){
    const handleInfoButton = () => {
        alert(props.description);
    }

    const handleOpenInCalendar = () => {
        window.open(`https://andreweventscalendar.tk/events/uuid=${props.uuid}`);
    }

    return(
        <>
            <span>${props.title}</span>
            <button onClick={handleInfoButton}>i</button>
            <button onClick={handleOpenInCalendar}>+</button>
        </>
    )
}